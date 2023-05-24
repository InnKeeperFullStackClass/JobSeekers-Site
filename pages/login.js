import { useState } from "react";
import { useRouter } from "next/router";

export default function RegisterForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        // Login successful, handle the success case
        console.log("Login successful");
        // Redirect to the dashboard page
        router.push("/dashboard");
      } else {
        // Login failed, handle the error case
        const data = await response.json();
        console.error("Login failed:", data.message);
      }
    } catch (error) {
      // Handle any network or server errors
      console.error("An error occurred:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="shadow-md rounded p-6">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        className="block w-full border-gray-300 mb-4 p-2 rounded"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        className="block w-full border-gray-300 mb-4 p-2 rounded"
      />
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
      >
        Login
      </button>
    </form>
  );
}
