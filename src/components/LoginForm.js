// LoginForm.js

import React, { useState } from 'react';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Handle login logic here
  };

  return (
    <div className="bg-white p-8 rounded shadow-lg">
      <h2 className="text-2xl text-center mb-4">Login</h2>
      <form onSubmit={handleLogin}>
        <div className="mb-4">
          <label htmlFor="email" className="block text-blue-500 font-bold mb-2">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border-b-2 border-blue-500 text-blue-700"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block text-blue-500 font-bold mb-2">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border-b-2 border-blue-500 text-blue-700"
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 text-white bg-blue-500 hover:bg-blue-600 rounded"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
