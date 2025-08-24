export function showToast(message: string, type: "success" | "error" | "info" = "info") {
  // For beginner: just use alert for now, but can be replaced with a real toast UI later
  alert(`${type === "success" ? "✅" : type === "error" ? "❌" : "ℹ️"} ${message}`);
}