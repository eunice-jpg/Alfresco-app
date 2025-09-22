import React, { useState } from "react";

const Signup: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  const handleRegister = () => {
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Role:", role);
    // Ici, plus tard, on connectera à Alfresco ou à ton backend
  };

  return (
    <div
      style={{
        position: "absolute",
        width: "522px",
        height: "600px",
        background: "#FF7735",
        borderRadius: "50px",
        margin: "5px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Title */}
      <h1
        style={{
          fontFamily: "Inter, sans-serif",
          fontSize: "36px",
          fontWeight: "400",
          lineHeight: "44px",
          color: "#000000",
          marginBottom: "5px",
        }}
      >
        Sign Up
      </h1>

      {/* Sub-title */}
      <h3
        style={{
          fontFamily: "Inter, sans-serif",
          fontSize: "15px",
          fontWeight: "400",
          lineHeight: "18px",
          color: "#000000",
          marginBottom: "20px",
        }}
      >
        Please fill in this form to create an account!
      </h3>

      {/* Email field */}
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{
          width: "396px",
          padding: "5px",
          fontFamily: "Inter, sans-serif",
          fontSize: "24px",
          lineHeight: "29px",
          color: "#000000",
          marginBottom: "15px",
          borderRadius: "8px",
          border: "1px solid #ccc",
        }}
      />

      {/* Password field */}
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{
          width: "396px",
          padding: "5px",
          fontFamily: "Inter, sans-serif",
          fontSize: "24px",
          lineHeight: "29px",
          color: "#000000",
          marginBottom: "15px",
          borderRadius: "8px",
          border: "1px solid #ccc",
        }}
      />

      {/* Select Role */}
      <select
        value={role}
        onChange={(e) => setRole(e.target.value)}
        style={{
          width: "396px",
          padding: "5px",
          fontFamily: "Inter, sans-serif",
          fontSize: "24px",
          lineHeight: "29px",
          color: "#000000",
          marginBottom: "20px",
          borderRadius: "8px",
          border: "1px solid #ccc",
        }}
      >
        <option value="">Select role</option>
        <option value="student">Student</option>
        <option value="teacher">Teacher</option>
        <option value="admin">Admin</option>
      </select>

      {/* Button Register */}
      <button
        onClick={handleRegister}
        style={{
          background: "#FF7735",
          fontFamily: "Inter, sans-serif",
          fontSize: "24px",
          fontWeight: "400",
          lineHeight: "29px",
          color: "#FFFFFF",
          padding: "10px",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          width: "200px",
          marginBottom: "15px",
        }}
      >
        Register
      </button>

      {/* Link Forgot Password */}
      <h6
        style={{
          fontFamily: "Inter, sans-serif",
          fontSize: "14px",
          fontWeight: "400",
          lineHeight: "17px",
          color: "#3AD1FB",
          cursor: "pointer",
        }}
      >
        Forgot password?
      </h6>
    </div>
  );
};

export default Signup;
