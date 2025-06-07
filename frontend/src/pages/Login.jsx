import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, Eye, EyeOff } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import toast from 'react-hot-toast';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Simulate login
    try {
      await login(formData.email, formData.password);
      toast.success('Logged in successfully!');
      navigate('/'); // Redirect to home page after successful login
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="max-w-md mx-auto">
      <div className="glass-card p-8 space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold gradient-text">Sign In</h1>
          <p className="text-gray-600 dark:text-gray-300">Welcome back! Sign in to your account</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div className="relative">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email address"
                className="neu-input w-full pl-12"
                required
              />
              <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>

            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
                className="neu-input w-full pl-12"
                required
              />
              <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400"
              >
                {showPassword ? (
                  <EyeOff className="w-5 h-5" />
                ) : (
                  <Eye className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>

          <div className="text-right">
            <Link to="/forgot-password" className="text-[#0088cc] hover:text-[#003366] text-sm">
              Forgot Password?
            </Link>
          </div>

          <button
            type="submit"
            className="neu-button w-full px-6 py-3 bg-gradient-to-r from-[#003366] to-[#0088cc] text-white"
          >
            Sign In
          </button>
        </form>

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white dark:bg-[#003366] text-gray-500">
              Or sign in with
            </span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <button className="neu-button px-4 py-2 flex items-center justify-center gap-2">
            <img
              src="https://www.google.com/favicon.ico"
              alt="Google"
              className="w-5 h-5"
            />
            Google
          </button>
          <button className="neu-button px-4 py-2 flex items-center justify-center gap-2">
            <img
              src="https://www.linkedin.com/favicon.ico"
              alt="LinkedIn"
              className="w-5 h-5"
            />
            LinkedIn
          </button>
        </div>

        <p className="text-center text-sm text-gray-600 dark:text-gray-300">
          Don't have an account?{' '}
          <Link to="/register" className="text-[#0088cc] hover:text-[#003366]">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login; 