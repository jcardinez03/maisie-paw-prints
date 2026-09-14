"use client";
import Image from "next/image"
import { PawPrint } from "lucide-react";
type FooterProps = {
    pacifico: string;
    dancingScript: string;
}

export const Footer = ({ pacifico, dancingScript }: FooterProps) => {
    return (
        <>
            <footer className="bg-black border-t border-white/15 rounded-xl px-5 py-12">
                <div className="w-full md:w-[70%] mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                        <div>
                            <div className="flex items-center gap-2.5 mb-3">
                                <Image src="/images/icon.png" alt="Maisie Icon" width="40" height="40" className="rounded-full" />
                                <div>
                                    <div className={`${pacifico} text-white text-lg leading-none`}>MaisiePaw</div>
                                    <div className={`${dancingScript} text-pink text-lg leading-none`}>Prints</div>
                                </div>
                            </div>
                            <p className="text-sm leading-relaxed text-white/40">
                                Custome printshop with a fluffy heart. Every print tells a story.
                            </p>
                        </div>
                        <div>
                            <h4 className="font-bold text-white mb-3 text-sm uppercase tracking-wider">Products</h4>
                            <ul className="space-y-2">
                                <li><a href="#badge-pins" className="text-sm text-white/40 hover:text-pink transition-colors">Badge Pins</a></li>
                                <li><a href="#sintra-boards" className="text-sm text-white/40 hover:text-pink transition-colors">Sintra Board</a></li>
                                <li><a href="#keychains" className="text-sm text-white/40 hover:text-pink transition-colors">Keychains</a></li>
                                <li><a href="#mirror-keychains" className="text-sm text-white/40 hover:text-pink transition-colors">Mirror Keychains</a></li>
                                <li><a href="#photo-prints" className="text-sm text-white/40 hover:text-pink transition-colors">Photo Prints</a></li>
                                <li><a href="#tote-bags" className="text-sm text-white/40 hover:text-pink transition-colors">Tote Bags</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold text-white mb-3 text-sm uppercase tracking-wider">CONNECT</h4>
                            <ul className="space-y-2 5 text-sm text-white/40">
                                <li>
                                    <a href="" className="flex flex-row items-center gap-2">
                                        <PawPrint size={15} className="text-pink"/>@MaisiePawPrints
                                    </a>
                                </li>
                                <li>
                                    <a href="" className="flex flex-row items-center gap-2">
                                        <PawPrint size={15} className="text-pink"/> hello@maisiepawprints.com
                                    </a>
                                </li>
                                <li>
                                    <a href="" className="flex flex-row items-center gap-2">
                                        <PawPrint size={15} className="text-pink"/> Processing: 5-7 days
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}