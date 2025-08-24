import { useState } from "react";

export default function BookmarkAdviceButton({ advice, onBookmark }) {
  const [bookmarked, setBookmarked] = useState(false);
  function handleBookmark() {
    setBookmarked(true);
    if (onBookmark) onBookmark(advice);
  }
  return (
    <button className={`px-3 py-1 rounded mt-2 ${bookmarked ? "bg-yellow-400" : "bg-gray-300"}`} 
      onClick={handleBookmark} 
      aria-label="Bookmark this advice">
      {bookmarked ? "⭐ Bookmarked" : "⭐ Bookmark"}
    </button>
  );
}