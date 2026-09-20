import { ReactNode } from "react"

export const Message = ({children} : {children: ReactNode}) => {
    return (
        <> 
        <div className="border border-white/40 rounded-3xl">
            {children}
        </div> 
        </>
    )
}