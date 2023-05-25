import { connectToDatabase } from "../../db/index";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).json({ message: "Method Not Allowed" });
    return;
  }

  const {
    firstName,
    lastName,
    yearOfBirth,
    email,
    whatsappNumber,
    educationalQualification,
    linkedInProfile,
    aspiration,
    reasonForJoining,
  } = req.body;

  // Validate the input
  if (
    !firstName ||
    !lastName ||
    !yearOfBirth ||
    !email ||
    !whatsappNumber ||
    !educationalQualification ||
    !linkedInProfile ||
    !aspiration ||
    !reasonForJoining
  ) {
    res.status(400).json({ message: "All fields are required" });
    return;
  }

  try {
    const client = await connectToDatabase();
    const db = client.db("jobseekers");
    const collection = db.collection("users");

    // Access the collection and perform database operations
    // For example, you can insert a document:
    await collection.insertOne({
      firstName,
      lastName,
      yearOfBirth,
      email,
      whatsappNumber,
      educationalQualification,
      linkedInProfile,
      aspiration,
      reasonForJoining,
    });

    // Close the client connection when done
    client.close();

    res.status(200).json({ message: "Registration successful" });
  } catch (error) {
    console.error("An error occurred:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}
