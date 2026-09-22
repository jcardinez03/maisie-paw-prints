"use client";

import Image from "next/image";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useMobileMenu } from "./hooks/useMobileMenu";
type NavbarProps = {
    pacifico: string;
    dancingScript: string;
};
export const Navbar = ({ pacifico, dancingScript }: NavbarProps) => {

    const { isMobileMenuOpen, setIsMobileMenuOpen } = useMobileMenu();

    return (
        <nav className="sticky top-0 z-50 w-full bg-black/90 backdrop-blur-md border-b border-white/10 overflow-hidden">
            <div className="w-full md:w-[70%] mx-auto px-5 flex items-center justify-between h-16">
                <a href="#" className="flex items-center gap-2.5">
                    <Image
                        src="/images/icon.png"
                        alt="MaisiePawPrints Logo"
                        width={40}
                        height={40}
                        className="rounded-full"
                    />
                    <div
                        className={`${pacifico} leading-tight`}
                        style={{ fontFamily: "var(--font-pacifico)" }}
                    >
                        <div className={`${pacifico} font-display text-white text-xl leading-none`}>
                            MaisiePaw
                        </div>
                        <div className={`${dancingScript} font-script text-pink text-sm leading-none`}>
                            Prints
                        </div>
                    </div>
                </a>
                {isMobileMenuOpen ?
                    <button className="md:hidden text-white" onClick={() => setIsMobileMenuOpen((prev) => !prev)}>
                        <X></X>
                    </button>
                    :
                    <button className="md:hidden text-white" onClick={() => setIsMobileMenuOpen((prev) => !prev)}>
                        <Menu></Menu>
                    </button>
                }

                <div className="hidden md:flex items-center gap-8">
                    <Link href="#products" className="text-white/70 font-semibold text-sm hover:text-pink transition-colors">Products</Link>
                    <Link href="#story" className="text-white/70 font-semibold text-sm hover:text-pink transition-colors">About</Link>
                    <Link href="#gallery" className="text-white/70 font-semibold text-sm hover:text-pink transition-colors">Gallery</Link>
                    <Link href="#order" className="text-white/70 font-semibold text-sm hover:text-pink transition-colors">Order</Link>
                    <Link href="#order" className="bg-pink text-black text-sm font-bold px-5 py-2 rounded-full hover:bg-[#f0c0d0] transition-colors shadow-sm shadow-pink">Order Now</Link>
                </div>

            </div>
            {isMobileMenuOpen &&
                <div className="md:hidden bg-[#111] border-t border-white/10 flex flex-col px-5 py-4 gap-3">
                    <Link href="#products" className="text-white/70 font-semibold text-sm hover:text-pink transition-colors">Products</Link>
                    <Link href="#story" className="text-white/70 font-semibold text-sm hover:text-pink transition-colors">About</Link>
                    <Link href="#gallery" className="text-white/70 font-semibold text-sm hover:text-pink transition-colors">Gallery</Link>
                    <Link href="#order" className="text-white/70 font-semibold text-sm hover:text-pink transition-colors">Order</Link>
                    <Link href="#order" className="bg-pink text-black text-sm font-bold px-5 py-2 rounded-full hover:bg-[#f0c0d0] transition-colors shadow-sm shadow-pink text-center">Order Now</Link>
                </div>
            }
        </nav>
    )
}