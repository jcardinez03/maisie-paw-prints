"use client";
import Image from "next/image";
import Link from "next/link";
import { X, Menu } from "lucide-react";
import { useMobileMenu } from "../hooks/useMobileMenu";

type NavBarProps = {
    pacifico: string;
    dancingScript: string;
}
export const Navbar = ({ pacifico, dancingScript }: NavBarProps) => {
    const { isMobileMenuOpen, setIsMobileMenuOpen } = useMobileMenu();
    return (

        <nav className="sticky top-0 z-50 bg-black/90 backdrop-blur-md border-b border-white/10">
            <div className="w-full md:w-[70%] mx-auto px-5 flex items-center justify-between h-16">
                <a href="/" className="flex items-center gap-2.5">
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
                    <Link href="/" className="text-white/70 font-semibold text-sm hover:text-pink transition-colors">Home</Link>

                </div>
            </div>
            {isMobileMenuOpen &&
                <div className="md:hidden bg-[#111] border-t border-white/10 flex flex-col px-5 py-4 gap-3">
                    <Link href="/" className="text-white/70 font-semibold text-sm hover:text-pink transition-colors">Home</Link>
                </div>
            }
        </nav>

    )
}