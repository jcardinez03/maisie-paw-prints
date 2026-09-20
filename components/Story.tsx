"use client";
import { PawPrint } from "lucide-react";
type StoryProps = {
    pacifico: string;
    dancingScript: string;
}

export const Story = ({ pacifico, dancingScript }: StoryProps) => {
    return (
        <>
            <div className="bg-white/3 border-y border-white/10 py-20" id="story">
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
                            Made with Paws <span className="text-pink">&</span> Passion
                        </h2>
                        <p className="text-white/55 text-base leading-relaxed mb-4">MaisiePaw Prints started as a small home printshop run by a dog-loving duo who wanted to turn fan art and original designs into real, tangible goods.</p>
                        <p className="text-white/55 text-base leading-relaxed mb-6">Our mascot Maisie — a fluffy, perpetually-smiling Shih Tzu Aspin  — keeps our spirits high and quality standards even higher.</p>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-3 text-white/80 font-semibold text-sm">
                                <PawPrint className="text-pink" width={20} height={20}/>
                                Premium materials only
                            </li>
                            <li className="flex items-center gap-3 text-white/80 font-semibold text-sm">
                                <PawPrint className="text-pink" width={20} height={20}/>
                                Vibrant full-color printing
                            </li>
                            <li className="flex items-center gap-3 text-white/80 font-semibold text-sm">
                                <PawPrint className="text-pink" width={20} height={20}/>
                                Fast turnaround times
                            </li>
                            <li className="flex items-center gap-3 text-white/80 font-semibold text-sm">
                                <PawPrint className="text-pink" width={20} height={20}/>
                                Custom sizing available
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}