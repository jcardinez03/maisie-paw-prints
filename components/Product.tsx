"use client";
import { CircleStar, PawPrint, SquareKanban, Link, MirrorRound, Images, PaperBag } from "lucide-react";
type ProductProps = {
    pacifico: string;
}

export const Product = ({ pacifico }: ProductProps) => {
    return (
        <>
            <div className="w-full md:w-[70%] mx-auto px-5 py-20">
                <div className="text-center mb-14">
                    <div className="flex items-center justify-center gap-2 mb-3">
                        <PawPrint className="text-pink" />
                        <span className="font-bold text-sm uppercase tracking-widest text-pink">What we make</span>
                        <PawPrint className="text-pink" />
                    </div>
                    <h2 className={`text-4xl md:text-5xl mb-4 ${pacifico} text-white`}>Our Products</h2>
                    <p className="text-white/50 text-lg max-w-lg mx-auto">From tiny pins to big boards - we print all your creative dreams with quality and care.</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    <div className="group bg-white/5 border border-white/10 rounded-3xl p-7 hover:border-pink/40 hover:bg-white/[0.07]">
                        <div className="w-16 h-16 rounded-2xl bg-pink/10 border border-pink/20 flex items-center justify-center mb-5 transition-transform group-hover:scale-110 duration-300">
                            <CircleStar className="text-pink" width={40} height={40} />
                        </div>
                        <div className="flex items-start justify-between mb-2">
                            <h3 className={`text-white text-xl ${pacifico}`}>Badge Pins</h3>
                            <span className="text-pink font-bold text-xs bg-pink/10 border border-pink/20 px-2.5 py-1 rounded-full">From ₱ 40</span>
                        </div>
                        <p className="text-white/50 text-sm leading-relaxed">
                            Custom printed badges in any shape and size. <br />Perfect for events, merch, and fandoms.</p>
                    </div>
                    <div className="group bg-white/5 border border-white/10 rounded-3xl p-7 hover:border-pink/40 hover:bg-white/[0.07]">
                        <div className="w-16 h-16 rounded-2xl bg-pink/10 border border-pink/20 flex items-center justify-center mb-5 transition-transform group-hover:scale-110 duration-300">
                            <SquareKanban className="text-pink" width={40} height={40} />
                        </div>
                        <div className="flex items-start justify-between mb-2">
                            <h3 className={`text-white text-xl ${pacifico}`}>Sintra Board</h3>
                            <span className="text-pink font-bold text-xs bg-pink/10 border border-pink/20 px-2.5 py-1 rounded-full">From ₱ 150</span>
                        </div>
                        <p className="text-white/50 text-sm leading-relaxed">
                            Lightweight PVC A4 foam boards, ideal for portrait and landscape display.
                        </p>
                    </div>
                    <div className="group bg-white/5 border border-white/10 rounded-3xl p-7 hover:border-pink/40 hover:bg-white/[0.07]">
                        <div className="w-16 h-16 rounded-2xl bg-pink/10 border border-pink/20 flex items-center justify-center mb-5 transition-transform group-hover:scale-110 duration-300">
                            <Link className="text-pink" width={40} height={40} />
                        </div>
                        <div className="flex items-start justify-between mb-2">
                            <h3 className={`text-white text-xl ${pacifico}`}>Keychains</h3>
                            <span className="text-pink font-bold text-xs bg-pink/10 border border-pink/20 px-2.5 py-1 rounded-full">From ₱ 25</span>
                        </div>
                        <p className="text-white/50 text-sm leading-relaxed">
                            Double sided acrylic keychains with vibrant full-color painting</p>
                    </div>
                    <div className="group bg-white/5 border border-white/10 rounded-3xl p-7 hover:border-pink/40 hover:bg-white/[0.07]">
                        <div className="w-16 h-16 rounded-2xl bg-pink/10 border border-pink/20 flex items-center justify-center mb-5 transition-transform group-hover:scale-110 duration-300">
                            <MirrorRound className="text-pink" width={40} height={40} />
                        </div>
                        <div className="flex items-start justify-between mb-2">
                            <h3 className={`text-white text-xl ${pacifico}`}>Mirror Keychains</h3>
                            <span className="text-pink font-bold text-xs bg-pink/10 border border-pink/20 px-2.5 py-1 rounded-full">From ₱ 70</span>
                        </div>
                        <p className="text-white/50 text-sm leading-relaxed">
                            Gorgeous back mirror keychains that shimmer and dazzle.
                        </p>
                    </div>
                    <div className="group bg-white/5 border border-white/10 rounded-3xl p-7 hover:border-pink/40 hover:bg-white/[0.07]">
                        <div className="w-16 h-16 rounded-2xl bg-pink/10 border border-pink/20 flex items-center justify-center mb-5 transition-transform group-hover:scale-110 duration-300">
                            <Images className="text-pink" width={40} height={40} />
                        </div>
                        <div className="flex items-start justify-between mb-2">
                            <h3 className={`text-white text-xl ${pacifico}`}>Photo Prints</h3>
                            <span className="text-pink font-bold text-xs bg-pink/10 border border-pink/20 px-2.5 py-1 rounded-full">From ₱ 15</span>
                        </div>
                        <p className="text-white/50 text-sm leading-relaxed">
                            High-quality photo prints on premium matte or glosy paper
                        </p>
                    </div>
                    <div className="group bg-white/5 border border-white/10 rounded-3xl p-7 hover:border-pink/40 hover:bg-white/[0.07]">
                        <div className="w-16 h-16 rounded-2xl bg-pink/10 border border-pink/20 flex items-center justify-center mb-5 transition-transform group-hover:scale-110 duration-300">
                            <PaperBag className="text-pink" width={40} height={40} />
                        </div>
                        <div className="flex items-start justify-between mb-2">
                            <h3 className={`text-white text-xl ${pacifico}`}>Tote Bags</h3>
                            <span className="text-pink font-bold text-xs bg-pink/10 border border-pink/20 px-2.5 py-1 rounded-full">From ₱ 79</span>
                        </div>
                        <p className="text-white/50 text-sm leading-relaxed">
                            Stylish, practical, and perfect for everyday use. Great for shopping, work, school, or casual outings.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}