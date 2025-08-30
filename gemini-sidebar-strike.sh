#!/bin/bash

# 🧠 1. Set Gemini API Key
echo "GEMINI_API_KEY=AIzaSyDHJ6Mx7XVB13jcxnhzjSkWnmpu4zWqr3U" > .env
echo 'export GEMINI_API_KEY=$(grep GEMINI_API_KEY .env | cut -d "=" -f2)' >> ~/.bashrc
source ~/.bashrc

# ⚙️ 2. Scaffold Vite + React Project
rm -rf gemini-panel
npm create vite@latest gemini-panel -- --template react -y
cd gemini-panel
npm install @google/generative-ai dotenv fs-extra

# 🧩 3. Inject Gemini Agent
cat > src/geminiAgent.js << 'EOF'
import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";
dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
export const model = genAI.getGenerativeModel({ model: "gemini-pro" });
EOF

# 📂 4. Inject File Agent
cat > src/fileAgent.js << 'EOF'
import fs from "fs-extra";

export function readFile(path) {
  return fs.readFileSync(path, "utf8");
}

export function writeFile(path, content) {
  fs.writeFileSync(path, content);
}
EOF

# 🎨 5. Inject Sidebar UI (Backticks safely embedded)
cat > src/App.jsx << 'EOF'
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
      const fullPrompt = `${prompt}\n\n${fileContent}`;
      const result = await model.generateContent(fullPrompt);
      const newCode = result.response.text();
      writeFile(filePath, newCode);
      setResponse(newCode);
    } catch (err) {
      setResponse(`❌ Error: ${err.message}`);
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
EOF

# 🚀 6. Launch Preview
npm run dev
