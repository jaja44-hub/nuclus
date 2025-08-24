// Entry point for your dashboard
import Sidebar from "@/components/Sidebar";

export default function Home() {
  return (
    <main className="flex h-screen">
      <Sidebar />
      <section className="flex-1 p-6">
        <h1 className="text-2xl font-bold">Nuclear Builder Dashboard</h1>
        <p>Welcome! Start building your AI-powered developer workspace.</p>
        {/* Additional dashboard components will go here */}
      </section>
    </main>
  );
}