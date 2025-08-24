export default function UnlockedFeaturePanel({ featureName, badgeImage, description }) {
  return (
    <div className="bg-purple-100 border-purple-400 border-2 rounded p-4 mt-6 text-center shadow-lg">
      <img src={badgeImage} alt={featureName} className="mx-auto mb-2 w-16 h-16" />
      <h2 className="font-bold text-xl text-purple-800 mb-2">🎉 Unlocked: {featureName}!</h2>
      <div className="mb-2 text-gray-700">{description}</div>
    </div>
  );
}