export default function Sidebar({ className }: { className?: string }) {
  return (
    <aside className={`border-2 h-full ${className || ""}`}>
      <h2>GROWTH MATE</h2>
      <ul>
        <li className="cursor-pointer">Dashboard</li>
        <li className="cursor-pointer">Study</li>
        <li className="cursor-pointer">Schedule</li>
        <li className="cursor-pointer">Emotion</li>
        <li className="cursor-pointer">Study</li>
        <li className="cursor-pointer">Status</li>
      </ul>
    </aside>
  );
}
