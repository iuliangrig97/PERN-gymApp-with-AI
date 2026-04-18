import { authClient } from "../lib/auth";
import { useEffect, useState, type ReactNode } from "react";
import { AuthContext } from "./AuthContext";
import type { UserProfile } from "../types";
import { api } from "../lib/api";

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

  async function saveProfile(
    profileData: Omit<UserProfile, "userId" | "updatedAt">,
  ) {
    if (!neonUser) {
      throw new Error("User must be authenticated to save profile");
    }

    await api.saveProfile(neonUser.id, profileData);
  }

  async function generatePlan() {
    if (!neonUser) {
      throw new Error("User must be authenticated to generate plan");
    }

    await api.generatePlan(neonUser.id)
  }

  return (
    <AuthContext.Provider
      value={{ user: neonUser, isLoading, saveProfile, generatePlan }}
    >
      {children}
    </AuthContext.Provider>
  );
}
