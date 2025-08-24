export default function CommunityTips({ tips }) {
  return (
    <div className="bg-blue-50 rounded p-4 mt-4">
      <h3 className="font-bold text-base mb-2">💡 Tips from Other Beginners</h3>
      <ul>
        {tips.length === 0 && <li>No tips yet. Add yours after you finish a guide!</li>}
        {tips.map((t, i) => (
          <li key={i} className="mb-1 text-sm">“{t}”</li>
        ))}
      </ul>
    </div>
  );
}