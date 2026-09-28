import { PawPrint } from "lucide-react"
type MissionProps = {
    pacifico: string;
    dancingScript: string;
}


export const Mission = ({ pacifico, dancingScript }: MissionProps) => {
    return (
        <div className="w-full md:w-[70%] mx-auto px-5 py-20 " id="products">
            <div className="relative bg-pink/5 p-10 border border-pink rounded-4xl space-y-7 text-center max-w-3xl mx-auto">
                <PawPrint className="absolute -top-5 -right-5 text-pink/50" size={45}/>
                <div className="inline-flex items-center gap-2 border border-pink/30 text-pink text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-5 animate-pulse">Our Mission</div>

                <p className={`text text-white font-bold ${pacifico} text-4xl capitalize`}>To help you keep <br/>your <span className="text-pink">memories</span> close.</p>

                <p className="text-white">We take your favorite photos, special moments, meaningful designs, and stories—and turn them into <span className="font-bold text-pink">cute, tangible keepsakes you can hold, carry, display, and treasure.</span></p>

                <p className="text-white">From a badge pin you can wear on your favorite bag, to a keychain you can take everywhere, to a photo keepsake that brings you back to a special moment—we want to make your memories a little more tangible.
                    Because memories shouldn't only live in your camera roll.
                </p>

                <p className="font-bold text-pink">They can be something you can hold. <br />
                    Something you can carry. <br />
                    Something you can see every day. <br />
                    Something that tells a story.</p>
            </div>
        </div>
    )
}