import React, { useState } from "react";
import { Mail, EyeClosed, Eye, ArrowRight } from "lucide-react";
import AuthSharedLeftSide from "../../components/AuthSharedLeftSide";
import { Link } from "react-router-dom";

const Register = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
  };

  const togglePasswordVisibility = (field: "password" | "confirmPassword") => {
    if (field === "password") {
      setShowPassword(!showPassword);
    } else {
      setShowConfirmPassword(!showConfirmPassword);
    }
  };

  return (
    <div className="flex h-screen w-full">
      {/* Left Side - Brand */}
      <AuthSharedLeftSide />

      {/* Right Side - Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-white">
        <div className="w-full max-w-md">
          {/* Mobile Logo */}
          <div className="lg:hidden mb-8 text-center">
            <div className="w-16 h-16 mx-auto bg-gradient-to-br from-purple-600 to-indigo-800 rounded-2xl flex items-center justify-center shadow-lg">
              <div className="text-white">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 80 80"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="40" cy="40" r="12" fill="currentColor" />
                </svg>
              </div>
            </div>
          </div>

          <div className="mb-5">
            <h2 className="text-gray-900 text-3xl mb-2 font-bold">Register</h2>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="fullName" className="block text-gray-500 mb-2">
                Full Name
              </label>
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                  <Mail className="w-5 h-5" />
                </div>
                <input
                  id="fullName"
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="you@example.com"
                  required
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-purple-600 bg-white text-gray-900 focus:border-transparent transition-all"
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-500 mb-2">
                Email Address
              </label>
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                  <Mail className="w-5 h-5" />
                </div>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  required
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-purple-600 bg-white text-gray-900 focus:border-transparent transition-all"
                />
              </div>
            </div>

            {/* Password Input */}
            <div>
              <label htmlFor="password" className="block text-gray-500">
                Password
              </label>
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                  {showPassword ? (
                    <Eye
                      className="w-5 h-5 cursor-pointer"
                      onClick={() => togglePasswordVisibility("password")}
                    />
                  ) : (
                    <EyeClosed
                      className="w-5 h-5 cursor-pointer"
                      onClick={() => togglePasswordVisibility("password")}
                    />
                  )}
                </div>
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  required
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-purple-600 bg-white text-gray-900 focus:border-transparent transition-all"
                />
              </div>
            </div>

            {/* Confirm Password Input */}
            <div>
              <label htmlFor="confirmPassword" className="block text-gray-500">
                Confirm Password
              </label>
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                  {showConfirmPassword ? (
                    <Eye
                      className="w-5 h-5 cursor-pointer"
                      onClick={() =>
                        togglePasswordVisibility("confirmPassword")
                      }
                    />
                  ) : (
                    <EyeClosed
                      className="w-5 h-5 cursor-pointer"
                      onClick={() =>
                        togglePasswordVisibility("confirmPassword")
                      }
                    />
                  )}
                </div>
                <input
                  id="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Confirm your password"
                  required
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-purple-600 bg-white text-gray-900 focus:border-transparent transition-all"
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 px-4 rounded-lg transition-all duration-200 flex items-center justify-center gap-2"
            >
              Create an Account
              <ArrowRight className="w-5 h-5" />
            </button>
          </form>

          {/* Login Link */}
          <div className="mt-8 text-center">
            <p className="text-gray-600">
              Already have an account?&nbsp;
              <Link
                to="/login"
                className="text-purple-600 hover:text-purple-700 transition-colors"
              >
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
