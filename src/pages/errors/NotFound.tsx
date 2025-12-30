import { Ghost, Home } from "lucide-react";
import Header from "../../components/Header";

const NotFound = () => {
  return (
    <>
      <Header />

      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <div className="text-center space-y-6 max-w-md">
          <div className="flex justify-center">
            <Ghost className="w-32 h-32 text-purple-600 animate-bounce" />
          </div>

          <div className="space-y-2">
            <h1 className="text-9xl text-purple-600">404</h1>
            <h2 className="text-foreground">Oops! Page Not Found</h2>
            <p className="text-foreground">
              Looks like this page decided to play hide and seek... and it's
              winning! 👻
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center pt-4">
            <button
              onClick={() => window.history.back()}
              className="outline outline-1 outline-primary text-primary py-3 px-4 rounded-lg transition-all duration-200 flex items-center justify-center gap-2"
            >
              Go Back
            </button>
            <button
              onClick={() => (window.location.href = "/")}
              className="bg-purple-600 hover:bg-purple-700 text-white py-3 px-4 rounded-lg transition-all duration-200 flex items-center justify-center gap-2"
            >
              <Home className="w-4 h-4" />
              Back to Home
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
