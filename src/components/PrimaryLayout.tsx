import Sidebar from './Sidebar';

export default function PrimaryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-gray-800 text-white">
      <Sidebar />
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
}
