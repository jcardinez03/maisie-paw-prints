"use client";
import Image from "next/image";

type OrderProps = {
    pacifico: string;
    dancingScript: string;
}

export const Order = ({ pacifico, dancingScript }: OrderProps) => {
    return (
        <>
            <div className="bg-pink/8 border-t border-pink/20 py-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-pink/5">
                    {/* for paw background */}
                </div>
                <div className="max-w-2xl mx-auto px-5 text-center relative">
                    <Image src="/images/icon.png" alt="Maisie Icon" width={50} height={50} className="rounded-full" />
                    <h2 className={`${pacifico} text-4xl md:text-5xl mt-4 mb-4 text-white`}>
                        Ready to <span className="text-pink">Print?</span>
                    </h2>
                    <p className="text-white/55 text-lg leading-relaxed mb-8">
                        Send us your design and let's make something amazing together! DM us on social media or fill out our order form.
                    </p>
                    <div className="bg-white/5 border border-white/10 rounded-3xl p-8 text-left">
                        <h3 className="text-pink text-2xl mb-6 text-center">
                            Order Form
                        </h3>
                        <div className="space-y-4">
                            <form>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="name" className="text-white/70 text-sm font-bold block mb-1.5">Name</label>
                                        <input type="text" name="name" id="name" className="w-full border border-white/15 rounded-xl px-4 py-2.5 text-sm text-white bg-white/5 placeholder-white/25 focus:outline none focus:border-pink/60 focus:ring-2 focus:ring-pink/15 transition all" />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="text-white/70 text-sm font-bold block mb-1.5">Email Address</label>
                                        <input type="email" name="email" id="email" className="w-full border border-white/15 rounded-xl px-4 py-2.5 text-sm text-white bg-white/5 placeholder-white/25 focus:outline-none focus:border-pink/60 focus:ring-2 focus:ring-pink/15 transition-all" />
                                    </div>
                                    <div className="sm:col-span-2">
                                        <label htmlFor="product" className="text-white/70 text-sm font-bold block mb-1.5 custom-cursor-default-hover">Product Type</label>
                                        <select name="product" id="product" className="w-full border border-white/15 rounded-xl px-4 py-2.5 text-sm text-white bg-[#111] focus:outline-none focus:border-pink/60 focus:ring-pink/15 transition-all">
                                            <option hidden>Choose a product..</option>
                                            <option value="badge">Badge</option>
                                            <option value="sintra_board">Sintra Board</option>
                                            <option value="keychain">Keychain</option>
                                            <option value="mirror_keychain">Mirror Keychain</option>
                                            <option value="photo_print">Photo Print</option>
                                            <option value="tote_bag">Tote Bag</option>
                                        </select>
                                    </div>
                                    <div className="sm:col-span-2">
                                        <label htmlFor="details" className="text-white/70 text-sm font-bold block mb-1.5">Order Details</label>
                                        <textarea name="details" id="details" className="w-full border border-white/15 rounded-xl px-4 py-2.5 text-sm text-white bg-white/5 placeholder-white/25 focus:outline-none focus:border-pink/60 focus:ring-2 focus:ring-pink/15 transition-all resize-none" placeholder="Describe your design, quantity, size, and any special requests..."></textarea>
                                    </div>
                                    <button className="w-full bg-pink text-black font-bold py-3.5 rounded-xl hover:bg-[#f0c0d0] transition-colors shadow shadow-pink text-base sm:col-span-2">Send My Order</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}