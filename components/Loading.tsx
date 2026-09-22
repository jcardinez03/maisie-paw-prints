import { PawPrint } from "lucide-react"
import { useLoading } from "./hooks/useLoading"
export const Loading = () => {
    const { isLoading } = useLoading();
    console.log(isLoading);
    if (!isLoading) return null;
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="text-center">
                <div className="w-14 h-14 border-4 border-white/20 border-t-white/60 rounded-full animate-spin mb-4"></div>
                <p className="text-white/60 flex flex-row items-center gap-2">
                    Loading
                    <PawPrint size={18} className="text-pink-500"/>
                    <PawPrint size={18} className="text-pink-500"/>
                    <PawPrint size={18} className="text-pink-500"/>
                </p>
            </div>
        </div>
    )
}