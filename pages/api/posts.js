import { connectToDatabase } from "../../db/index";
import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(process.cwd(), "public", "uploads"));
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

// const upload = multer({
//   storage: multer.diskStorage({
//     destination: "./public/uploads",
//     filename: (req, file, cb) => cb(null, file.originalname),
//   }),
// });
export default async function handler(req, res) {
  if (req.method === "POST") {
    upload.single("file")(req, res, async (err) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ message: "File upload failed" });
      }

      const { title, content } = req.body;
      const { filename } = req.file;

      const client = await connectToDatabase();
      const db = client.db();
      const postsCollection = db.collection("posts");
      const result = await postsCollection.insertOne({
        title,
        content,
        filename,
      });
      res.status(201).json({ postId: result.insertedId });
    });
  } else if (req.method === "GET") {
    const client = await connectToDatabase();
    const db = client.db();
    const postsCollection = db.collection("posts");
    const posts = await postsCollection.find().toArray();
    res.status(200).json({ posts });
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
