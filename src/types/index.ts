export interface User {
    id: string;
    email: string;
    createdAt: string;
}

export interface UserProfile {
    userId: string;
    goal: "bulk" | "cut" | "Strength" | "Endurance";
    experience: "beginner" | "intermediate" | "advanced";
    days: number
    time: number
    equipment: "fullGym" | "home";
    body: "fullBody" | "upperBody" | "lowerBody" | "custom";
    injuries?: string;
    updatedAt: string
}

export interface PlanOverview {
    goal: string;
    frequency: string;
    split: string;
    notes: string;
}

export interface Exercise {
    name: string;
    sets: number;
    reps: string;
    rest: string;
    rpe: number;
    notes?: string;
    alternatives?: string[];
}

export interface DaySchedule {
    day: string;
    focus: string;
    exercises: Exercise[];
}

export interface TrainingPlan {
    id: string;
    userId: string;
    overview: PlanOverview;
    weeklySchedule: DaySchedule[];
    progression: string;
    version: number;
    createdAt: string;
}