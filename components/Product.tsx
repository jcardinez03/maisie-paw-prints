"use client";
import { CircleStar, PawPrint, SquareKanban, Link, MirrorRound, Images, PaperBag } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
type ProductProps = {
    pacifico: string;
}

export const Product = ({ pacifico }: ProductProps) => {
    const [flipped, setFlipped] = useState<string | null>(null);
    console.log(flipped);
    return (
        <>
            <div className="w-full md:w-[70%] mx-auto px-5 py-20" id="products">
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

                    <div className={`group relative bg-white/5 border border-white/10 rounded-3xl p-7 transform-3d hover:border-pink/40 hover:bg-white/[0.07] transition-transform duration-700 ${flipped === "badge-pins" ? 'rotate-y-180' : ''}`} id="badge-pins" onClick={() => setFlipped("badge-pins")}>
                        <div className="backface-hidden flex flex-row gap-10">
                            <div className="relative shrink-0 w-40 h-40 rounded-2xl bg-pink/10 border border-pink/20 flex items-center justify-center transition-transform group-hover:scale-110 duration-300 backface-hidden">
                                <Image src="/images/badge-pink.jpg" alt="Badge pin image" height={300} width={300} className="object-contain rounded-2xl"></Image>
                            </div>
                            <div className="flex flex-col items-start gap-10 mb-2 backface-hidden">
                                <h3 className={`text-white text-3xl ${pacifico}`}>Badge Pins</h3>
                                <span className="text-pink font-bold text-xs bg-pink/10 border border-pink/20 px-2.5 py-1 rounded-full">From ₱ 40</span>
                            </div>
                        </div>
                        <div className="absolute inset-0 overflow-auto rounded-2xl flex flex-col items-center justify-start gap-3 backface-hidden rotate-y-180 bg-white/5 border border-white/10 p-8" onClick={(e) => {
                            e.stopPropagation();
                            setFlipped(null);
                        }}>
                            <div className="text-white p-8">
                                <h3 className="text-pink text-lg font-bold">Make your favorite moments, people, characters, or designs wearable!</h3>
                                <p className="mb-4 text-sm">
                                    Our 58mm Custom Badge Pins are perfect for personalizing your bags, pouches, jackets, lanyards, and more. Whether it's your favorite photo, a cute chibi design, fandom, business logo, or your own artwork—you can turn it into a pin!
                                </p>
                                <p className="mb-2 text-sm">Size: 58mm</p>
                                <p className="mb-2 text-sm">Customizable design</p>
                                <p className="text-sm">Perfect for giveaways, souvenirs, gifts, events & everyday collecting</p>

                            </div>
                        </div>
                    </div>

                    <div className={`group relative bg-white/5 border border-white/10 rounded-3xl p-7 transform-3d hover:border-pink/40 hover:bg-white/[0.07] transition-transform duration-700 ${flipped === "sintra-board" ? 'rotate-y-180' : ''}`} id="sintra-board" onClick={() => setFlipped("sintra-board")}>
                        <div className="backface-hidden flex flex-row gap-10">
                            <div className="relative shrink-0 w-40 h-40 rounded-2xl bg-pink/10 border border-pink/20 flex items-center justify-center transition-transform group-hover:scale-110 duration-300 backface-hidden">
                                <Image src="/images/sintra-pink.jpg" alt="Badge pin image" height={300} width={300} className="object-contain rounded-2xl"></Image>
                            </div>
                            <div className="flex flex-col items-start gap-10 mb-2 backface-hidden">
                                <h3 className={`text-white text-3xl ${pacifico}`}>Sintra Board</h3>
                                <span className="text-pink font-bold text-xs bg-pink/10 border border-pink/20 px-2.5 py-1 rounded-full">From ₱ 150</span>
                            </div>
                        </div>
                        <div className="absolute overflow-auto inset-0 rounded-2xl flex flex-col items-center justify-center gap-3 backface-hidden rotate-y-180 bg-white/5 border border-white/10 p-8" onClick={(e) => {
                            e.stopPropagation();
                            setFlipped(null);
                        }}>
                            <div className="text-white p-8">
                                <h3 className="text-pink text-lg font-bold">Turn your favorite photos and designs into a stylish display piece!</h3>
                                <p className="mb-4 text-sm">
                                    Our A4 Sintra Prints are perfect for photos, artwork, signs, personalized designs, room décor, and special memories you want to display.
                                </p>
                                <p className="mb-2 text-sm">Size: A4</p>
                                <p className="mb-2 text-sm">Lightweight & versatile</p>
                                <p className="mb-2 text-sm">Customizable with your own photo or design</p>
                                <p className="text-sm">Great for room décor, displays, gifts & personalized projects</p>
                            </div>
                        </div>
                    </div>

                    <div className={`group relative bg-white/5 border border-white/10 rounded-3xl p-7 transform-3d hover:border-pink/40 hover:bg-white/[0.07] transition-transform duration-700 ${flipped === "mirror" ? 'rotate-y-180' : ''}`} id="mirror" onClick={() => setFlipped("mirror")}>
                        <div className="backface-hidden flex flex-row gap-10">
                            <div className="relative shrink-0 w-40 h-40 rounded-2xl bg-pink/10 border border-pink/20 flex items-center justify-center transition-transform group-hover:scale-110 duration-300 backface-hidden">
                                <Image src="/images/acrylic-pink.jpg" alt="Badge pin image" height={300} width={300} className="object-contain rounded-2xl"></Image>
                            </div>
                            <div className="flex flex-col items-start gap-10 mb-2 backface-hidden">
                                <h3 className={`text-white text-3xl ${pacifico}`}>Mirror Keychain</h3>
                                <span className="text-pink font-bold text-xs bg-pink/10 border border-pink/20 px-2.5 py-1 rounded-full">From ₱ 75</span>
                            </div>
                        </div>
                        <div className="absolute inset-0 overflow-auto rounded-2xl flex flex-col items-center justify-start gap-3 backface-hidden rotate-y-180 bg-white/5 border border-white/10 p-8" onClick={(e) => {
                            e.stopPropagation();
                            setFlipped(null);
                        }}>
                            <div className="text-white">
                                <h3 className="text-pink text-lg font-bold">Carry your favorite memories with you!</h3>
                                <p className="mb-4 text-sm">
                                    Our Back-to-Back Photo Acrylic Keychain lets you feature two photos in one keychain—one on each side. Perfect for couples, besties, family, pets, favorite characters, or any two photos you want to keep close.
                                </p>
                                <p className="mb-2 text-sm">Size: 5cm x 3.2cm</p>
                                <p className="mb-2 text-sm">Acrylic keychain</p>
                                <p className="mb-2 text-sm">Back-to-back photo design</p>
                                <p className="mb-2 text-sm">Includes keychain attachment</p>
                                <p className="mb-2 text-sm">Customizable with your own photo or design</p>
                                <p className="text-sm">Perfect for gifts, souvenirs, couples & special occasions</p>
                            </div>
                        </div>
                    </div>

                    <div className={`group relative bg-white/5 border border-white/10 rounded-3xl p-7 transform-3d hover:border-pink/40 hover:bg-white/[0.07] transition-transform duration-700 ${flipped === "acrylic" ? 'rotate-y-180' : ''}`} id="sintra-board" onClick={() => setFlipped("acrylic")}>
                        <div className="backface-hidden flex flex-row gap-10">
                            <div className="relative shrink-0 w-40 h-40 rounded-2xl bg-pink/10 border border-pink/20 flex items-center justify-center transition-transform group-hover:scale-110 duration-300 backface-hidden">
                                <Image src="/images/acrylic-pink.jpg" alt="Badge pin image" height={300} width={300} className="object-contain rounded-2xl"></Image>
                            </div>
                            <div className="flex flex-col items-start gap-10 mb-2 backface-hidden">
                                <h3 className={`text-white text-3xl ${pacifico}`}>Acrylic Keychain</h3>
                                <span className="text-pink font-bold text-xs bg-pink/10 border border-pink/20 px-2.5 py-1 rounded-full">From ₱ 25</span>
                            </div>
                        </div>
                        <div className="absolute inset-0 overflow-auto rounded-2xl flex flex-col items-center justify-start gap-3 backface-hidden rotate-y-180 bg-white/5 border border-white/10 p-8" onClick={(e) => {
                            e.stopPropagation();
                            setFlipped(null);
                        }}>
                            <div className="text-white">
                                <h3 className="text-pink text-lg font-bold">Carry your favorite memories with you!</h3>
                                <p className="mb-4 text-sm">
                                    Our Back-to-Back Photo Acrylic Keychain lets you feature two photos in one keychain—one on each side. Perfect for couples, besties, family, pets, favorite characters, or any two photos you want to keep close.
                                </p>
                                <p className="mb-2 text-sm">Size: 5cm x 3.2cm</p>
                                <p className="mb-2 text-sm">Acrylic keychain</p>
                                <p className="mb-2 text-sm">Back-to-back photo design</p>
                                <p className="mb-2 text-sm">Includes keychain attachment</p>
                                <p className="mb-2 text-sm">Customizable with your own photo or design</p>
                                <p className="text-sm">Perfect for gifts, souvenirs, couples & special occasions</p>
                            </div>
                        </div>
                    </div>

                    <div className={`group relative bg-white/5 border border-white/10 rounded-3xl p-7 transform-3d hover:border-pink/40 hover:bg-white/[0.07] transition-transform duration-700 ${flipped === "photobook" ? 'rotate-y-180' : ''}`} id="photobook" onClick={() => setFlipped("photobook")}>
                        <div className="backface-hidden flex flex-row gap-10">
                            <div className="relative shrink-0 w-40 h-40 rounded-2xl bg-pink/10 border border-pink/20 flex items-center justify-center transition-transform group-hover:scale-110 duration-300 backface-hidden">
                                <Image src="/images/photobook-pink.jpg" alt="Badge pin image" height={300} width={300} className="object-contain rounded-2xl"></Image>
                            </div>
                            <div className="flex flex-col items-start gap-10 mb-2 backface-hidden">
                                <h3 className={`text-white text-3xl ${pacifico}`}>Photobook</h3>
                                <span className="text-pink font-bold text-xs bg-pink/10 border border-pink/20 px-2.5 py-1 rounded-full">Coming Soon</span>
                            </div>
                        </div>
                        <div className="absolute inset-0 overflow-auto rounded-2xl flex flex-col items-center justify-start gap-3 backface-hidden rotate-y-180 bg-white/5 border border-white/10 p-8" onClick={(e) => {
                            e.stopPropagation();
                            setFlipped(null);
                        }}>
                            <div className="text-white">
                                <h3 className="text-pink text-lg font-bold">Your memories deserve more than a camera roll.</h3>
                                <p className="mb-4 text-sm">
                                    Coming soon from MaisiePaw Prints—personalized photobooks made to turn your favorite photos into something you can hold, flip through, and treasure for years to come.
                                </p>
                                <p className="mb-2 text-sm">Collect your favorite moments</p>
                                <p className="mb-2 text-sm">Turn memories into a keepsake</p>
                                <p className="text-sm">Perfect for birthdays, anniversaries, travels, family memories & special milestones</p>
                            </div>
                        </div>
                    </div>

                    <div className={`group relative bg-white/5 border border-white/10 rounded-3xl p-7 transform-3d hover:border-pink/40 hover:bg-white/[0.07] transition-transform duration-700 ${flipped === "tote" ? 'rotate-y-180' : ''}`} id="tote" onClick={() => setFlipped("tote")}>
                        <div className="backface-hidden flex flex-row gap-10">
                            <div className="relative shrink-0 w-40 h-40 rounded-2xl bg-pink/10 border border-pink/20 flex items-center justify-center transition-transform group-hover:scale-110 duration-300 backface-hidden">
                                <Image src="/images/tote-pink.jpg" alt="Badge pin image" height={300} width={300} className="object-contain rounded-2xl"></Image>
                            </div>
                            <div className="flex flex-col items-start gap-10 mb-2 backface-hidden">
                                <h3 className={`text-white text-3xl ${pacifico}`}>Tote Bags</h3>
                                <span className="text-pink font-bold text-xs bg-pink/10 border border-pink/20 px-2.5 py-1 rounded-full">Coming Soon</span>
                            </div>
                        </div>
                        <div className="absolute inset-0 overflow-auto rounded-2xl flex flex-col items-center justify-start gap-3 backface-hidden rotate-y-180 bg-white/5 border border-white/10 p-8" onClick={(e) => {
                            e.stopPropagation();
                            setFlipped(null);
                        }}>
                            <div className="text-white">
                                <h3 className="text-pink text-lg font-bold">Something cute and useful is on the way! </h3>
                                <p className="mb-4 text-sm">
                                    Get ready to carry your favorite designs, artwork, and MaisiePaw Prints creations wherever you go.
                                </p>
                                <p className="mb-2 text-sm">Cute & customizable designs</p>
                                <p className="text-sm">Perfect for everyday use, gifts & collectors</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}