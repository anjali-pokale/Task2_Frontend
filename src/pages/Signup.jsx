import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {
  const [formData, setFormData] = useState({ username: '', email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignup = (e) => {
    e.preventDefault();

    const { username, email, password } = formData;

    if (!username || !email || !password) {
      alert("All fields are required!");
      return;
    }

    // Simulate storing in localStorage (or send to backend later)
    const user = { username, email, password };
    localStorage.setItem("user", JSON.stringify(user));
    alert("Signup successful!");

    navigate('/login');
  };

  return (
    <div className='h-[98vh] flex items-center justify-center bg-gray-900 text-white'>
      <div className='p-6 w-11/12 sm:w-2/4 md:w-1/3 lg:w-1/4 rounded bg-gray-800 shadow-md'>
        <div className='text-2xl font-semibold text-center mb-4'>Sign Up</div>
        <form onSubmit={handleSignup}>
          <input
            type="text"
            placeholder='Username'
            name="username"
            value={formData.username}
            onChange={handleChange}
            className='px-2 py-2 mb-3 w-full bg-gray-700 rounded text-white'
            autoComplete="username"
            required
          />

          <input
            type="email"
            placeholder='Email'
            name="email"
            value={formData.email}
            onChange={handleChange}
            className='px-2 py-2 mb-3 w-full bg-gray-700 rounded text-white'
            autoComplete="email"
            required
          />

          <input
            type="password"
            placeholder='Password'
            name="password"
            value={formData.password}
            onChange={handleChange}
            className='px-2 py-2 mb-3 w-full bg-gray-700 rounded text-white'
            autoComplete="new-password"
            required
          />

          <button
            type="submit"
            className='w-full bg-blue-400 hover:bg-blue-500 text-xl font-semibold text-black px-3 py-2 rounded transition duration-300'
          >
            Sign Up
          </button>
        </form>

        <div className='mt-4 text-sm text-center'>
          <Link to="/login" className='text-gray-400 hover:text-blue-300'>
            Already have an account? Log in here
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
