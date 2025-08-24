export default function AskForHelpPanel() {
  return (
    <div className="bg-yellow-100 rounded p-4 mt-4">
      <h3 className="font-bold mb-2 text-base">🆘 Need Help?</h3>
      <div className="mb-2 text-sm">
        If you’re stuck or have questions, you can:
      </div>
      <ul className="list-disc ml-6 text-sm">
        <li>
          <a href="mailto:support@nuclearbuilder.com" className="underline text-blue-600" aria-label="Email Support">
            Email Support
          </a>
        </li>
        <li>
          <a href="https://calendly.com/nuclearbuilder/support-call" className="underline text-blue-600" target="_blank" rel="noopener noreferrer" aria-label="Book a Video Call">
            Book a free video call
          </a>
        </li>
        <li>
          <a href="/chat" className="underline text-blue-600" aria-label="Live Chat">
            Start Live Chat
          </a>
        </li>
      </ul>
    </div>
  );
}