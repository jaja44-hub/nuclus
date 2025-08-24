export async function fetchPopularActions({ workflow }) {
  const res = await fetch(`/api/popular-actions?workflow=${workflow}`);
  return res.json(); // Returns array like [{label: "Try Again"}, {label: "Show Example"}]
}