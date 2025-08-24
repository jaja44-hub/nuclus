export default function MobileAccessibleAdvicePanel({ advice }) {
  return (
    <div className="fixed bottom-2 left-2 right-2 max-w-xs mx-auto bg-blue-50 shadow-lg rounded p-4" role="dialog" aria-modal="true" tabIndex={0}>
      <div className="text-sm text-gray-700">{advice}</div>
    </div>
  );
}