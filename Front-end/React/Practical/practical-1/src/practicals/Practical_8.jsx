import {useState} from 'react'

function Practical_8() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(formData.email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setError("");
    console.log("Form Data:", formData);
    alert(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPassword: ${formData.password}`
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name: </label><br />
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label>Email: </label><br />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label>Password: </label><br />
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
      </div>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <button type="submit">Submit</button>
    </form>
  );
}

export default Practical_8