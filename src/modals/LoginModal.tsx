import { motion } from "motion/react";
import { Link } from "react-router-dom";
import type { Props } from "../types";


function LoginModal({ isOpen, onClose }: Props) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-white dark:bg-gray-900 rounded-2xl p-6 w-[480px] border dark:border-slate-500"
      >
        <h2 className="text-2xl text-foreground text-center font-semibold mb-4">Login Required</h2>
        <p className="text-sm mb-4 text-foreground">
          Please log in to generate images.
        </p>

        <div className="flex flex-col md:flex-row gap-4">
          <Link
            to={"login"}
            className="flex-1 bg-purple-600 hover:bg-purple-700 text-white py-3 px-4 rounded-lg transition-all duration-200 flex items-center justify-center gap-2"
          >
            Login
          </Link>

          <button
            onClick={onClose}
            className="flex-1 bg-slate-200 hover:bg-slate-400 dark:bg-slate-500 text-foreground py-3 px-4 rounded-lg transition-all duration-200 flex items-center justify-center gap-2"
          >
            Cancel
          </button>
        </div>
      </motion.div>
    </div>
  );
}

export default LoginModal;
