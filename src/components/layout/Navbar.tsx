import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { UserButton } from "@neondatabase/neon-js/auth/react";
import { Target } from "lucide-react";

export default function Navbar() {
  const { user } = useAuth();
  return (
    <header className="fixed top-0 w-full bg-gray-950/90 backdrop-blur-sm z-50 border-b border-gray-800">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Target className="w-8 h-8 text-blue-500" />
          <Link
            to="/"
            className="text-2xl font-extrabold tracking-tighter text-white"
          >
            Gym<span className="text-blue-500">AI</span>
          </Link>
        </div>
        {user ? (
          <div className="flex gap-3 items-center">
            <Link to="/profile">
              <button className="cursor-pointer bg-blue-600 text-white font-bold text-base py-1.5 px-3 md:text-base md:py-2 md:px-5 rounded-[5px] hover:bg-blue-700 transition-all">
                My plan
              </button>
            </Link>
            <UserButton
              size="icon"
              className="bg-blue-600 font-bold cursor-pointer hover:bg-blue-700 text-white"
            />
          </div>
        ) : (
          <div className="flex items-center gap-3">
            <Link
              to="/auth/sign-in"
              className="text-sm font-medium text-gray-300 hover:text-white transition"
            >
              Sign In
            </Link>
            <Link
              to="/auth/sign-up"
              className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold px-5 py-2.5 rounded-full transition shadow-lg shadow-blue-600/20"
            >
              Get Started Free
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
