export default function FirstSuccessCelebration({ workflow }) {
  return (
    <div className="bg-green-50 border-green-400 border-2 rounded p-6 mt-6 text-center shadow-lg">
      <h2 className="text-2xl font-bold text-green-700 mb-2">🎉 Success!</h2>
      <div className="text-lg mb-4">You just completed your first {workflow}! Awesome job!</div>
      <div className="mb-4">Share your achievement or try another guide to keep learning.</div>
      <button className="bg-blue-600 text-white px-4 py-2 rounded">Share Achievement</button>
      <button className="bg-gray-300 px-4 py-2 rounded ml-2">Home</button>
    </div>
  );
}