import { RedirectToSignIn, SignedIn } from "@neondatabase/neon-js/auth/react";
import { useAuth } from "../context/AuthContext";
import { Select } from "../components/ui/Select";
import { useState } from "react";
import type { UserProfile } from "../types";
import { useNavigate } from "react-router-dom";

const goalOptions = [
  { value: "bulk", label: "Build Muscle (Bulk)" },
  { value: "cut", label: "Lose Fat (cut)" },
  { value: "Strength", label: "Build Strength" },
  { value: "Endurance", label: "Improve Endurance" },
];

const experienceOptions = [
  { value: "beginner", label: "Beginner (0-1 years)" },
  { value: "intermediate", label: "Intermediate (1-3 years)" },
  { value: "advanced", label: "Advanced (3+ years)" },
];

const daysOptions = [
  { value: "2", label: "2 days per week" },
  { value: "3", label: "3 days per week" },
  { value: "5", label: "5 days per week" },
];

const timeOptions = [
  { value: "30", label: "30 minutes" },
  { value: "60", label: "60 minutes" },
  { value: "90", label: "90 minutes" },
];

const equipmentOptions = [
  { value: "fullGym", label: "Full Gym Access" },
  { value: "home", label: "Home Gym" },
];

const bodyOptions = [
  { value: "fullBody", label: "Full Body" },
  { value: "upperBody", label: "Upper Body" },
  { value: "lowerBody", label: "Lower Body" },
  { value: "custom", label: "Custom AI Plan" },
];

export default function Onboarding() {
  const { user, saveProfile, generatePlan } = useAuth();
  const [formData, setFormData] = useState({
    goal: "bulk",
    experience: "intermediate",
    days: "5",
    time: "30",
    equipment: "home",
    body: "fullBody",
    injuries: "",
  });
  const [isGenerating, setIsGenerating] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [error, setError] = useState("");
  const navigate = useNavigate();

  function updateForm(field: string, value: string) {
    setFormData((prev) => ({ ...prev, [field]: value }));
  }

  async function handleQuestions(e: React.SubmitEvent) {
    e.preventDefault();

    const profile: Omit<UserProfile, "userId" | "updatedAt"> = {
      goal: formData.goal as UserProfile["goal"],
      experience: formData.experience as UserProfile["experience"],
      days: parseInt(formData.days),
      time: parseInt(formData.time),
      equipment: formData.equipment as UserProfile["equipment"],
      body: formData.body as UserProfile["body"],
      injuries: formData.injuries || undefined,
    };
    try {
      await saveProfile(profile);
      setIsGenerating(true);
      await generatePlan();
      navigate("/profile");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to save profile");
    } finally {
      setIsGenerating(false);
    }
  }

  if (!user) {
    return <RedirectToSignIn />;
  }

  return (
    <SignedIn>
      <div className="min-h-screen pt-24 pb-12 px-6">
        <div className="max-w-xl mx-auto">
          {!isGenerating ? (
            <div className="border-2 rounded-2xl bg-gray-900 flex flex-col justify-center px-8 py-3 gap-2">
              <h1 className="text-3xl font-bold text-center">
                Create your plan
              </h1>
              <p className="text-gray-400 mb-5 text-center">
                Help us create your own custom plan!
              </p>
              <form
                onSubmit={handleQuestions}
                className="w-full flex flex-col gap-5"
              >
                <Select
                  id="goal"
                  label="What's your goal?"
                  options={goalOptions}
                  value={formData.goal}
                  onChange={(e) => updateForm("goal", e.target.value)}
                />
                <Select
                  id="experience"
                  label="What's your experience?"
                  options={experienceOptions}
                  value={formData.experience}
                  onChange={(e) => updateForm("experience", e.target.value)}
                />
                <div className="grid grid-cols-2 gap-4">
                  <Select
                    id="days"
                    label="How many days per week?"
                    options={daysOptions}
                    value={formData.days}
                    onChange={(e) => updateForm("days", e.target.value)}
                  />
                  <Select
                    id="time"
                    label="How much time per day?"
                    options={timeOptions}
                    value={formData.time}
                    onChange={(e) => updateForm("time", e.target.value)}
                  />
                </div>
                <Select
                  id="equipment"
                  label="Gym or home?"
                  options={equipmentOptions}
                  value={formData.equipment}
                  onChange={(e) => updateForm("equipment", e.target.value)}
                />
                <Select
                  id="body"
                  label="What to train?"
                  options={bodyOptions}
                  value={formData.body}
                  onChange={(e) => updateForm("body", e.target.value)}
                />
                <div className="border-2 rounded-2xl py-2 px-4 ">
                  <p>Any injuries? (optional)</p>
                  <textarea
                    id="injuries"
                    placeholder="Lower back issues, shoulders, arms etc.."
                    rows={2}
                    value={formData.injuries}
                    onChange={(e) => updateForm("injuries", e.target.value)}
                    className="w-full mt-1"
                  />
                </div>

                <div>
                  <button
                    type="submit"
                    className="bg-yellow-400 text-black font-bold hover:bg-blue-400 p-3 w-full my-2"
                  >
                    Generate my plan
                  </button>
                </div>
              </form>
            </div>
          ) : (
            <div className="border-2 rounded-2xl bg-gray-950 py-16 flex  font-bold gap-2 flex-col items-center">
              <h1 className="md:text-lg">
                Loading... <span className="animate-spin ">⭕</span>
              </h1>
              <p className="text-center w-[75%] my-4">
                Free AI api is slow and can get a random error for some reason
              </p>
            </div>
          )}
        </div>
      </div>
    </SignedIn>
  );
}
