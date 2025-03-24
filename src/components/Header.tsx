"use client";

import Image from "next/image";
import Link from "next/link";
import { getToday } from "@/util/date";
import { supabase } from "@/lib/supabaseClient";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import useAuthStore from "@/store/useAuthStore";

export default function Header() {
  const { isLoggedIn, login, logout } = useAuthStore();
  const router = useRouter(); 
  useEffect(() => {
    const checkAuth = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      login(user);
    };
    checkAuth();
  }, [login, logout]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    logout();
    router.push("/login");
  };

  return (
    <header className="flex items-center w-full p-10">
      <h1>GROWTH MATE</h1>
      <div className="flex items-center gap-6 ml-auto">
        <p>
          <Image
            className="inline-block mr-2"
            src="/icons/calendar.svg"
            alt="calendar"
            width={24}
            height={24}
          />
          <span className="text-navy-text">{getToday()}</span>
        </p>
        {isLoggedIn ? (
          <button
            onClick={handleLogout}
            className="cursor-pointer text-white bg-primary px-4 py-2 rounded-md hover:bg-primary-active transition-colors duration-300"
          >
            로그아웃
          </button>
        ) : (
          <Link
            href="/login"
            className="cursor-pointer text-white bg-primary px-4 py-2 rounded-md hover:bg-primary-active transition-colors duration-300"
          >
            로그인
          </Link>
        )}
      </div>
    </header>
  );
}
