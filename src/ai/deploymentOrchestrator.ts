import { fieldMarshallExecute } from "./fieldMarshall";
import { deployToFirebase, deployToGithubPages, deployToRender } from "@/platforms/deployFirebase";
import { logDeployment } from "@/lib/deploymentLogs";

// AI-powered deployment orchestrator
export async function aiDeploy({
  userId,
  projectId,
  passphrase,
  platform,
  userPrompt,
}: {
  userId: string;
  projectId: string;
  passphrase: string;
  platform: "Firebase Hosting" | "GitHub Pages" | "Render.com";
  userPrompt: string;
}) {
  // Use AI to plan deployment (Gemini + LangChain)
  const aiResult = await fieldMarshallExecute(
    userId,
    projectId,
    "Field Marshall",
    userPrompt,
    [], // docs
    [] // vaultKeys
  );
  let deployResult;
  let message = aiResult.scaffold || "AI did not generate specific deployment instructions.";
  try {
    if (platform === "Firebase Hosting") {
      deployResult = await deployToFirebase(projectId, userId, passphrase);
    } else if (platform === "GitHub Pages") {
      deployResult = await deployToGithubPages(projectId, userId, passphrase);
    } else {
      deployResult = await deployToRender(projectId, userId, passphrase);
    }
    await logDeployment(
      userId,
      platform,
      deployResult.success ? "success" : "error",
      deployResult.url || "",
      message
    );
    return { ...deployResult, aiMessage: message };
  } catch (e) {
    await logDeployment(userId, platform, "error", "", "AI deploy error: " + (e.message || e));
    return { success: false, aiMessage: "AI deploy error: " + (e.message || e) };
  }
}