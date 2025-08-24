export default function ShareAdviceButton({ advice }) {
  function copyAdvice() {
    navigator.clipboard.writeText(advice);
    alert("Advice copied! You can share it with anyone.");
  }
  return (
    <button className="bg-blue-500 text-white px-3 py-1 rounded mt-2" onClick={copyAdvice} aria-label="Copy advice to clipboard">
      📤 Share This Advice
    </button>
  );
}