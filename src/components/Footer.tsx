import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-background text-foreground py-10">
      <div className="container mx-auto text-center">
        <p className="text-gray-400">
          &copy; {new Date().getFullYear()} AmroImage. All rights reserved.
        </p>
        <div className="mt-2">
          <Link
            to="/privacy"
            className="text-gray-400 hover:text-purple-600 mx-2"
          >
            Privacy Policy
          </Link>
          <Link
            to="/terms"
            className="text-gray-400 hover:text-purple-600 mx-2"
          >
            Terms of Service
          </Link>
          <Link
            to="/contact"
            className="text-gray-400 hover:text-purple-600 mx-2"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
