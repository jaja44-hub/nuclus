import TroubleshootingAIGuide from "@/components/TroubleshootingAIGuide";

export default function ErrorPanel({ userId, workflow, lastAction, lastStatus, logs, error }) {
  // Only show panel if there's an error
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