import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { setCredentials, clearCredentials, setLoading, setError } from '../store/authSlice';

const Login = () => {
  const [credentials, setCredentialsInput] = useState({ userId: '', password: '' });
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.auth);

  const handleLogin = async () => {
    dispatch(setLoading(true));
    try {
      const response = await axios.post('https://sams.24x7healthcare.live/users/login', credentials);
      // console.log(response.data);
      dispatch(setCredentials(response.data));
    } catch (error) {
      // console.log(error.response);
      dispatch(setError(error.response ? error.response.data : 'Login failed'));
    } finally {
      dispatch(setLoading(false));
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-black">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-center text-gray-800">Login</h2>
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Username"
            className="w-full px-4 py-2 text-gray-700 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={credentials.userId}
            onChange={(e) => setCredentialsInput({ ...credentials, userId: e.target.value })}
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 text-gray-700 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={credentials.password}
            onChange={(e) => setCredentialsInput({ ...credentials, password: e.target.value })}
          />
          <button
            onClick={handleLogin}
            disabled={loading}
            className={`w-full px-4 py-2 font-semibold text-white rounded-md focus:outline-none 
              ${loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-700'}
            `}
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
          {error && <p className="mt-2 text-sm text-red-500 text-center">{JSON.stringify(error)}</p>}
        </div>
      </div>
    </div>
  );
};

export default Login;
