"use client";

import TroubleshootingAIGuide from "@/components/TroubleshootingAIGuide";
import React from "react";

export default function ErrorPanel({
  userId,
  workflow,
  lastAction,
  lastStatus,
  logs,
  error,
}) {
  return (
    <div>
      {error && (
        <TroubleshootingAIGuide
          userId={userId}
          workflow={workflow}
          lastAction={lastAction}
          lastStatus={lastStatus}
          logs={logs}
        />
      )}
      {/* ...other error UI... */}
    </div>
  );
}
