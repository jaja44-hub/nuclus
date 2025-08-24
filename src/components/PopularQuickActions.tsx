import { useEffect, useState } from "react";
import { fetchPopularActions } from "@/lib/popularActionsApi";

export default function PopularQuickActions({ workflow, onAction }) {
  const [actions, setActions] = useState([]);
  useEffect(() => {
    fetchPopularActions({ workflow }).then(setActions);
  }, [workflow]);
  return (
    <div className="flex gap-2 mt-2">
      {actions.map(a => (
        <button key={a.label} className="bg-green-600 text-white px-3 py-1 rounded" onClick={() => onAction(a.label)}>
          {a.label}
        </button>
      ))}
    </div>
  );
}