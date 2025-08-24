export default function AchievementBadge({ title, imageUrl, description }) {
  return (
    <div className="flex items-center bg-yellow-100 rounded p-2 mb-2 shadow">
      <img src={imageUrl} alt={title} className="w-10 h-10 mr-3" />
      <div>
        <div className="font-bold text-base">{title}</div>
        <div className="text-xs text-gray-700">{description}</div>
      </div>
    </div>
  );
}