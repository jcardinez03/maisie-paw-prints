"use client";
import { PawPrint } from "lucide-react";
import Image from "next/image";
type BannerProps = {
    nunito: string;
    pacifico: string;
};

export const Banner = ({ nunito, pacifico }: BannerProps) => {
    return (
        <>
            <div className="w-full md:w-[70%] mx-auto px-5 py-16 md:py-28 grid md:grid-cols-2 gap-10 items-center relative">
                <div className="order-2 md:order-1">
                    <div className="inline-flex items-center gap-2 border border-#pink/40 text-#pink text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-6">
                        <PawPrint width={15} height={15} /> Handcrafted with love
                    </div>
                    <h1
                        className={`${pacifico} font-display text-5xl md:text-6xl leading-tight mb-5 text-white`}
                    >
                        Your Art <br /> <span className="text-pink">Beautifully</span>{" "}
                        <br /> Crafted
                    </h1>
                    <p className="text-white/60 text-lg leading-relaxed mb-8 max-w-md">
                        Hi, I'm Maisie! Welcome to MaisiePaw Prints - where your custom
                        designs become gorgeous badges, keychains, and more. Every order
                        makes me wag my tail! 
                        <PawPrint className="inline text-pink ml-5" />
                        <PawPrint className="inline ml-5 text-pink" />
                        <PawPrint className="inline ml-5 text-pink" />
                    </p>

                    <div className={`flex flex-wrap gap-3 ${nunito}`}>
                        <a
                            href="#"
                            className="bg-pink text-black font-bold px-8 py-3.5 rounded-full hover:bg-[#f0c0d0] transition-all shadow-lg shadow-[#f4a7bf]/25 hover:-translate-y-0.5 duration-200 w-47"
                        >
                            See all Products
                        </a>
                        <a className="border border-white/20 text-white w-47 text-center font-bold px-8 py-3.5 rounded-full hover:border-[#f4a7bf]/ transition-colors">
                            Get a Quote
                        </a>
                    </div>
                </div>
                <div className="order-1 md:order-2 flex justify-center items-center">
                    <div className="relative">
                        <div className="absolute -inset-5 bg-pink/50 rounded-full blur-3xl pointer-events-none" />
                        <div className="relative w-72 h-72 md:w-100 md:h-100 rounded-full border-2 border-pink/70 bg-transparent overflow-hidden flex items-center justify-center">
                            <Image
                                src="/images/icon.png"
                                alt="Image of Maisie"
                                width={400}
                                height={400}
                                className="object-contain object-bottom drop-shadow-2xl rounded-full"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="border-t border-white/10 bg-white/5">
                <div className="max w-6xl mx-auto px-5 py-5 grid grid-cols-3 gap-4 text-center">
                    <div>
                        <div className={`font-display text-pink text-2xl ${pacifico}`}>20+</div>
                        <div className="text-white/40 text-xs font-semi-bold uppercase tracking-wide">Happy Customers</div>
                    </div>
                    <div>
                        <div className={`font-display text-pink text-2xl ${pacifico}`}>6</div>
                        <div className="text-white/40 text-xs font-semibold uppercase tracking-wide">Product Types</div>
                    </div>
                    <div>
                        <div className={`font-display text-pink text-2xl ${pacifico}`}>100%</div>
                        <div className="text-white/40 text-xs font-semibold uppercase tracking-wide">Custom Designs</div>
                    </div>
                </div>
            </div>
        </>
    );
};
