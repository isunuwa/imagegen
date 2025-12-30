import { useState } from "react";
import { ArrowRight, SlidersHorizontal } from "lucide-react";

const Filterbar = () => {
  const [prompt, setPrompt] = useState("");

  return (
    <div className="flex items-center justify-between gap-4">
      {/* Left Side - Sort Dropdown */}
      <div className="relative">
        <input
          id="search-image"
          type="text"
          aria-label="Image Search"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Type something..."
          className="w-full px-4 py-4 pr-12 border border-gray-300 rounded-[28px] focus:outline-none focus:ring-1 focus:ring-purple-600 focus:border-transparent bg-white text-gray-900 resize-none"
        />
        <button
          type="submit"
          className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-purple-500 hover:bg-purple-600 text-white rounded-full transition-colors"
        >
          <ArrowRight className="w-7 h-7" />
        </button>
      </div>

      {/* Right Side - Filters Button */}
      <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
        <SlidersHorizontal className="w-4 h-4 text-gray-600" />
        <span className="text-gray-700 hidden sm:inline">Filters</span>
      </button>
    </div>
  );
};

export default Filterbar;
