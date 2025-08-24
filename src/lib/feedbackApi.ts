export async function sendAdviceFeedback({ userId, workflow, advice, rating, comment }) {
  await fetch("/api/feedback", {
    method: "POST",
    body: JSON.stringify({ userId, workflow, advice, rating, comment }),
    headers: { "Content-Type": "application/json" },
  });
}

export async function logUserAction({ userId, workflow, action }) {
  await fetch("/api/user-action", {
    method: "POST",
    body: JSON.stringify({ userId, workflow, action, timestamp: Date.now() }),
    headers: { "Content-Type": "application/json" },
  });
}