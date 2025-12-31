import React, { useState } from "react";
import { motion } from "motion/react";
import { ArrowRight, Sparkles, Atom, Download, ScanSearch } from "lucide-react";

const Prompt = () => {
  const [prompt, setPrompt] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [isImageGenerating, setIsImageGenerating] = useState(false);

  const [provider, setProvider] = useState("dalle");
  const [size, setSize] = useState("1024x1024");

  const API_URL = import.meta.env.VITE_IMAGEGEN_API_URL;
  const API_TOKEN = import.meta.env.VITE_IMAGEGEN_BEARER_TOKEN;

  const tempImageSrc =
    "https://images.unsplash.com/photo-1762716514229-739f6769e282?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGdyYWRpZW50JTIwZGlnaXRhbHxlbnwxfHx8fDE3NjY3NTc5NTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral4";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!prompt.trim()) {
      setError("Please enter a valid prompt.");
      return;
    }

    setIsLoading(true);
    setIsImageGenerating(true);
    setError(null);
    setImageSrc(null);

    try {
      const response = await fetch(`${API_URL}/v1/jobs/create`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${API_TOKEN}`,
        },
        body: JSON.stringify({
          tasks: [
            {
              prompt,
              provider: provider || "gemini",
              size: size || "1024x1024",
            },
          ],
        }),
      });

      if (!response.ok) {
        const text = await response.text();
        throw new Error(text || "Image generation failed");
      }

      const data = await response.json();

      const imageUrl =
        data?.results?.[0]?.image_url || data?.tasks?.[0]?.result?.image_url;

      if (!imageUrl) {
        throw new Error("No image returned from API");
      }

      setImageSrc(imageUrl);
    } catch (err: any) {
      console.error(err);
      setError(err.message || "Something went wrong");
    } finally {
      setIsLoading(false);
      setIsImageGenerating(false);
    }
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
                      className="w-full px-4 py-4 pr-12 border border-gray-300 rounded-[28px] focus:outline-none focus:ring-1 focus:ring-purple-600 focus:border-transparent bg-foreground/50 text-lg resize-none text:background"
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
                src={imageSrc}
                alt="Generated"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className=""
              />

              {/* Hover actions */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 bg-black bg-opacity-50 transition-opacity rounded-lg">
                <a
                  href={imageSrc}
                  download="generated-image.jpg"
                  className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-full flex items-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  Download
                </a>

                <a
                  href={imageSrc}
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
