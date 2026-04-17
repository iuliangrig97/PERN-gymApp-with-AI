import { authClient } from "../lib/auth";
import { useEffect, useState, type ReactNode } from "react";
import { AuthContext } from "./AuthContext";

export default function AuthProvider({ children }: { children: ReactNode }) {
  const [neonUser, setNeoUser] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadUser() {
      try {
        const result = await authClient.getSession();
        if (result && result.data?.user) {
          setNeoUser(result.data.user);
        } else {
          setNeoUser(null);
        }
      } catch (err) {
        setNeoUser(null);
      } finally {
        setIsLoading(false);
      }
    }
    loadUser();
  }, []);

  return (
    <AuthContext.Provider value={{ user: neonUser, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
}
