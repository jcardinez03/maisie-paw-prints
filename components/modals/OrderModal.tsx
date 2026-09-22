import { X } from "lucide-react"
import { useState } from "react"

type OrderModal = {
    setOrderModalOpen: (open: boolean) => void;
}

export const OrderModal = ({ setOrderModalOpen }: OrderModal) => {
    return (
        <>
            <div className="fixed inset-0 z-40" onClick={()=>setOrderModalOpen(false)}>
                <div className="fixed bg-pink/5 border border-white/20 backdrop-blur-2xl top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-[90%] md:w-[90%] lg:w-[90%] xl:w-[50%] md:h-auto h-[50%] overflow-y-auto rounded-2xl px-12 py-10 text-white space-y-4 z-50" onClick={(e) => e.stopPropagation()}>
                    <X className="absolute top-4 right-4 hover:text-pink cursor-pointer" onClick={() => setOrderModalOpen(false)} />
                    <h3 className="text-center text-2xl font-bold">How to Order Your Customized Item</h3>

                    <p><span className="font-bold text-xl text-pink">1. Choose your product: </span><br />
                        Select the customized product you would like to order.</p>

                    <p><span className="font-bold text-xl text-pink">2. Send your photo or design: </span><br />
                        Upload or send us your preferred photo, artwork, logo, or design according to the product requirements.</p>

                    <p><span className="font-bold text-xl text-pink">3. Confirm your details: </span><br />
                        Let us know your preferred customization and any special instructions for your order.</p>

                    <p><span className="font-bold text-xl text-pink">4. Review your design: </span><br />
                        For products that require a layout or customized artwork, we may provide a preview for confirmation before production.</p>

                    <p><span className="font-bold text-xl text-pink">5. Production begins: </span><br />
                        Once your order and design are confirmed, we'll begin creating your customized item.</p>

                    <p><span className="font-bold text-xl text-pink">6. Receive your personalized product: </span><br />
                        Your custom-made item will be prepared for pickup or delivery according to your selected arrangement.</p>

                    <p className="text-2xl font-bold animate-pulse">Important Notes</p>

                    <p>Please provide clear, high-quality images whenever possible for the best printing results.</p>

                    <p>Colors may appear slightly different depending on your screen and the final printed product.</p>

                    <p>Customized items are made specifically for each customer, so please review your submitted details carefully before confirmation.</p>

                    <p>Production time may vary depending on the quantity and complexity of the order.</p>

                    <p>For bulk orders, events, and business merchandise, please contact us for a customized quotation.</p>
                </div>
            </div>
        </>
    )
}