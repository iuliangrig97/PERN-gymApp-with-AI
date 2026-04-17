import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { UserButton } from "@neondatabase/neon-js/auth/react";

export default function Navbar() {
  const { user } = useAuth();
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b bg-gray-900/80 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-bold">
          💪 <span>gymApp</span>
        </Link>
        <nav>
          {user ? (
            <div className="flex gap-3 items-center">
              <Link to="/profile">
                <button className="cursor-pointer bg-yellow-400 text-black font-bold py-2 px-5 rounded-[5px] hover:bg-blue-400">
                  My plan
                </button>
              </Link>
              <UserButton className="bg-yellow-400 font-bold cursor-pointer hover:bg-blue-400" />
            </div>
          ) : (
            <div className="flex gap-3">
              <Link to="/auth/sign-in" className="flex gap-3 font-bold">
                <button className="cursor-pointer bg-blue-950 py-2 px-5 rounded-2xl">
                  Login
                </button>
              </Link>
              <Link to="/auth/sign-up">
                <button className="cursor-pointer bg-blue-400 py-2 px-5 rounded-2xl">
                  Sign up
                </button>
              </Link>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}
