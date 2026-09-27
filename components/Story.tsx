"use client";
import { PawPrint } from "lucide-react";
type StoryProps = {
    pacifico: string;
    dancingScript: string;
}

export const Story = ({ pacifico, dancingScript }: StoryProps) => {
    return (
        <>
            <div className="bg-white/3 border-y border-white/10 py-20 w-full" id="story">
                <div className="w-full md:w-[70%] mx-auto px-5 grid md:grid-cols-2 gap-12 items-center">
                    <div className="relative">
                        <div className="bg-pink/10 border border-pink/25 rounded-3xl p-8 backdrop-blur-sm">
                            <div className={`${dancingScript} text-pink text-4xl mb-4`}>
                                Hi, I'm Maisie!
                            </div>
                            <p className="text-white/70 text-lg leading-relaxed mb-6">
                                Thank you for supporting my furparents and MaisiePaw Prints. Every item we ship is packed with love and a little bit of floof.
                            </p>
                            <div className="flex items-end justify-between">
                                <div className="flex gap-1">
                                    <PawPrint className="text-pink" />
                                    <PawPrint className="text-pink" />
                                    <PawPrint className="text-pink" />
                                </div>
                                <div className={`${dancingScript} text-white/60 text-2xl`}>
                                    - Maisie
                                </div>
                            </div>
                        </div>
                        <PawPrint className="absolute -top-4 -right-4 w-10 h-10 text-pink opacity-20" />
                    </div>
                    <div>
                        <div className="inline-flex items-center gap-2 border border-pink/30 text-pink text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-5 animate-pulse">Our story</div>
                        <h2 className={`${pacifico} text-4xl mb-5 text-white`}>
                            Made with Paws, <br /> Passion <span className="text-pink">&</span> Memories
                        </h2>
                        <p className="font-bold leading-relaxed mb-4 text-pink">We believe every picture has a story worth keeping.</p>
                        <p className="text-white/55 text-base leading-relaxed mb-6">MaisiePaw Prints started as a small home-based printshop run by a dog-loving duo with a passion for creativity, meaningful moments, and our furry companion, Maisie.</p>

                        <p className="text-white/55 text-base leading-relaxed mb-6">What began with turning fan art and original designs into tangible products slowly grew into something more personal: creating little keepsakes that help people hold on to the moments that matter.</p>

                        <p className="text-white/55 text-base leading-relaxed mb-6">Because sometimes, a picture is more than just a picture.</p>
                        <p className="text-white/55 text-base leading-relaxed mb-6">
                            It's the smile from a birthday you never want to forget. <br />
                            It's your favorite photo with someone you love. <br />
                            It's a beloved pet who will always have a special place in your heart.</p>

                        <p className="text-white/55 text-base leading-relaxed mb-6">
                            It's a trip, a friendship, a milestone, or a simple moment that becomes a beautiful memory.</p>

                    </div>
                </div>
            </div>
        </>
    )
}