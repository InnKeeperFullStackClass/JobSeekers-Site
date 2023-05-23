import formidable from "formidable";
import fs from "fs";
import path from "path";

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  if (req.method === "POST") {
    const form = new formidable.IncomingForm();
    form.uploadDir = "./public/profile-pictures"; // Set the upload directory

    try {
      // Parse the incoming form data
      form.parse(req, async (err, fields, files) => {
        if (err) {
          console.error(err);
          return res
            .status(500)
            .json({ error: "Error uploading profile picture" });
        }

        const { userId } = fields;
        const { profilePicture } = files;

        // Generate a unique filename for the uploaded profile picture
        const filename = `${userId}-${profilePicture.name}`;

        // Move the uploaded file to the desired location
        fs.renameSync(profilePicture.path, path.join(form.uploadDir, filename));

        // Save the filename or the file path in the user's profile in the database

        return res
          .status(200)
          .json({ message: "Profile picture uploaded successfully" });
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Error uploading profile picture" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
