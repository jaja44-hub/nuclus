import AdviceFeedback from "@/components/AdviceFeedback";
// ...inside your component's render:
{advice && <AdviceFeedback onFeedback={yourFeedbackHandler} />}