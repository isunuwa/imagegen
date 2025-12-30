import { LogOut } from "lucide-react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/logo.png";
import { ThemeToggle } from "./ThemeToggle";

const Header = () => {
  const [isLoggedIn] = useState(false);

  return (
    <header className="bg-background shadow sticky w-full z-10">
      <div className="container mx-auto">
        {isLoggedIn ? (
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="hidden sm:flex sm:space-x-8">
                <NavLink
                  to="/explore"
                  className={({ isActive }) =>
                    `${
                      isActive ? "text-primary" : "text-foreground"
                    } border-transparent hover:text-primary inline-flex items-center px-1 pt-1 text-sm font-medium`
                  }
                >
                  Explore
                </NavLink>
                <NavLink
                  to="/dashboard"
                  className={({ isActive }) =>
                    `${
                      isActive ? "text-primary" : "text-foreground"
                    } border-transparent hover:text-primary inline-flex items-center px-1 pt-1 text-sm font-medium`
                  }
                >
                  Your Work
                </NavLink>
                <NavLink
                  to="/favorites"
                  className={({ isActive }) =>
                    `${
                      isActive ? "text-primary" : "text-foreground"
                    } border-transparent hover:text-primary inline-flex items-center px-1 pt-1 text-sm font-medium`
                  }
                >
                  Favorites
                </NavLink>
              </div>
            </div>
            <div className="flex items-center">
              <button
                type="button"
                className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-light hover:bg-primary-foreground"
              >
                Log Out <LogOut className="inline-block w-4 h-4 ml-1" />
              </button>
            </div>
          </div>
        ) : (
          <div className="flex justify-between h-16">
            {/* Logo or branding */}
            <div className="flex">
              <div className="hidden sm:flex sm:space-x-8">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `${
                      isActive ? "text-primary" : "text-foreground"
                    } border-transparent hover:text-primary inline-flex items-center px-1 pt-1 text-sm font-medium`
                  }
                >
                  <img src={Logo} alt="Logo" className="h-10" />
                </NavLink>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `${
                      isActive ? "text-primary" : "text-foreground"
                    } border-transparent hover:text-primary inline-flex items-center px-1 pt-1 text-sm font-medium`
                  }
                >
                  Home
                </NavLink>
                {/* <NavLink
                  to="/features"
                  className={({ isActive }) =>
                    `${
                      isActive ? "text-primary" : "text-foreground"
                    } border-transparent hover:text-primary inline-flex items-center px-1 pt-1 text-sm font-medium`
                  }
                >
                  Features
                </NavLink> */}
                <NavLink
                  to="/pricing"
                  className={({ isActive }) =>
                    `${
                      isActive ? "text-primary" : "text-foreground"
                    } border-transparent hover:text-primary inline-flex items-center px-1 pt-1 text-sm font-medium`
                  }
                >
                  Pricing
                </NavLink>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `${
                      isActive ? "text-primary" : "text-foreground"
                    } border-transparent hover:text-primary inline-flex items-center px-1 pt-1 text-sm font-medium`
                  }
                >
                  Contact
                </NavLink>
              </div>
            </div>
            <div className="flex items-center">
              <ThemeToggle />
              <Link
                to="/login"
                className="bg-primary hover:bg-primarydark text-primary-foreground px-3 py-2 rounded-full text-sm font-light "
              >
                Sign In
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
