import { useState } from "react";

export default function VoiceToTextInput({ onResult }) {
  const [listening, setListening] = useState(false);

  function startListening() {
    if (!('webkitSpeechRecognition' in window)) {
      alert("Sorry, your browser doesn't support speech recognition.");
      return;
    }
    const recognition = new window.webkitSpeechRecognition();
    recognition.lang = 'en-US';
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;
    recognition.onstart = () => setListening(true);
    recognition.onresult = (event) => {
      const text = event.results[0][0].transcript;
      setListening(false);
      if (onResult) onResult(text);
    };
    recognition.onerror = () => setListening(false);
    recognition.onend = () => setListening(false);
    recognition.start();
  }

  return (
    <div className="mt-2">
      <button className={`px-3 py-1 rounded ${listening ? "bg-blue-400" : "bg-blue-600"} text-white`} 
        onClick={startListening} 
        aria-label="Ask a question by speaking">
        {listening ? "Listening..." : "🎤 Ask by Voice"}
      </button>
    </div>
  );
}