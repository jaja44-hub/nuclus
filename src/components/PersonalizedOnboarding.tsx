export default function PersonalizedOnboarding({ interests, completedSteps, allGuides }) {
  // Filter guides by interests and not completed yet
  const suggestions = allGuides.filter(g =>
    interests.includes(g.topic) && !completedSteps.includes(g.id)
  );
  return (
    <div className="bg-blue-100 rounded p-4 mt-4">
      <h3 className="font-bold mb-2 text-base">🚀 Recommended for You</h3>
      <ul>
        {suggestions.length === 0 && <li>You're all caught up! Explore more features anytime.</li>}
        {suggestions.map(g => (
          <li key={g.id}>
            <a href={g.link} className="underline text-blue-600" target="_blank" rel="noopener noreferrer">
              {g.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}