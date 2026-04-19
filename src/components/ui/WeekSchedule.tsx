import type { DaySchedule, Exercise } from "../../types";

function ExerciseRow({
  exercise,
  index,
}: {
  exercise: Exercise;
  index: number;
}) {
  return (
    <tr className="border-b last:border-0 text-sm md:text-base">
      <td className="py-3 pr-4">
        <div className="flex items-start gap-3">
          <span className="text-xs w-5">{index + 1}.</span>
          <div>
            <p className="font-bold text-gray-200">{exercise.name}</p>
            {exercise.notes && (
              <p className="text-sm text-gray-300 mt-1">🛡️ {exercise.notes}</p>
            )}
          </div>
        </div>
      </td>

      <td className="flex justify-center py-10 md:py-5 items-center gap-2 font-bold">
        <p>{exercise.sets}</p>
        <p className="text-gray-600">X</p>
        <p>{exercise.reps}</p>
      </td>

      <td className="text-center font-bold text-green-600">
        <p>{exercise.rest}</p>
      </td>

      <td className="text-center font-bold">
        <p
          className={`inline-flex items-center justify-center w-8 h-8 rounded-lg ${exercise.rpe >= 8 ? "bg-red-500/10 text-red-400" : exercise.rpe >= 7 ? "bg-yellow-500/10 text-yellow-400" : "bg-green-500/10 text-green-400"}`}
        >
          {exercise.rpe}
        </p>
      </td>
    </tr>
  );
}

function DayCard({ schedule }: { schedule: DaySchedule }) {
  return (
    <main className="bg-gray-900 rounded-2xl p-3 py-6 px-4 my-12">
      <div className="flex items-center justify-between mb-4 px-6">
        <div>
          <h3 className="font-bold text-xl">{schedule.day}</h3>
          <p className="text-sm">{schedule.focus}</p>
        </div>

        <div className="flex items-center gap-2 text-gray-300">
          <p>💎</p>
          <p>{schedule.exercises.length} Exercises</p>
        </div>
      </div>

      <div className="overflow-x-auto px-4 pb-4">
        <table className="w-full">
          <thead>
            <tr className="uppercase text-sm md:text-lg">
              <th>Exercise</th>
              <th>Sets x Reps</th>
              <th>Rest</th>
              <th>RPE</th>
            </tr>
          </thead>

          <tbody>
            {schedule.exercises.map((exercise, index) => (
              <ExerciseRow
                exercise={exercise}
                key={`${exercise.name}-${index}`}
                index={index}
              />
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}

interface PlanDisplayProps {
  weeklySchedule: DaySchedule[];
}

export default function WeekSchedule({ weeklySchedule }: PlanDisplayProps) {
  return (
    <div>
      <h2 className="font-bold text-3xl mt-20">Weekly Schedule</h2>
      <div>
        {weeklySchedule.map((schedule, key) => (
          <DayCard schedule={schedule} key={key} />
        ))}
      </div>
    </div>
  );
}
