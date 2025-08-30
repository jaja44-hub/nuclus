"use client";

import AchievementBadge from "@/components/AchievementBadge";
import AdviceCommentFeedback from "@/components/AdviceCommentFeedback";
import AdviceFeedback from "@/components/AdviceFeedback";
import AdviceModeToggle from "@/components/AdviceModeToggle";
import { AIDeployPanel } from "@/components/AIDeployPanel";
import AIGuidePanel from "@/components/AIGuidePanel";
import AskForHelpPanel from "@/components/AskForHelpPanel";
import AuthVaultPanel from "@/components/AuthVaultPanel";
import BackupRestoreWizard from "@/components/BackupRestoreWizard";
import BeginnerStepFeedback from "@/components/BeginnerStepFeedback";
import BeginnerStepGuide from "@/components/BeginnerStepGuide";
import BookmarkAdviceButton from "@/components/BookmarkAdviceButton";
import ChallengeWorkflowCard from "@/components/ChallengeWorkflowCard";
import CommunityTips from "@/components/CommunityTips";
import ContextAwareAIPopup from "@/components/ContextAwareAIPopup";
import CredentialVault from "@/components/CredentialVault";
import DeploymentManager from "@/components/DeploymentManager";
import DeploymentWizardPanel from "@/components/DeploymentWizardPanel";
import EnterpriseDashboard from "@/components/EnterpriseDashboard";
import EnterpriseLaunchPanel from "@/components/EnterpriseLaunchPanel";
import FirebaseIntegrationPanel from "@/components/FirebaseIntegrationPanel";
import FirstSuccessCelebration from "@/components/FirstSuccessCelebration";
import FollowUpAIGuide from "@/components/FollowUpAIGuide";
import GeminiIntegrationPanel from "@/components/GeminiIntegrationPanel";
import GlassBoxSimulator from "@/components/GlassBoxSimulator";
import GuideEndFeedback from "@/components/GuideEndFeedback";
import GuideQuiz from "@/components/GuideQuiz";
import GuideRating from "@/components/GuideRating";
import IntegrationAIGuide from "@/components/IntegrationAIGuide";
import LangChainIntegrationPanel from "@/components/LangChainIntegrationPanel";
import LearningNotification from "@/components/LearningNotification";
import MCPIntegrationPanel from "@/components/MCPIntegrationPanel";
import MobileAccessibleAdvicePanel from "@/components/MobileAccessibleAdvicePanel";
import MyLearningDashboard from "@/components/MyLearningDashboard";
import NextStepSuggestions from "@/components/NextStepSuggestions";
import NotebookCompendium from "@/components/NotebookCompendium";
import OnboardingAIGuide from "@/components/OnboardingAIGuide";
import OnboardingFlow from "@/components/OnboardingFlow";
import PersonalizedOnboarding from "@/components/PersonalizedOnboarding";
import PlatformIntegrations from "@/components/PlatformIntegrations";
import PlatformPanel from "@/components/PlatformPanel";
import PopularQuickActions from "@/components/PopularQuickActions";
import ProgressTracker from "@/components/ProgressTracker";
import ProjectCreationAIGuide from "@/components/ProjectCreationAIGuide";
import PromotionalOutletPanel from "@/components/PromotionalOutletPanel";
import QuickActionAIGuide from "@/components/QuickActionAIGuide";
import RealTimeFeedbackPanel from "@/components/RealTimeFeedbackPanel";
import SectorSelector from "@/components/SectorSelector";
import ServiceStateAnalytics from "@/components/ServiceStateAnalytics";
import ShareAdviceButton from "@/components/ShareAdviceButton";
import ShowMeHowLink from "@/components/ShowMeHowLink";
import SmartQuickActionAIGuide from "@/components/SmartQuickActionAIGuide";
import SocialShareButton from "@/components/SocialShareButton";
import StateMirroringPanel from "@/components/StateMirroringPanel";
import StepByStepGuide from "@/components/StepByStepGuide";
import StepWithVisual from "@/components/StepWithVisual";
import TroubleshootingAIGuide from "@/components/TroubleshootingAIGuide";
import UnlockedFeaturePanel from "@/components/UnlockedFeaturePanel";
import VisualLogsPanel from "@/components/VisualLogsPanel";
import VoiceGuide from "@/components/VoiceGuide";
import VoiceToTextInput from "@/components/VoiceToTextInput";
import WorkflowAIGuide from "@/components/WorkflowAIGuide";

const mockProps = {
  userId: "user-123",
  projectId: "project-abc",
  platform: "Firebase",
  lastStatus: "Success",
  logs: ["Log entry 1", "Log entry 2"],
  workflow: "Onboarding",
  stepText: "This is a step.",
  advice: { title: "Test Advice" },
  onBookmark: () => alert("Bookmarked!"),
  challenge: {
    title: "Test Challenge",
    description: "A test challenge.",
    link: "#",
  },
  tips: [{ text: "A helpful tip." }],
  context: "Test context",
  lastAction: "Test action",
  visible: true,
  celebration: { workflow: "Test Workflow" },
  quiz: {
    questions: [{ question: "A question?", options: ["A", "B"], answer: "A" }],
  },
  guide: { title: "Test Guide" },
  notification: {
    title: "Test Notification",
    description: "A test notification.",
  },
  onboarding: { steps: [] },
  actions: { actions: [] },
  progress: { percentage: 50 },
  share: { advice: { title: "Test Advice" } },
  how: { step: { title: "Test Step" } },
  unlocked: { featureName: "Test Feature" },
  voice: { text: "Test voice." },
};

const components = [
  {
    name: "AchievementBadge",
    component: (
      <AchievementBadge
        title="Test Badge"
        imageUrl="/test.png"
        description="A test badge."
      />
    ),
  },
  { name: "AdviceCommentFeedback", component: <AdviceCommentFeedback /> },
  { name: "AdviceFeedback", component: <AdviceFeedback /> },
  {
    name: "AdviceModeToggle",
    component: (
      <AdviceModeToggle
        workflow={mockProps.workflow}
        userId={mockProps.userId}
        projectId={mockProps.projectId}
        platform={mockProps.platform}
      />
    ),
  },
  { name: "AIDeployPanel", component: <AIDeployPanel /> },
  { name: "AIGuidePanel", component: <AIGuidePanel {...mockProps} /> },
  { name: "AskForHelpPanel", component: <AskForHelpPanel /> },
  { name: "AuthVaultPanel", component: <AuthVaultPanel /> },
  { name: "BackupRestoreWizard", component: <BackupRestoreWizard /> },
  {
    name: "BeginnerStepFeedback",
    component: (
      <BeginnerStepFeedback
        userId={mockProps.userId}
        workflow={mockProps.workflow}
        stepText={mockProps.stepText}
      />
    ),
  },
  {
    name: "BeginnerStepGuide",
    component: (
      <BeginnerStepGuide
        workflow={mockProps.workflow}
        userId={mockProps.userId}
      />
    ),
  },
  {
    name: "BookmarkAdviceButton",
    component: (
      <BookmarkAdviceButton
        advice={mockProps.advice}
        onBookmark={mockProps.onBookmark}
      />
    ),
  },
  {
    name: "ChallengeWorkflowCard",
    component: <ChallengeWorkflowCard {...mockProps.challenge} />,
  },
  { name: "CommunityTips", component: <CommunityTips tips={mockProps.tips} /> },
  {
    name: "ContextAwareAIPopup",
    component: <ContextAwareAIPopup {...mockProps} />,
  },
  {
    name: "CredentialVault",
    component: <CredentialVault userId={mockProps.userId} />,
  },
  {
    name: "DeploymentManager",
    component: <DeploymentManager userId={mockProps.userId} />,
  },
  { name: "DeploymentWizardPanel", component: <DeploymentWizardPanel /> },
  { name: "EnterpriseDashboard", component: <EnterpriseDashboard /> },
  { name: "EnterpriseLaunchPanel", component: <EnterpriseLaunchPanel /> },
  { name: "FirebaseIntegrationPanel", component: <FirebaseIntegrationPanel /> },
  {
    name: "FirstSuccessCelebration",
    component: <FirstSuccessCelebration {...mockProps.celebration} />,
  },
  { name: "FollowUpAIGuide", component: <FollowUpAIGuide {...mockProps} /> },
  { name: "GeminiIntegrationPanel", component: <GeminiIntegrationPanel /> },
  { name: "GlassBoxSimulator", component: <GlassBoxSimulator /> },
  {
    name: "GuideEndFeedback",
    component: (
      <GuideEndFeedback
        userId={mockProps.userId}
        workflow={mockProps.workflow}
      />
    ),
  },
  {
    name: "GuideQuiz",
    component: <GuideQuiz questions={mockProps.quiz.questions} />,
  },
  {
    name: "GuideRating",
    component: (
      <GuideRating
        userId={mockProps.userId}
        workflow={mockProps.workflow}
        guideTitle={mockProps.guide.title}
      />
    ),
  },
  {
    name: "IntegrationAIGuide",
    component: <IntegrationAIGuide {...mockProps} />,
  },
  {
    name: "LangChainIntegrationPanel",
    component: <LangChainIntegrationPanel />,
  },
  {
    name: "LearningNotification",
    component: <LearningNotification {...mockProps.notification} />,
  },
  { name: "MCPIntegrationPanel", component: <MCPIntegrationPanel /> },
  {
    name: "MobileAccessibleAdvicePanel",
    component: <MobileAccessibleAdvicePanel />,
  },
  { name: "MyLearningDashboard", component: <MyLearningDashboard /> },
  { name: "NextStepSuggestions", component: <NextStepSuggestions /> },
  { name: "NotebookCompendium", component: <NotebookCompendium /> },
  {
    name: "OnboardingAIGuide",
    component: <OnboardingAIGuide userId={mockProps.userId} />,
  },
  {
    name: "OnboardingFlow",
    component: <OnboardingFlow {...mockProps.onboarding} />,
  },
  { name: "PersonalizedOnboarding", component: <PersonalizedOnboarding /> },
  { name: "PlatformIntegrations", component: <PlatformIntegrations /> },
  { name: "PlatformPanel", component: <PlatformPanel /> },
  {
    name: "PopularQuickActions",
    component: <PopularQuickActions {...mockProps.actions} />,
  },
  {
    name: "ProgressTracker",
    component: <ProgressTracker {...mockProps.progress} />,
  },
  { name: "ProjectCreationAIGuide", component: <ProjectCreationAIGuide /> },
  { name: "PromotionalOutletPanel", component: <PromotionalOutletPanel /> },
  { name: "QuickActionAIGuide", component: <QuickActionAIGuide /> },
  { name: "RealTimeFeedbackPanel", component: <RealTimeFeedbackPanel /> },
  { name: "SectorSelector", component: <SectorSelector /> },
  { name: "ServiceStateAnalytics", component: <ServiceStateAnalytics /> },
  {
    name: "ShareAdviceButton",
    component: <ShareAdviceButton {...mockProps.share} />,
  },
  { name: "ShowMeHowLink", component: <ShowMeHowLink {...mockProps.how} /> },
  { name: "SmartQuickActionAIGuide", component: <SmartQuickActionAIGuide /> },
  { name: "SocialShareButton", component: <SocialShareButton /> },
  { name: "StateMirroringPanel", component: <StateMirroringPanel /> },
  { name: "StepByStepGuide", component: <StepByStepGuide /> },
  { name: "StepWithVisual", component: <StepWithVisual /> },
  { name: "TroubleshootingAIGuide", component: <TroubleshootingAIGuide /> },
  {
    name: "UnlockedFeaturePanel",
    component: <UnlockedFeaturePanel {...mockProps.unlocked} />,
  },
  { name: "VisualLogsPanel", component: <VisualLogsPanel /> },
  { name: "VoiceGuide", component: <VoiceGuide {...mockProps.voice} /> },
  { name: "VoiceToTextInput", component: <VoiceToTextInput /> },
  { name: "WorkflowAIGuide", component: <WorkflowAIGuide /> },
];

export default function PalaceView() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-4xl font-bold mb-8">
        Palace View: Component Showcase
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {components.map(({ name, component }) => (
          <div
            key={name}
            className="p-4 border rounded-xl bg-card text-card-foreground"
          >
            <h2 className="text-xl font-semibold mb-4">{name}</h2>
            <div className="mt-4">{component}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
