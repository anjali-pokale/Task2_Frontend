import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if (credentials.username.trim() === '' || credentials.password.trim() === '') {
      alert('Please enter both username and password');
      return;
    }

    // Placeholder login check
    if (credentials.username === 'admin' && credentials.password === 'admin') {
      alert('Login successful!');
      navigate('/'); // Redirect to home/dashboard
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className='h-[98vh] flex items-center justify-center bg-gray-900 text-white'>
      <div className='p-6 w-11/12 sm:w-2/4 md:w-1/3 lg:w-1/4 rounded bg-gray-800 shadow-md'>
        <div className='text-2xl font-semibold text-center mb-4'>Log In</div>
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder='Username'
            name="username"
            value={credentials.username}
            onChange={handleChange}
            className='px-2 py-2 mb-3 w-full bg-gray-700 rounded outline-none text-white'
            autoComplete="username"
          />

          <input
            type="password"
            placeholder='Password'
            name="password"
            value={credentials.password}
            onChange={handleChange}
            className='px-2 py-2 mb-3 w-full bg-gray-700 rounded outline-none text-white'
            autoComplete="current-password"
          />

          <button
            type="submit"
            className='w-full bg-blue-400 hover:bg-blue-500 text-xl font-semibold text-black px-3 py-2 rounded transition duration-300'
          >
            Login
          </button>
        </form>

        <div className='mt-4 text-sm text-center'>
          <Link to="/signup" className='text-gray-400 hover:text-blue-300'>
            Not having an account? Sign up here
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
