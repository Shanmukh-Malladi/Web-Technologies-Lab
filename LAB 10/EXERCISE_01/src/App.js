import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const validate = () => {
    let err = {};
    if (!name) err.name = "Name required";
    if (!email) err.email = "Email required";
    else if (!/\S+@\S+\.\S+/.test(email)) err.email = "Invalid email";
    if (!password) err.password = "Password required";
    return err;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const err = validate();
    if (Object.keys(err).length === 0) {
      alert("Form submitted");
      setName("");
      setEmail("");
      setPassword("");
      setErrors({});
    } else {
      setErrors(err);
    }
  };

  return (
    <div>
      <h1>Form</h1>
      <form onSubmit={handleSubmit}>
        <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
        <p>{errors.name}</p>

        <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
        <p>{errors.email}</p>

        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
        <p>{errors.password}</p>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;