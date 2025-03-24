'use client'
import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";
import useAuthStore from "@/store/useAuthStore";

export default function LoginPage(){
    const {login, user} = useAuthStore();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const handleLogin = async () => {
        const {error} = await supabase.auth.signInWithPassword({email, password})

        if(error){
            alert(error.message)
        } else {
            login(user);
            alert('로그인 성공! 홈페이지로 이동합니다')
            router.push('/dashboard')
        }
    }
    return (
        <div className="min-h-screen flex items-center justify-center bg-secondary">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
            <h1 className="text-2xl font-bold text-center text-navy-text mb-8">로그인</h1>

            <div className="space-y-4">
            <input 
            value={email}
            placeholder="이메일"
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
            type="email" />

            <div>
            <input 
            value={password}
            placeholder="비밀번호"
            onChange={(e) => setPassword(e.target.value)}
            type="password" 
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
            />
            </div>

            <button 
            onClick={handleLogin}
            className="w-full bg-primary hover:bg-primary-active text-navy-text font-bold py-2 px-4 rounded-md transition-colors duration-300"
            >로그인</button>
        </div>
        </div>
        </div>
    )
}