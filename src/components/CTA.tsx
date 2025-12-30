import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <div className="bg-purple-100 dark:bg-purple-900 text-purple-900 dark:text-purple-100 py-16 text-center transition-colors duration-500">
      <h2 className="text-3xl font-bold mb-4 transition-colors duration-500">
        Ready to Explore Stunning Images?
      </h2>
      <p className="mb-6 text-gray-600 dark:text-gray-300 transition-colors duration-500">
        Join our community and start generating amazing visuals today!
      </p>
      <Link
        to="/register"
        className="bg-white dark:bg-purple-100 text-purple-900 dark:text-purple-900 px-6 py-3 rounded-lg font-semibold 
                   hover:bg-purple-600 dark:hover:bg-purple-700 hover:text-white dark:hover:text-white 
                   transition-colors duration-300 ease-in-out"
      >
        Get Started Now!
      </Link>
    </div>
  );
};

export default CTA;
