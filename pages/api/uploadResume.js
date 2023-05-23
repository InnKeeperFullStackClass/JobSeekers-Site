import formidable from "formidable";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: "YOUR_CLOUDINARY_CLOUD_NAME",
  api_key: "YOUR_CLOUDINARY_API_KEY",
  api_secret: "YOUR_CLOUDINARY_API_SECRET",
});

export default async function handler(req, res) {
  if (req.method === "POST") {
    const form = new formidable.IncomingForm();

    form.parse(req, async (err, fields, files) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: "Error uploading resume" });
      }

      const { resume } = files;

      if (!resume) {
        return res.status(400).json({ error: "No resume file provided" });
      }

      try {
        const result = await cloudinary.uploader.upload(resume.path, {
          resource_type: "auto",
          folder: "resumes",
        });

        // Here, you can save the resume details and the Cloudinary URL to your database

        return res.status(200).json({
          success: "Resume uploaded successfully",
          url: result.secure_url,
        });
      } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Error uploading resume" });
      }
    });
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
