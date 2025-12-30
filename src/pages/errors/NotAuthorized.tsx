import { Home, ShieldAlert } from "lucide-react";
import Header from "../../components/Header";

const NotAuthorized = () => {
  return (
    <>
      <Header />

      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <div className="text-center space-y-6 max-w-md">
          <div className="flex justify-center">
            <div className="relative">
              <ShieldAlert className="w-32 h-32 text-purple-600 animate-pulse" />
              <div className="absolute -top-2 -right-2 text-4xl animate-bounce">
                🚫
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <h1 className="text-9xl text-purple-600">403</h1>
            <h2 className="text-foreground">Access Denied</h2>
            <p className="text-foreground">
              Whoa there, friend! This area is VIP only. 🎭
              <br />
              You'll need the secret handshake to get in here!
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center pt-4">
            <button
              onClick={() => (window.location.href = "/")}
              className="bg-purple-600 hover:bg-purple-700 text-white py-3 px-4 rounded-lg transition-all duration-200 flex items-center justify-center gap-2"
            >
              <Home className="w-4 h-4" />
              Home
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotAuthorized;
