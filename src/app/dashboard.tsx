import OnboardingAIGuide from "@/components/OnboardingAIGuide";
import IntegrationAIGuide from "@/components/IntegrationAIGuide";

export default function DashboardPage({ userId, platform, lastStatus, logs }) {
  return (
    <div>
      <OnboardingAIGuide userId={userId} />
      <IntegrationAIGuide userId={userId} platform={platform} lastStatus={lastStatus} logs={logs} />
      {/* ...other dashboard components... */}
    </div>
  );
}