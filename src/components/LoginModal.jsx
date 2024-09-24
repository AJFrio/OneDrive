import React, { useEffect, useState } from 'react';
import { useColorContext } from '../context/ColorContext';
import { useAuthContext } from '../context/AuthContext';

function LoginModal({ onClose }) {
  const { colors } = useColorContext();
  const { login } = useAuthContext();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Trigger the fade-in effect after the component mounts
    setVisible(true);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    login();
    onClose();
  };

  return (
    <div className={`fixed inset-0 flex items-center justify-center z-50 transition-opacity duration-300 ${visible ? 'opacity-100' : 'opacity-0'}`}>
      {/* Dark overlay */}
      <div
        className="absolute inset-0 bg-black opacity-50"
        onClick={onClose}
      ></div>
      {/* Modal content */}
      <div
        className="relative bg-white p-6 rounded-lg z-10"
        style={{ backgroundColor: colors.secondary, color: colors.primary }}
      >
        <h2 className="text-2xl mb-4">Login</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm mb-1">Username</label>
            <input
              type="text"
              className="w-full p-2 rounded border"
              required
            />
          </div>
          <div>
            <label className="block text-sm mb-1">Password</label>
            <input
              type="password"
              className="w-full p-2 rounded border"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 rounded"
            style={{ backgroundColor: colors.primary, color: colors.secondary }}
          >
            Submit
          </button>
        </form>
        <button
          onClick={onClose}
          className="absolute top-7 right-6 text-1xl"
          style={{ color: colors.primary }}
        >
          &times;
        </button>
      </div>
    </div>
  );
}

export default LoginModal;