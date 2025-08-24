// ... other imports
import { deployToFirebase, deployToGithubPages, deployToRender } from "@/platforms/deployFirebase";

export default function DeploymentManager({ userId }) {
  // ... state hooks
  const [passphrase, setPassphrase] = useState("");

  async function handleDeploy() {
    setDeploying(true);
    setStatus("Starting deployment...");
    let result;
    try {
      if (platform === "Firebase Hosting") {
        result = await deployToFirebase("your-firebase-project-id", userId, passphrase);
      } else if (platform === "GitHub Pages") {
        result = await deployToGithubPages("your-github-repo", userId, passphrase);
      } else if (platform === "Render.com") {
        result = await deployToRender("your-render-service-id", userId, passphrase);
      }
      if (result.success) {
        setStatus(`Deployed! Live URL: ${result.url}`);
        await logDeployment(userId, platform, "success", result.url, "Deployment successful.");
      } else {
        setStatus("Deployment failed.");
        await logDeployment(userId, platform, "error", "", "Deployment failed.");
      }
    } catch (e) {
      setStatus("Deployment error: " + (e.message || e));
      await logDeployment(userId, platform, "error", "", "Deployment error: " + (e.message || e));
    }
    setDeploying(false);
    loadLogs();
  }

  async function handleRedeploy(log) {
    setStatus(`Redeploying to ${log.platform}...`);
    setDeploying(true);
    let result;
    try {
      if (log.platform === "Firebase Hosting") {
        result = await deployToFirebase("your-firebase-project-id", userId, passphrase);
      } else if (log.platform === "GitHub Pages") {
        result = await deployToGithubPages("your-github-repo", userId, passphrase);
      } else if (log.platform === "Render.com") {
        result = await deployToRender("your-render-service-id", userId, passphrase);
      }
      setStatus(result.success ? `Redeployed! Live URL: ${result.url}` : "Redeploy failed.");
      await logDeployment(userId, log.platform, result.success ? "success" : "error", result.url || "", "Redeploy attempted.");
    } catch (e) {
      setStatus("Redeploy error: " + (e.message || e));
      await logDeployment(userId, log.platform, "error", "", "Redeploy error: " + (e.message || e));
    }
    setDeploying(false);
    loadLogs();
  }

  // ... UI logic as before
  return (
    <div className="bg-white shadow rounded p-4 max-w-md mx-auto">
      {/* ...existing UI */}
      <input
        type="password"
        className="border px-2 py-1 mb-2 w-full"
        placeholder="Vault Passphrase"
        value={passphrase}
        onChange={e => setPassphrase(e.target.value)}
      />
      {/* ... existing platform select and button */}
      <div className="mt-6">
        <h3 className="font-semibold mb-2">Deployment Logs</h3>
        <ul className="text-xs">
          {logs.map((log, idx) => (
            <li key={idx} className={log.status === "success" ? "text-green-700" : "text-red-700"}>
              [{log.timestamp}] {log.platform}: {log.status} {log.url && `- ${log.url}`} ({log.message})
              <button
                className="ml-2 px-2 py-1 bg-blue-100 rounded"
                onClick={() => handleRedeploy(log)}
                disabled={deploying}
              >
                Redeploy
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}