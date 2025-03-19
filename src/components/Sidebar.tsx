import Link from "next/link";

// 사이드바 메뉴 아이템
const menuItems = [
  {
    label : "Dashboard",
    href : "/dashboard"
  },
  {
    label : "Study",
    href : "/study"
  },
  {
    label : "Schedule",
    href : "/schedule"
  },
  {
    label : "Emotion",
    href : "/emotion"
  },
  {
    label : "Status",
    href : "/status"
  }
]

export default function Sidebar({ className }: { className?: string }) {
  return (
    <aside className={`border-2 h-full ${className || ""}`}>
      <h2>GROWTH MATE</h2>
      <ul>
       {
        menuItems.map((item, index) => {
          return (
            <li key={index}>
              <Link href={item.href}>{item.label}</Link>
            </li>
          )
        })
       }
      </ul>
    </aside>
  );
}
