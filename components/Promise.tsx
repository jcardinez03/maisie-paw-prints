import { PawPrint } from "lucide-react"
type PromiseProps = {
    pacifico: string;
    dancingScript: string;
}
export const Promise = ({ pacifico, dancingScript }: PromiseProps) => {
    return (
        <div className="bg-white/3 border-y border-white/10 py-20 w-full" id="story">
            <div className="w-full md:w-[70%] mx-auto px-5 items-center text-center">
                <div className="relative  p-10 border border-pink rounded-4xl space-y-2 text-center max-w-3xl mx-auto">
                    <PawPrint className="absolute -top-5 -right-5 text-pink/50" size={45}/>
                    <div className="inline-flex items-center gap-2 border border-pink/30 text-pink text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-5 animate-pulse">Our Promise</div>

                    <p className={`${pacifico} text-white text-4xl capitalize`}>We may be a small shop, <br />but we put our <span className="text-pink">heart</span> into every piece.</p>

                    <div className="w-50 mx-auto mt-5">
                        <p className="text-pink flex flex-row items-center gap-4"><PawPrint className="text-pink" />Quality materials.</p>
                        <p className="text-pink  flex flex-row items-center gap-4"><PawPrint className="text-pink" />Vibrant prints.</p>
                        <p className="text-pink  flex flex-row items-center gap-4"><PawPrint className="text-pink" />Personal touches.</p>
                        <p className="text-pink  flex flex-row items-center gap-4"><PawPrint className="text-pink" />And lots of love.</p>
                    </div>

                    <p className="text-white mt-5">Thank you for letting <span className="text-pink font-bold">MaisiePaw Prints</span> be a small part of your story.</p>

                    <p className="text-pink font-bold">Your memories. Your moments. Your story.</p>
                    <p className="text-white">We'll help you turn them into something worth keeping. </p>
                </div>
            </div>
        </div>
    )
}