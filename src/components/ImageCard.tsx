import { useState } from "react";
import { Eye, Download, ArrowRight } from "lucide-react";
import type { ImageCardProps } from "../types";

const ImageCard = ({ image }: ImageCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  const handleViewDetails = () => {
    // Implement view details functionality here
    alert("Viewing details for " + image.title);
  };

  const handleLike = () => {
    setIsLiked(!isLiked);
  };

  return (
    <div
      className=""
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="aspect-[4/3] overflow-hidden group">
        <div className="rounded-[24px] relative overflow-hidden w-full h-full">
          <img
            src={image.image}
            alt={image.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />

          {/* Hover Overlay with Buttons */}
          <div
            onClick={handleViewDetails}
            className={`absolute inset-0 bg-black/60 flex cursor-pointer items-center justify-center gap-3 transition-opacity duration-300 ${
              isHovered ? "opacity-100" : "opacity-0"
            }`}
          ></div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg flex items-center gap-2 transition-all transform hover:scale-105">
            View Details
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Card Footer */}
      <div className="p-4">
        <div className="flex items-center justify-between">
          {/* Author Info */}
          <div className="flex items-center gap-3">
            <span className="text-foreground">{image.author}</span>
          </div>

          {/* Stats */}
          <div className="flex items-center gap-4">
            <button
              onClick={handleLike}
              className="flex items-center gap-1 text-secondary-foreground hover:text-red-500 transition-colors"
            >
              <Download
                className={`w-4 h-4 ${
                  isLiked ? "fill-red-500 text-red-500" : ""
                }`}
              />
              <span className="text-sm">{image.likes + (isLiked ? 1 : 0)}</span>
            </button>
            <div className="flex items-center gap-1 text-secondary-foreground">
              <Eye className="w-4 h-4" />
              <span className="text-sm">{image.views}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
