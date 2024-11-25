import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function SignIn() {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError(null);

    try {
      const res = await axios.post("/api/auth/signin", formData);
      setLoading(false);
      navigate("/");
    } catch (error) {
      setLoading(false);
      setError(error.message || "Something went wrong.");
    }
  };

  return (
    <div className="bg-sky-100 flex justify-center items-center h-screen">
      <div className="w-1/2 h-screen hidden lg:block">
        <img
          src="https://img.freepik.com/fotos-premium/imagen-fondo_910766-187.jpg?w=826"
          alt="Placeholder"
          className="object-cover w-full h-full"
        />
      </div>

      <div className="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2">
        <h1 className="text-2xl font-semibold mb-4">SignIn</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4 bg-sky-100">
            <label htmlFor="email" className="block text-gray-600">
              Email
            </label>
            <input
              type="text"
              id="email"
              name="email"
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
              onChange={handleChange}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-800">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
              onChange={handleChange}
            />
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <button
            type="submit"
            className={`bg-red-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={loading}
          >
            {loading ? "Submitting..." : "SignIn"}
          </button>
        </form>

        <button
          className="bg-blue-800 mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white"
          onClick={() =>
            alert("Google Sign-In functionality not yet implemented.")
          }
        >
          <span className="text-sm text-white tracking-wider">
            Sign-In with Google
          </span>
        </button>

        <div>
          Dont Have an Account?{" "}
          <Link
            className="hover:underline mt-6 text-green-500 text-center"
            to="/sign-up"
          >
            Sign-Up here
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
