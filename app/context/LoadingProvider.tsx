'use client';

import { LoadingContext } from "./LoadingContext";
import { useState } from "react";
import { Loading } from "@/components/Loading";
export default function LoadingProvider({children} : {children : React.ReactNode}){
    const [isLoading, setIsLoading] = useState(false);

    return (
        <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
            <Loading />
            {children}
        </LoadingContext.Provider>
    )
}