import { useState } from "react";
import { useRouter } from "next/router";

export default function RegisterForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [yearOfBirth, setYearOfBirth] = useState("");
  const [email, setEmail] = useState("");
  const [whatsappNumber, setWhatsappNumber] = useState("");
  const [educationalQualification, setEducationalQualification] = useState("");
  const [linkedInProfile, setLinkedInProfile] = useState("");
  const [aspiration, setAspiration] = useState("");
  const [reasonForJoining, setReasonForJoining] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName,
          lastName,
          yearOfBirth,
          email,
          whatsappNumber,
          educationalQualification,
          linkedInProfile,
          aspiration,
          reasonForJoining,
        }),
      });

      if (response.ok) {
        // Registration successful, handle the success case
        console.log("Registration successful");
        // Redirect to the dashboard page
        router.push("/dashboard");
      } else {
        // Registration failed, handle the error case
        const data = await response.json();
        console.error("Registration failed:", data.message);
      }
    } catch (error) {
      // Handle any network or server errors
      console.error("An error occurred:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="shadow-md rounded p-6">
      <div className="mb-4">
        <label htmlFor="firstName" className="text-lg font-semibold">
          First Name
        </label>
        <input
          type="text"
          id="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="Enter your first name"
          className="block w-full border-gray-300 p-2 rounded mt-1"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="lastName" className="text-lg font-semibold">
          Last Name
        </label>
        <input
          type="text"
          id="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          placeholder="Enter your last name"
          className="block w-full border-gray-300 p-2 rounded mt-1"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="yearOfBirth" className="text-lg font-semibold">
          Year of Birth
        </label>
        <input
          type="text"
          id="yearOfBirth"
          value={yearOfBirth}
          onChange={(e) => setYearOfBirth(e.target.value)}
          placeholder="Enter your year of birth"
          className="block w-full border-gray-300 p-2 rounded mt-1"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="text-lg font-semibold">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email address"
          className="block w-full border-gray-300 p-2 rounded mt-1"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="whatsappNumber" className="text-lg font-semibold">
          WhatsApp Number
        </label>
        <input
          type="text"
          id="whatsappNumber"
          value={whatsappNumber}
          onChange={(e) => setWhatsappNumber(e.target.value)}
          placeholder="Enter your WhatsApp number"
          className="block w-full border-gray-300 p-2 rounded mt-1"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="educationalQualification"
          className="text-lg font-semibold"
        >
          Educational Qualification
        </label>
        <input
          type="text"
          id="educationalQualification"
          value={educationalQualification}
          onChange={(e) => setEducationalQualification(e.target.value)}
          placeholder="Enter your educational qualification"
          className="block w-full border-gray-300 p-2 rounded mt-1"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="linkedInProfile" className="text-lg font-semibold">
          LinkedIn Profile
        </label>
        <input
          type="text"
          id="linkedInProfile"
          value={linkedInProfile}
          onChange={(e) => setLinkedInProfile(e.target.value)}
          placeholder="Enter the link to your LinkedIn profile"
          className="block w-full border-gray-300 p-2 rounded mt-1"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="aspiration" className="text-lg font-semibold">
          Aspiration
        </label>
        <input
          type="text"
          id="aspiration"
          value={aspiration}
          onChange={(e) => setAspiration(e.target.value)}
          placeholder="Enter your aspiration"
          className="block w-full border-gray-300 p-2 rounded mt-1"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="reasonForJoining" className="text-lg font-semibold">
          Reason for Joining
        </label>
        <input
          type="text"
          id="reasonForJoining"
          value={reasonForJoining}
          onChange={(e) => setReasonForJoining(e.target.value)}
          placeholder="Enter your reason for joining"
          className="block w-full border-gray-300 p-2 rounded mt-1"
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
      >
        Register
      </button>
    </form>
  );
}
