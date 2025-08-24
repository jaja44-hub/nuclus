export default function LearningNotification({ stepsCompleted, totalSteps }) {
  if (stepsCompleted === totalSteps) {
    return (
      <div className="bg-green-100 text-green-800 rounded p-3 mt-4 font-bold">
        🎉 You finished this learning journey! Try a new workflow or share your achievement.
      </div>
    );
  }
  if (stepsCompleted > 0) {
    return (
      <div className="bg-blue-100 text-blue-800 rounded p-3 mt-4">
        You’re halfway done! Keep going—just {totalSteps - stepsCompleted} steps left!
      </div>
    );
  }
  return null;
}