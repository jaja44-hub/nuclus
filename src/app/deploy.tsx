import DeploymentManager from "@/components/DeploymentManager";
import AIGuidePanel from "@/components/AIGuidePanel";
import { useState } from "react";

export default function DeployPage({ userId, projectId }) {
  // You can fetch these from your state or context
  const [platform, setPlatform] = useState("Firebase Hosting");
  const [lastStatus, setLastStatus] = useState("");
  const [logs, setLogs] = useState([]);

  // Pass latest deployment info to the AI Guide
  return (
    <div>
      <DeploymentManager userId={userId} />
      <AIGuidePanel
        userId={userId}
        projectId={projectId}
        platform={platform}
        lastStatus={lastStatus}
        logs={logs}
      />
    </div>
  );
}