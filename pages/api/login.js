const signin = async (e) => {
  e.preventDefault();
  try {
    const response = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    });

    if (response.ok) {
      // Successful login
      router.push("/dashboard");
    } else {
      // Invalid credentials
      toast.error("Invalid credentials");
    }
  } catch (err) {
    console.log(err);
    toast.error("An error occurred");
  }
};
