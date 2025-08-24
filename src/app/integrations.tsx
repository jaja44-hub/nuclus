import PlatformPanel from "@/components/PlatformPanel";

export default function IntegrationsDashboard({ userId }) {
  const platforms = ["GitHub", "Firebase", "Render.com", "Open Notebook LM"];
  return (
    <section className="p-6">
      <h1 className="text-2xl font-bold mb-6">Platform Integrations</h1>
      {platforms.map(platform => (
        <PlatformPanel key={platform} platform={platform} userId={userId} />
      ))}
    </section>
  );
}