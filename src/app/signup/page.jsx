"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";

export default function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSignup = async () => {
    const { error } = await supabase.auth.signUp({ email, password });

    if (error) {
      alert(error.message);
    } else {
      alert("회원가입 완료! 로그인 페이지로 이동합니다");
      router.push("/login");
    }
  };

  return (
    <div>
      <h1>회원가입</h1>
      <input
       onChange={(e) => setEmail(e.target.value)} 
       value={email}
       type="email"
       placeholder="이메일을 입력하세요" />
      <input 
      onChange={(e)=> setPassword(e.target.value)}
      value={password}
      type="password" placeholder="비밀번호를 입력하세요" />
      <button onClick={handleSignup}>회원가입</button>
    </div>
  );
}
