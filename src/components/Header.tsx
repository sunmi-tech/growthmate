import Image from "next/image";

export default function Header() {
  return (
    <header className="border-2 flex w-full">
      <h1>GROWTH MATE</h1>
      <div className="flex ml-auto">
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
        <button className="cursor-pointer">로그인</button>
      </div>
    </header>
  );
}
