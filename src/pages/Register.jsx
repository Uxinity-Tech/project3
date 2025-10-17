import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = ({ onRegister }) => {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = e => {
    e.preventDefault();
    onRegister(form); // Connect backend registration
    navigate("/login");
  };

  return (
    <div className="pt-24 flex justify-center items-center min-h-[80vh]">
      <form onSubmit={handleSubmit} className="bg-white shadow-md p-6 rounded-lg w-full max-w-md space-y-4">
        <h1 className="text-2xl font-bold text-center">Register</h1>
        <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Name" className="w-full p-3 border rounded-lg" required />
        <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Email" className="w-full p-3 border rounded-lg" required />
        <input type="password" name="password" value={form.password} onChange={handleChange} placeholder="Password" className="w-full p-3 border rounded-lg" required />
        <button type="submit" className="bg-pink-500 hover:bg-pink-600 text-white py-3 rounded-lg w-full font-semibold transition">Register</button>
      </form>
    </div>
  );
};

export default Register;
