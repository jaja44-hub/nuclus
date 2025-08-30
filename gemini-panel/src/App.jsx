import { useState } from "react";
import { model } from "./geminiAgent";
import { readFile, writeFile } from "./fileAgent";

function App() {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [filePath, setFilePath] = useState("./scripts/target.js");

  const handleSubmit = async () => {
    try {
      const fileContent = readFile(filePath);
      const fullPrompt = \`\${prompt}\n\n\${fileContent}\`;
      const result = await model.generateContent(fullPrompt);
      const newCode = result.response.text();
      writeFile(filePath, newCode);
      setResponse(newCode);
    } catch (err) {
      setResponse(\`❌ Error: \${err.message}\`);
    }
  };

  return (
    <div style={{ display: "flex", height: "100vh", fontFamily: "monospace" }}>
      <div style={{ width: "300px", background: "#1e1e1e", color: "#fff", padding: "1rem" }}>
        <h2>⚡ Gemini Sidebar</h2>
        <input
          type="text"
          value={filePath}
          onChange={e => setFilePath(e.target.value)}
          placeholder="Target file path"
          style={{ width: "100%", marginBottom: "1rem" }}
        />
        <textarea
          value={prompt}
          onChange={e => setPrompt(e.target.value)}
          rows={10}
          style={{ width: "100%", marginBottom: "1rem" }}
          placeholder="Enter your command..."
        />
        <button onClick={handleSubmit} style={{ width: "100%", padding: "0.5rem" }}>
          Run Gemini
        </button>
      </div>
      <div style={{ flex: 1, padding: "1rem", background: "#f5f5f5", overflowY: "auto" }}>
        <h3>🧠 Gemini Response</h3>
        <pre>{response}</pre>
      </div>
    </div>
  );
}

export default App;
