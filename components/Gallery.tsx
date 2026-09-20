"use client";
import { PawPrint } from "lucide-react";
import Image from "next/image";
type GalleryProps = {
    pacifico: string;
    dancingScript: string
}

export const Gallery = ({ pacifico, dancingScript }: GalleryProps) => {
    return (
        <>
            <div className="w-full md:w-[70%] mx-auto px-5 py-20" id="gallery">
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
                            <Image src="/images/badge-pin2.jpg" width={500} height={500} alt="Badge Pin" className="object-cover" />
                        </div>
                    </div>
                    <div className="group relative rounded-2xl overflow-hidden aspect-square cursor-pointer bg-white/5 border border-white/10 hover:border-pink/40 transition-all duration-300">
                        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                            <Image src="/images/mirror-keychain2.jpg" width={500} height={500} alt="Badge Pin" className="object-cover" />
                        </div>
                    </div>
                    <div className="group relative rounded-2xl overflow-hidden aspect-square cursor-pointer bg-white/5 border border-white/10 hover:border-pink/40 transition-all duration-300">
                        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                            <Image src="/images/sintra-board2.jpg" width={500} height={500} alt="Badge Pin" className="object-cover" />
                        </div>
                    </div>
                    <div className="group relative rounded-2xl overflow-hidden aspect-square cursor-pointer bg-white/5 border border-white/10 hover:border-pink/40 transition-all duration-300">
                        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                            <Image src="/images/photo-print.jpg" width={500} height={500} alt="Badge Pin" className="object-cover" />
                        </div>
                    </div>
                    <div className="group relative rounded-2xl overflow-hidden aspect-square cursor-pointer bg-white/5 border border-white/10 hover:border-pink/40 transition-all duration-300">
                        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                            <PawPrint size={100} className="text-pink/40 group-hover:text-pink/70 duration-300"/>
                            <p className="text-white/40 group-hover:text-white/70 uppercase tracking-widest duration-300">Photo Prints</p>
                        </div>
                    </div>
                    <div className="group relative rounded-2xl overflow-hidden aspect-square cursor-pointer bg-white/5 border border-white/10 hover:border-pink/40 transition-all duration-300">
                        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                            <PawPrint size={100} className="text-pink/40 group-hover:text-pink/70 duration-300"/>
                            <p className="text-white/40 group-hover:text-white/70 uppercase tracking-widest duration-300">Photo Book (coming soon!)</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}