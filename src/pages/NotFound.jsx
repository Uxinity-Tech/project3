import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="pt-24 text-center min-h-[80vh] flex flex-col justify-center items-center">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-xl mb-6">Page not found.</p>
      <Link to="/" className="bg-pink-500 hover:bg-pink-600 text-white py-3 px-6 rounded-lg font-semibold transition">Go Home</Link>
    </div>
  );
};

export default NotFound;
