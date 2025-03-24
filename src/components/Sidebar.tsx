import Link from "next/link";
import Image from "next/image";
import { RiDashboardFill, RiEmotionHappyFill } from "react-icons/ri";
import { FaPenClip, FaChartSimple } from "react-icons/fa6";
import { LuCalendarPlus } from "react-icons/lu";

// 사이드바 메뉴 아이템
const menuItems = [
  {
    label : "Dashboard",
    href : "/dashboard",
    icon : <RiDashboardFill />
  },
  {
    label : "Study",
    href : "/study",
    icon : <FaPenClip />
  },
  {
    label : "Schedule",
    href : "/schedule",
    icon : <LuCalendarPlus />
  },
  {
    label : "Emotion",
    href : "/emotion",
    icon : <RiEmotionHappyFill />
  },
  {
    label : "Status",
    href : "/status",
    icon : <FaChartSimple />
  }
]

export default function Sidebar({ className }: { className?: string }) {
  return (
    <aside className={`h-full bg-secondary text-navy-text text-center pl-5 pr-5 ${className || ""}`}>
      <h2 className="flex items-center gap-2 mt-5">
        <Image
          src='/logo.png' 
          alt="logo" 
          width={25} 
          height={25} 
          />
          <span>GROWTH MATE</span>
      </h2>
      <ul>
       {
        menuItems.map((item, index) => {
          return (
            <li className='mt-5 pt-3 pb-3 pl-5 rounded-md hover:bg-primary-hover transition-colors duration-300' key={index}>
              <Link href={item.href} className="flex items-center gap-3">
              <span>{item.icon}</span>
              <span>{item.label}</span>
              </Link>
            </li>
          )
        })
       }
      </ul>
    </aside>
  );
}
