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