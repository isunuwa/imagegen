import React, { useState } from "react";
import { motion } from "motion/react";
import { ArrowRight, Sparkles, Atom, Download, ScanSearch } from "lucide-react";

const Prompt = () => {
  const [prompt, setPrompt] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [isImageGenerating, setIsImageGenerating] = useState(false);

  const tempImageSrc =
    "https://images.unsplash.com/photo-1762716514229-739f6769e282?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGdyYWRpZW50JTIwZGlnaXRhbHxlbnwxfHx8fDE3NjY3NTc5NTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral4";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setIsImageGenerating(true);
    setError(null);
    setImageSrc(null);

    // Validation
    if (prompt.trim() === "") {
      // show error
      setError("Please enter a valid prompt.");
      setIsLoading(false);
      setIsImageGenerating(false);

      const textarea = document.querySelector("textarea");
      if (textarea) {
        textarea.focus();
      }
      return;
    }

    console.log("Form submitted with value:", prompt);

    // API call simulation
    // Simulate image generation delay
    setTimeout(() => {
      setIsLoading(false);
      setIsImageGenerating(false);

      // temp image load
      setImageSrc(tempImageSrc);
    }, 5000);
  };

  return (
    <>
      <div className="bg-background text-foreground pt-10 relative">
        <div className="flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className=" relative w-full max-w-5xl p-6">
              <div className="mb-6 text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 rounded-full mb-6">
                  <Sparkles className="size-4 text-purple-600" />
                  <span className="text-purple-600">
                    Generate your free AI-powered images now!
                  </span>
                </div>
                <h1 className="text-4xl md:text-8xl font-semibold text-gray-900 dark:text-foreground">
                  You think it, &nbsp;
                  <Atom className="inline-block w-12 h-12 text-purple-600 ml-2 animate-spin-slow" />
                  <br />
                  We bring it to life with Amro
                </h1>
              </div>

              <div className="space-y-2">
                <form onSubmit={handleSubmit} className="w-full">
                  <div className="relative">
                    <textarea
                      aria-label="Image prompt"
                      aria-placeholder="eg. A logo for a startup that gives sense of environment and nature."
                      rows={4}
                      value={prompt}
                      onChange={(e) => setPrompt(e.target.value)}
                      placeholder="Type something..."
                      className="w-full px-4 py-4 pr-12 border border-gray-300 rounded-[28px] focus:outline-none focus:ring-1 focus:ring-purple-600 focus:border-transparent bg-background text-gray-900 text-lg resize-none"
                    />
                    <button
                      type="submit"
                      className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-purple-500 hover:bg-purple-600 text-white rounded-full transition-colors"
                      disabled={isLoading}
                      style={{
                        pointerEvents: isLoading ? "none" : "auto",
                      }}
                    >
                      <ArrowRight className="w-7 h-7" />
                    </button>
                  </div>
                </form>

                {error && <div className="text-sm text-pink-400">{error}</div>}
              </div>
            </div>
          </motion.div>
        </div>

        {/* When image is generating */}
        {isImageGenerating && (
          <div className="pb-16 flex justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
          </div>
        )}

        {/* After it is generated */}
        {!isImageGenerating && imageSrc && (
          <div className="flex justify-center pb-16">
            <div className="relative max-w-full md:max-w-[720px] h-auto shadow-lg rounded-[24px] overflow-hidden">
              <motion.img
                src={tempImageSrc}
                alt="Generated"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className=""
              />

              {/* Hover actions */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 bg-black bg-opacity-50 transition-opacity rounded-lg">
                <a
                  href={tempImageSrc}
                  download="generated-image.jpg"
                  className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-full flex items-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  Download
                </a>

                <a
                  href={tempImageSrc}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-background hover:bg-gray-200 text-purple-600 px-4 py-2 border border-purple-600 rounded-full flex items-center gap-2 ml-4"
                >
                  <ScanSearch className="w-4 h-4" />
                  Preview
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Prompt;
