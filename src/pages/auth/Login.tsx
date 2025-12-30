import { useState } from "react";
import { Mail, Lock, ArrowRight } from "lucide-react";
import AuthSharedLeftSide from "../../components/AuthSharedLeftSide";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
  };

  return (
    <div className="flex h-screen w-full">
      {/* Left Side - Brand */}
      <AuthSharedLeftSide />

      {/* Right Side - Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-white">
        <div className="w-full max-w-md">
          {/* Mobile Logo */}
          <div className="lg:hidden mb-8 w-full">
            <img src={Logo} alt="Logo" className="mx-auto w-16 h-16" />
          </div>

          <div className="mb-5">
            <h2 className="text-gray-900 text-3xl mb-2 font-bold">Log In</h2>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Input */}
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
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-purple-600 bg-white text-gray- 900 focus:border-transparent transition-all"
                />
              </div>
            </div>

            {/* Password Input */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label htmlFor="password" className="block text-gray-500">
                  Password
                </label>
                <a
                  href="#"
                  className="text-purple-600 hover:text-purple-700 transition-colors"
                >
                  Forgot?
                </a>
              </div>
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                  <Lock className="w-5 h-5" />
                </div>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
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
              Sign In
              <ArrowRight className="w-5 h-5" />
            </button>
          </form>

          {/* Register Link */}
          <div className="mt-8 text-center">
            <p className="text-gray-600">
              Don't have an account?&nbsp;
              <Link
                to="/register"
                className="text-purple-600 hover:text-purple-700 transition-colors"
              >
                Register
              </Link>
            </p>
          </div>

          {/* Divider */}
          {/* <div className="mt-8 flex items-center gap-4">
            <div className="flex-1 h-px bg-gray-300"></div>
            <span className="text-gray-500">Or continue with</span>
            <div className="flex-1 h-px bg-gray-300"></div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Login;
