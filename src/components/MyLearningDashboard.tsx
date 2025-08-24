import { useState } from "react";
import ProgressTracker from "./ProgressTracker";
import AchievementBadge from "./AchievementBadge";
import GuideRating from "./GuideRating";
import SocialShareButton from "./SocialShareButton";
import CommunityTips from "./CommunityTips";

export default function MyLearningDashboard({ 
  userId,
  bookmarks = [],
  badges = [],
  progress = { stepsCompleted: 0, totalSteps: 5 },
  tips = [],
  onBookmark,
  onRateGuide
}) {
  const [selected, setSelected] = useState(null);

  return (
    <div className="max-w-md mx-auto bg-blue-50 shadow-lg rounded p-4 mt-6">
      <h2 className="font-bold text-lg mb-2">⭐ My Learning Dashboard</h2>
      {/* Progress Tracking */}
      <ProgressTracker stepsCompleted={progress.stepsCompleted} totalSteps={progress.totalSteps} />

      {/* Achievement Badges */}
      <div className="mb-4">
        <h3 className="font-bold text-base mb-2">🏅 Achievement Badges</h3>
        {badges.length === 0 && <div>No badges yet—complete workflows to earn them!</div>}
        {badges.map(b => (
          <AchievementBadge key={b.title} {...b} />
        ))}
      </div>

      {/* Bookmarks */}
      <div className="mb-4">
        <h3 className="font-bold text-base mb-2">🔖 Bookmarked Guides & Advice</h3>
        <ul>
          {bookmarks.length === 0 && <li>No bookmarks yet. Save advice or videos as you learn!</li>}
          {bookmarks.map((b, i) => (
            <li key={i}>
              <button
                className="underline text-blue-600 mb-2"
                onClick={() => setSelected(b)}
                aria-label={`View ${b.title}`}
              >
                {b.title}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Selected Bookmark View */}
      {selected && (
        <div className="bg-white rounded shadow p-4 mb-4">
          <h3 className="font-bold text-base mb-2">{selected.title}</h3>
          <div className="mb-2">{selected.advice}</div>
          {selected.videoUrl && (
            <a href={selected.videoUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
              📺 Watch Video
            </a>
          )}
          <SocialShareButton text={`Check out this guide: ${selected.title}`} url={selected.videoUrl || window.location.href} />
          <GuideRating userId={userId} workflow={selected.title} guideTitle={selected.title} />
          <button className="bg-gray-300 px-2 py-1 rounded mt-2" onClick={() => setSelected(null)}>Close</button>
        </div>
      )}

      {/* Community Tips */}
      <CommunityTips tips={tips} />
    </div>
  );
}