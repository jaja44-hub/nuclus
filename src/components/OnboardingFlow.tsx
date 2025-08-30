import { useEffect, useState } from "react";
import AdviceModeToggle from "@/components/AdviceModeToggle";
import ShowMeHowLink from "@/components/ShowMeHowLink";

interface OnboardingFlowProps {
  userId: string;
  workflow: string;
  context?: string;
  projectId: string;
  platform: string;
}

export default function OnboardingFlow({
  userId,
  workflow,
  context,
  projectId,
  platform
}: OnboardingFlowProps) {
  const [isFirstTime, setIsFirstTime] = useState(false);

  useEffect(() => {
    // Replace with real check (e.g. API call, localStorage, user profile)
    setIsFirstTime(true); // assume first-time for demo
  }, [userId, workflow]);

  if (!isFirstTime) return null;

  return (
    <div
      className="bg-blue-50 shadow-lg rounded p-4 max-w-md mx-auto mt-6"
      role="dialog"
      aria-modal="true"
      tabIndex={-1}
    >
      <h2 className="font-bold text-lg mb-2">Welcome to {workflow}!</h2>
      <div className="mb-2 text-sm text-gray-700">
        Let’s get started step by step, or watch a quick video:
      </div>
      <AdviceModeToggle
        workflow={workflow}
        userId={userId}
        context={context}
        projectId={projectId}
        platform={platform}
      />
      <ShowMeHowLink videoUrl="https://www.youtube.com/watch?v=your-demo-video" />
    </div>
  );
}
