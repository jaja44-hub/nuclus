export default function ChallengeWorkflowCard({ title, description, link }) {
  return (
    <div className="bg-red-100 border-red-400 border-2 rounded p-4 mt-4 shadow">
      <h3 className="font-bold text-lg text-red-700 mb-2">🔥 {title}</h3>
      <div className="mb-2">{description}</div>
      <a href={link} className="underline text-red-600 font-bold" target="_blank" rel="noopener noreferrer">
        Try this challenge
      </a>
    </div>
  );
}