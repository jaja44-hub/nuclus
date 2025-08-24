export default function VoiceGuide({ text }) {
  function speak() {
    if ('speechSynthesis' in window) {
      const utter = new window.SpeechSynthesisUtterance(text);
      utter.lang = 'en-US';
      window.speechSynthesis.speak(utter);
    }
  }
  return (
    <button className="bg-blue-500 text-white px-3 py-1 rounded ml-2" onClick={speak} aria-label="Listen to this step">
      🔊 Listen
    </button>
  );
}