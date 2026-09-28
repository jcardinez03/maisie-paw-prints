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
                <div className="w-full md:w-[70%] mx-auto px-5 items-center text-center">
                    <div className="relative  p-10 border border-pink rounded-4xl space-y-7 text-center max-w-3xl mx-auto">
                        <PawPrint className="absolute -top-5 -right-5 text-pink/50" size={45} />

                        <div className="inline-flex items-center gap-2 border border-pink/30 text-pink text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-5 animate-pulse">Our story</div>
                        <h2 className={`${pacifico} text-4xl mb-5 text-white`}>
                            Made with Paws, <br /> Passion <span className="text-pink">&</span> Memories
                        </h2>
                        <p className="font-bold leading-relaxed mb-4 text-pink">We believe every picture has a story worth keeping.</p>
                        <p className="text-white text-base leading-relaxed mb-6">MaisiePaw Prints started as a small home-based printshop run by a dog-loving duo with a passion for creativity, meaningful moments, and our furry companion, Maisie.</p>

                        <p className="text-white text-base leading-relaxed mb-6">What began with turning fan art and original designs into tangible products slowly grew into something more personal: creating little keepsakes that help people hold on to the moments that matter.</p>

                        <p className="text-white text-base leading-relaxed mb-6">Because sometimes, a picture is more than just a picture.</p>
                        <p className="text-white text-base leading-relaxed mb-6">
                            It's the smile from a birthday you never want to forget. <br />
                            It's your favorite photo with someone you love. <br />
                            It's a beloved pet who will always have a special place in your heart.</p>

                        <p className="text-white text-base leading-relaxed mb-6">
                            It's a trip, a friendship, a milestone, or a simple moment that becomes a beautiful memory.</p>

                    </div>
                </div>
            </div>
        </>
    )
}