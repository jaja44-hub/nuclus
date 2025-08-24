import { showToast } from "@/lib/notify";

// ... inside handleAIDeploy()
if (res.success) {
  showToast("Deployment succeeded! " + (res.url || ""), "success");
} else {
  showToast("Deployment failed. " + res.aiMessage, "error");
}