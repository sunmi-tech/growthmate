import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex items-center w-full">
      <h1>GROWTH MATE</h1>
      <div className="flex items-center gap-6 ml-auto">
        <p>
          <Image
            className="inline-block"
            src="/icons/calendar.svg"
            alt="calendar"
            width={24}
            height={24}
          />
          오늘 날짜
        </p>
        <Link href="/login" className="cursor-pointer">
          로그인
        </Link>
      </div>
    </header>
  );
}
