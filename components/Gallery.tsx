"use client";
import { PawPrint } from "lucide-react";

type GalleryProps = {
    pacifico: string;
    dancingScript: string
}

export const Gallery = ({pacifico, dancingScript}: GalleryProps) => {
    return (
        <>
            <div className="w-full md:w-[70%] mx-auto px-5 py-20">
                <div className="text-center mb-12">
                    <div className="flex items-center justify-center gap-2 mb-3">
                        <PawPrint className="text-pink" />
                        <span className="text-pink font-bold text-sm uppercase tracking-widest">SAMPLE WORKS</span>
                        <PawPrint className="text-pink" />
                    </div>
                    <h2 className={`text-4xl md:text-5xl ${pacifico} text-white`}>Paw-some Gallery</h2>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    <div className="group relative rounded-2xl overflow-hidden aspect-square cursor-pointer bg-white/5 border border-white/10 hover:border-pink/40 transition-all duration-300">
                        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                            <PawPrint className="text-pink w-12 h-12 opacity-15 group-hover:opacity-30 transition-opacity"/>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}