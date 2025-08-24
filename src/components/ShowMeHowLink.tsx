export default function ShowMeHowLink({ videoUrl }) {
  if (!videoUrl) return null;
  return (
    <div className="mt-2">
      <a href={videoUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline" aria-label="Show Me How Video">
        📺 Show Me How
      </a>
    </div>
  );
}