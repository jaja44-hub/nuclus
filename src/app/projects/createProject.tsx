import { useState } from "react";
import { fieldMarshallExecute } from "@/ai/fieldMarshall";

export default function CreateProjectPanel({ userId, vaultKeys }) {
  const [input, setInput] = useState("");
  const [result, setResult] = useState<any>(null);

  const handleCreate = async () => {
    const res = await fieldMarshallExecute(
      userId,
      "new-project",
      "Field Marshall",
      input,
      [],
      vaultKeys
    );
    setResult(res.scaffold);
  };

  return (
    <div>
      <h3>Create New Project</h3>
      <input
        value={input}
        onChange={e => setInput(e.target.value)}
        placeholder="Describe your project idea..."
        className="border px-2 py-1 w-full"
      />
      <button className="bg-blue-500 text-white px-4 py-2 mt-2" onClick={handleCreate}>
        Generate with AI
      </button>
      {result && <pre className="mt-4 bg-gray-100 p-2">{result}</pre>}
    </div>
  );
}