export default function ProgressTracker({ stepsCompleted, totalSteps }) {
  const percent = Math.round((stepsCompleted / totalSteps) * 100);
  return (
    <div className="bg-gray-100 rounded p-3 mt-4 flex items-center">
      <span className="font-bold mr-2">Progress:</span>
      <div className="flex-1 h-3 bg-blue-200 rounded">
        <div
          className="h-3 bg-blue-600 rounded"
          style={{ width: `${percent}%` }}
        />
      </div>
      <span className="ml-2 text-sm">{stepsCompleted} / {totalSteps} steps</span>
    </div>
  );
}