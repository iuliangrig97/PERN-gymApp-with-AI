import type { TrainingPlan } from "../../types";

const styleBox =
  "flex items-center justify-center gap-3 bg-gray-900 rounded-2xl py-6 px-4";

export default function GoalPlan({ plan }: { plan: TrainingPlan | null }) {
  return (
    <main>
      <div className="grid md:grid-cols-4 gap-4 my-12 text-center">
        <div className={styleBox}>
          <div className="font-bold p-4">
            <p className="text-gray-400">🥇 Goal</p>
            <p>{plan?.overview.goal}</p>
          </div>
        </div>
        <div className={styleBox}>
          <div className="font-bold">
            <p className="text-gray-400">🗓️ Frequency</p>
            <p>{plan?.overview.frequency}</p>
          </div>
        </div>
        <div className={styleBox}>
          <div className="font-bold">
            <p className="text-gray-400">🏋️ Body exercises</p>
            <p>{plan?.overview.split}</p>
          </div>
        </div>
        <div className={styleBox}>
          <div className="font-bold">
            <p className="text-gray-400">⚡ Version</p>
            <p>{plan?.version}</p>
          </div>
        </div>
      </div>
      <div className="bg-gray-900 rounded-2xl p-6 font-bold text-sm md:text-base">
        <h2>Notes</h2>
        <p className="mt-2 text-gray-400">- {plan?.overview.notes}</p>
      </div>
    </main>
  );
}
