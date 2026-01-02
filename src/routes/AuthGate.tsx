import { Loader2 } from "lucide-react";
import { useAuth } from "../context/AuthContext";

const AuthGate = ({ children }: { children: React.ReactNode }) => {
  const { loading } = useAuth();

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center bg-background text:foreground">
        <Loader2 className="w-8 h-8 text-purple-600 animate-spin" />
      </div>
    );
  }

  return <>{children}</>;
};

export default AuthGate;
