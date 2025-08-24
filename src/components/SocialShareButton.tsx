export default function SocialShareButton({ text, url }) {
  function share() {
    const shareText = `${text} ${url}`;
    if (navigator.share) {
      navigator.share({ title: text, url });
    } else {
      navigator.clipboard.writeText(shareText);
      alert("Achievement link copied! Share it with friends.");
    }
  }
  return (
    <button className="bg-blue-500 text-white px-3 py-1 rounded mt-2" onClick={share} aria-label="Share on social media">
      📣 Share Achievement
    </button>
  );
}