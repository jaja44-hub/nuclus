export default function NextStepSuggestions({ completedWorkflows, popularGuides }) {
  // Filter popularGuides to those not yet completed
  const suggestions = popularGuides.filter(g => !completedWorkflows.includes(g.workflow));
  return (
    <div className="bg-blue-100 p-4 rounded mt-4">
      <h3 className="font-bold mb-2 text-base">🎯 What’s Next?</h3>
      <ul>
        {suggestions.map((guide, i) => (
          <li key={i}>
            <a href={guide.link} className="underline text-blue-600" target="_blank" rel="noopener noreferrer">
              {guide.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}