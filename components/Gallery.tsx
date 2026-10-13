"use client";
import { PawPrint } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";
type GalleryProps = {
    pacifico: string;
    dancingScript: string
}

const galleryImages = [
    {
        src: "/images/badge-pin2.jpg",
        alt: "Badge Pin"
    },
    {
        src: "/images/mirror-keychain2.jpg",
        alt: "Mirror Keychain"
    },
    {
        src: "/images/sintra-board2.jpg",
        alt: "Sintra Board"
    },
    {
        src: "/images/acrylic-keychain.jpg",
        alt: "Acrylic Keychain"
    },


]



export const Gallery = ({ pacifico, dancingScript }: GalleryProps) => {
    const [selectedImage, setSelectedImage] = useState<{
        src: string;
        alt: string;
    } | null>(null);

    useEffect(() => {
        if (!selectedImage) return;

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                setSelectedImage(null);
            }
        }

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [selectedImage]);


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
                    {galleryImages.slice(0, 6).map((images, index) => (
                        <div key={index} onClick={() =>
                            setSelectedImage(images)
                        } className="relative rounded-2xl overflow-hidden aspect-square cursor-pointer bg-white/5 border border-white/10 hover:border-pink/40 transition-all duration-300">

                            <div className={`w-full h-full transition-transform duration-500 transform-3d}`}>
                                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 backface-hidden">
                                    <Image src={images.src} width={500} height={500} alt={images.alt} className="object-cover" />
                                </div>
                            </div>
                        </div>
                    ))}
                    <div className="group flex items-center justify-center aspect-square rounded-2xl bg-white/5 border border-white/10 hover:border-pink transition-all duration-300">
                        <PawPrint size={100} className="text-pink/30 group-hover:text-pink transition-all" />
                    </div>

                    <div className="group flex items-center justify-center aspect-square rounded-2xl bg-white/5 border border-white/10 hover:border-pink transition-all duration-300">
                        <PawPrint size={100} className="text-pink/30 group-hover:text-pink transition-all" />
                    </div>
                </div>
                {selectedImage && (
                    <div
                        onClick={() => setSelectedImage(null)}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
                    >
                        <div
                            onClick={(event) => event.stopPropagation()}
                            className="relative"
                        >
                            <button
                                onClick={() => setSelectedImage(null)}
                                className="absolute -top-10 right-0 text-3xl text-white hover:text-pink"
                                aria-label="Close enlarged image"
                            >
                                &times;
                            </button>

                            <Image
                                src={selectedImage.src}
                                alt={selectedImage.alt}
                                width={1200}
                                height={1200}
                                className="max-h-[85vh] w-auto max-w-[90vw] rounded-2xl object-contain"
                            />
                        </div>
                    </div>
                )}
            </div>
        </>
    )

}