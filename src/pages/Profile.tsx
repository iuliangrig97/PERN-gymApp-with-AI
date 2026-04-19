import { Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import GoalPlan from "../components/ui/GoalPlan";
import WeekSchedule from "../components/ui/WeekSchedule";

export default function Profile() {
  const { user, isLoading, plan } = useAuth();
  const nav = useNavigate();

  if (!user && !isLoading) {
    return <Navigate to="/auth/sign-in" replace />;
  }

  if (!plan) {
    return <Navigate to="/" replace />;
  }

  function formatDate(dateString: string) {
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  }

  return (
    <main className="min-h-screen pt-24 pb-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-white flex flex-col md:flex-row md:justify-between">
          <div className="flex items-center flex-col md:items-start">
            <h1 className="text-3xl font-bold mb-1">Training Plan</h1>
            <p className="text-gray-400">
              Version {plan.version} - Created at {formatDate(plan.createdAt)}
            </p>
          </div>
          <button
            onClick={() => nav("/onboarding")}
            className="bg-blue-600 hover:bg-blue-700 text-grey-300 font-bold   p-3 mt-4 rounded-[5px] cursor-pointer"
          >
            Regenerate Plan
          </button>
        </div>
      </div>

      <div>
        <GoalPlan plan={plan} />
        <WeekSchedule weeklySchedule={plan.weeklySchedule} />
      </div>

      <div>
        <div className="bg-gray-900 rounded-2xl p-6 font-bold text-sm md:text-base my-12">
          <h2>Progression</h2>
          <p className="mt-2 text-gray-400">- {plan.progression}</p>
        </div>
        <p className="mt-4 text-gray-400 bg-gray-900 rounded-2xl p-6 font-bold text-sm md:text-base">
          <span className="text-white">RPE</span> - stands for "Rating of
          Perceived Exertion" (or Rate of Perceived Exertion), a 1-10 scale
          measuring how hard you feel your body is working during exercise,
          factoring in breathing, heart rate, and muscle fatigue. It acts as a
          self-regulation tool, allowing individuals to adjust workout intensity
          based on daily performance rather than fixed numbers.
        </p>
      </div>
    </main>
  );
}
