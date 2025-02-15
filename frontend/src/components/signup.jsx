import { useState } from "react";
import axios from "axios";
import "./Auth.css";

function Signup({ role }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    degree: "",
    experience: "",
    discipline: "",
    age: "",
    phoneNumber: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      const response = await axios.post("/api/auth/signup", {
        name: formData.name,
        email: formData.email,
        password: formData.password,
        role,
        ...(role === "Doctor" && {
          degree: formData.degree,
          experience: formData.experience,
          discipline: formData.discipline,
        }),
        ...(role === "Patient" && {
          age: formData.age,
          phoneNumber: formData.phoneNumber,
        }),
      });

      const userData = response.data; // Assuming response contains user details and token
      localStorage.setItem("user", JSON.stringify(userData)); // Store user data in localStorage

        setSuccess("Signup successful! You can now log in.");
        window.location.href = "/chats";
    } catch (error) {
      setError(error.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="auth-form">
      <h2>{role} Signup</h2>
      {error && <p className="error-message">{error}</p>}
      {success && <p className="success-message">{success}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        {role === "Doctor" && (
          <>
            <input
              type="text"
              name="degree"
              placeholder="Degree"
              value={formData.degree}
              onChange={handleChange}
              required
            />
            <input
              type="number"
              name="experience"
              placeholder="Experience (years)"
              value={formData.experience}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="discipline"
              placeholder="Discipline"
              value={formData.discipline}
              onChange={handleChange}
              required
            />
          </>
        )}

        {role === "Patient" && (
          <>
            <input
              type="number"
              name="age"
              placeholder="Age"
              value={formData.age}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="phoneNumber"
              placeholder="Phone Number"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
            />
          </>
        )}

        <button type="submit">Signup</button>
      </form>
    </div>
  );
}

export default Signup;
