'use client'

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";

export default function AuthGuard({ children }: { children: React.ReactNode }) {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const checkAuth = async () => {
            const { data: { user } } = await supabase.auth.getUser() 
            console.log(user)
            if(!user){
                router.push('/login')
            } else {
                setIsLoading(false)
            }
        }
        checkAuth().catch((error) => {
            console.error('인증 확인 오류 발생', error)
            router.push('/login')
        })
    }, [router])

    if(isLoading) {
        return <div>로딩중</div>
    }

    // 로그인 인증이 완료되고, 로딩이 끝난 후 자식 컴포넌트를 랜더링함
    return <>{children}</>
}
