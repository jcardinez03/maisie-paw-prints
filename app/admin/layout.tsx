"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { getToken } from "@/components/auth/functions/getToken";

export default function AdminLayout({children,}: {children: React.ReactNode;}) {
    const router = useRouter();

    useEffect(() => {
        const token = getToken();

        if(!token) {
            router.push('/');
        }
    },[router]);

    return children;
}