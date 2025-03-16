'use client'
import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";

export default function LoginPage(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const handleLogin = async () => {
        const {error} = await supabase.auth.signInWithPassword({email, password})

        if(error){
            alert(error.message)
        } else {
            alert('로그인 성공! 홈페이지로 이동합니다')
            router.push('/dashboard')
        }
    }
    return (
        <div>
            <h1>로그인</h1>
            <input 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email" />
            <input 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password" />
            <button onClick={handleLogin}>로그인</button>
        </div>
    )
}