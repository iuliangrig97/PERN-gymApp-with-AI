import OpenAI from "openai";
import dotenv from "dotenv";
import { TrainingPlan, UserProfile } from "../../types";

dotenv.config();

export async function generateTrainingPlan(profile: UserProfile | Record<string, any>): Promise<TrainingPlan> {
    const normalizedProfile: UserProfile = {
        goal: profile.goal || "bulk",
        experience: profile.experience || "intermediate",
        days: profile.days || 5,
        time: profile.time || 30,
        equipment: profile.equipment || "home",
        body: profile.body || "full_body",
        injuries: profile.injuries || null,
    }
}