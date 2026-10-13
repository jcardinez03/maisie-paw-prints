import { PawPrint } from "lucide-react";
import Image from "next/image";
type MeetProps = {
    pacifico: string;
    dancingScript: string;
}

export const Meet = ({ pacifico, dancingScript }: MeetProps) => {
    return (
        <div className="w-full md:w-[70%] mx-auto px-5 py-20" id="gallery">
            <div className="relative flex flex-col xl:flex-row gap-10 border items-center border-pink/50 p-5 rounded-2xl bg-pink/10">
                <PawPrint className="absolute -top-5 -right-5 text-pink/40" size={40}/>
                <Image src="/images/maisie.jpg" alt="Maisie" width={500} height={500} className="rounded-4xl" />
                <div className="space-y-5 ">
                    <h2 className={`${pacifico} text-pink text-7xl text-center`}>Meet Maisie</h2>

                    <p className="text-2xl">At the heart of our little shop is <span className="font-bold text-pink">Maisie</span>, our fluffy, perpetually-smiling Shih Tzu Aspin and our very own four-legged inspiration.</p>
                    <p className="text-2xl">She's the reason behind our name and a reminder of what we hope every MaisiePaw Prints creation brings: <span className="text-pink font-bold">a little happiness, a little warmth, and something worth keeping.</span></p>
                </div>
            </div>
        </div>
    )
}