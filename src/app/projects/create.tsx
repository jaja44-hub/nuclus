import ProjectCreationAIGuide from "@/components/ProjectCreationAIGuide";

export default function CreateProjectPage({ userId, lastAction, lastStatus, logs }) {
  return (
    <div>
      {/* ...your project creation form... */}
      <ProjectCreationAIGuide userId={userId} lastAction={lastAction} lastStatus={lastStatus} logs={logs} />
    </div>
  );
}