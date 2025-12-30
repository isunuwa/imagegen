import { useState } from "react";

export function GeneralProfile() {
  const [firstName, setFirstName] = useState("Donald");
  const [lastName, setLastName] = useState("Sergeyevich");
  const [email, setEmail] = useState("test@test.com");
  const [password, setPassword] = useState("strongpassword");

  return (
    <div className="max-w-3xl">
      <div className="flex items-center justify-between mb-6">
        <div className="text-black">
          <h1 className="text-purple-600 font-bold">Your Profile</h1>
          <p className="text-foreground mt-1">
            Last edit on 12 February 2024
          </p>
        </div>
        {/* Save trigger buttons */}
        <div className="flex gap-2">
          <button className="rounded-full outline outline-red-500 text-red-500 py-1 px-4 outline-1">
            Discard
          </button>
          <button className="rounded-full outline outline-purple-500 text-purple-500 py-1 px-4 outline-1">
            Save
          </button>
        </div>
      </div>

      {/* Personal Information Section */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <div className="w-2 h-2 rounded-full bg-purple-500" />
          <h3 className="text-purple-500">Personal Information</h3>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="firstName" className="block text-gray-500 dark:text-foreground mb-2">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-purple-600 bg-white text-gray-900 focus:border-transparent transition-all"
            />
          </div>
          <div>
            <label htmlFor="lastName" className="block text-gray-500 dark:text-foreground mb-2">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-purple-600 bg-white text-gray-900 focus:border-transparent transition-all"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-500 dark:text-foreground mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-purple-600 bg-white text-gray-900 focus:border-transparent transition-all"
            />
          </div>
          {/* Password */}
          <div>
            <label htmlFor="password" className="block text-gray-500 dark:text-foreground mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-purple-600 bg-white text-gray-900 focus:border-transparent transition-all"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
