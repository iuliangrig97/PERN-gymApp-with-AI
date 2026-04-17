export interface UserProfile {
    goal: string;
    experience: string;
    days: number;
    time: number;
    equipment: string;
    body: string;
    injuries?: string | null
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