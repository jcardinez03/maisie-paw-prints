import Image from "next/image";
import { Banner } from "@/components/Banner";
import { Product } from "@/components/Product";
import { Navbar } from "@/components/Navbar";
import { Story } from "@/components/Story";
import { Gallery } from "@/components/Gallery";
import { Order } from "@/components/Order";
import { Footer } from "@/components/Footer";
import { Review } from "@/components/Review";
import { Nunito , Pacifico, Dancing_Script} from "next/font/google";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});


const pacifico = Pacifico({
  weight: "400",
  variable: "--font-pacifico",
  subsets: ["latin"],
});


const dancingScript = Dancing_Script({
  weight: "400",
  variable: "--font-dancing-script",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <main className="relative bg-black">
      <Navbar pacifico={pacifico.className} dancingScript={dancingScript.className}/>
      <Banner nunito={nunito.className} pacifico={pacifico.className}/>
      <Product pacifico={pacifico.className}/>
      <Story pacifico={pacifico.className} dancingScript={dancingScript.className}/>
      <Gallery pacifico={pacifico.className} dancingScript={dancingScript.className}/>
      <Review  pacifico={pacifico.className} dancingScript={dancingScript.className}/>
      <Order pacifico={pacifico.className} dancingScript={dancingScript.className} />
      <Footer pacifico={pacifico.className} dancingScript={dancingScript.className} />
    </main>
  );
}
