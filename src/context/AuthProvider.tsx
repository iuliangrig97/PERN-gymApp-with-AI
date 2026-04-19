import { authClient } from "../lib/auth";
import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import { AuthContext } from "./AuthContext";
import type { TrainingPlan, UserProfile } from "../types";
import { api } from "../lib/api";

export default function AuthProvider({ children }: { children: ReactNode }) {
  const [neonUser, setNeoUser] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const isRefreshingRef = useRef(false);
  const [plan, setPlan] = useState<TrainingPlan | null>(null)

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

  useEffect(() => {
    if(!isLoading) {
      if(neonUser?.id) {
        refreshData()
      } else {
        setPlan(null)
      }
      setIsLoading(false)
    }
  }, [neonUser?.id, isLoading])

  const refreshData = useCallback(async () => {
    if (!neonUser || isRefreshingRef.current) return;

    isRefreshingRef.current = true

    try {
      const planData = await api.getCurrentPlan(neonUser.id).catch(() => null)
      if (planData) {
        setPlan({
          id: planData.id,
          userId: planData.userId,
          overview: planData.planJson.overview,
          weeklySchedule: planData.planJson.weeklySchedule,
          progression: planData.planJson.progression,
          version: planData.version,
          createdAt: planData.createdAt,
        })
      }
    } catch (error) {
      console.error("Error refreshing data: ", error)
    } finally {
      isRefreshingRef.current = false
    }
  }, [neonUser?.id])

  async function saveProfile(
    profileData: Omit<UserProfile, "userId" | "updatedAt">,
  ) {
    if (!neonUser) {
      throw new Error("User must be authenticated to save profile");
    }

    await api.saveProfile(neonUser.id, profileData);
    await refreshData();

  }

  async function generatePlan() {
    if (!neonUser) {
      throw new Error("User must be authenticated to generate plan");
    }

    await api.generatePlan(neonUser.id);
    await refreshData();
  }

  return (
    <AuthContext.Provider
      value={{
        user: neonUser,
        plan,
        isLoading,
        saveProfile,
        generatePlan,
        refreshData,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
