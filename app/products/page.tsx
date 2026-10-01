import { ProductsItem } from "@/components/ProductsItem";
import { Nunito , Pacifico, Dancing_Script} from "next/font/google";
import { Metadata } from "next";

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

export const metadata: Metadata = {
  title: "MaisiePaw Prints - Products",
  description: "Explore our range of customizable products including badge pins, sintra boards, keychains, and more.",
};

export default function ProductsPage() {
  const products = [
    {
      id: "badge-pins",
      title: "Badge Pins",
      imageSrc: "/images/badge-pink.jpg",
      price: "From ₱ 40",
      description: "Make your favorite moments, people, characters, or designs wearable!",
      details: [
        "Our 58mm Custom Badge Pins are perfect for personalizing your bags, pouches, jackets, lanyards, and more.",
        "Whether it's your favorite photo, a cute chibi design, fandom, business logo, or your own artwork—you can turn it into a pin!",
        "Size: 58mm",
        "Customizable design",
        "Perfect for giveaways, souvenirs, gifts, events & everyday collecting"
      ],
      pacifico: pacifico.className
    },
    {
      id: "sintra-board",
      title: "Sintra Board",
      imageSrc: "/images/sintra-pink.jpg",
      price: "From ₱ 150",
      description: "Turn your favorite photos and designs into a stylish display piece!",
      details: [
        "Our A4 Sintra Prints are perfect for photos, artwork, signs, personalized designs, room décor, and special memories you want to display.",
        "Size: A4",
        "Lightweight & versatile",
        "Customizable with your own photo or design",
        "Great for room décor, displays, gifts & personalized projects"
      ],
      pacifico: pacifico.className
    },
    {
      id: "mirror",
      title: "Mirror Keychain",
      imageSrc: "/images/mirror-pink.jpg",
      price: "From ₱ 75",
      description: "Cute AND useful! Take your favorite photo or design with you wherever you go.",
      details: [
        "Our 58mm Mirror Keychain combines a fun personalized design with a handy mini mirror—perfect for your bag, pouch, keys, or as a thoughtful little gift.",
        "Size: 58mm",
        "Comes with a keychain attachment",
        "Customizable design",
        "Great for souvenirs, giveaways, birthdays & special occasions"
      ],
      pacifico: pacifico.className
    },
    {
      id: "acrylic",
      title: "Acrylic Keychain",
      imageSrc: "/images/acrylic-pink.jpg",
      price: "From ₱ 25",
      description: "Carry your favorite memories with you!",
      details: [
        "Our Back-to-Back Photo Acrylic Keychain lets you feature two photos in one keychain—one on each side. Perfect for couples, besties, family, pets, favorite characters, or any two photos you want to keep close.",
        "Size: 5cm x 3.2cm",
        "Acrylic keychain",
        "Back-to-back photo design",
        "Includes keychain attachment",
        "Customizable with your own photo or design",
        "Perfect for gifts, souvenirs, couples & special occasions"
      ],
      pacifico: pacifico.className
    },
    {
      id: "photobook",
      title: "Photobook",
      imageSrc: "/images/photobook-pink.jpg",
      price: "Coming Soon",
      description: "Your memories deserve more than a camera roll.",
      details: [
        "Coming soon from MaisiePaw Prints—personalized photobooks made to turn your favorite photos into something you can hold, flip through, and treasure for years to come.",
        "Collect your favorite moments",
        "Turn memories into a keepsake",
        "Perfect for birthdays, anniversaries, travels, family memories & special milestones"
      ],
      pacifico: pacifico.className
    },
    {
      id: "tote",
      title: "Tote Bags",
      imageSrc: "/images/tote-pink.jpg",
      price: "Coming Soon",
      description: "Something cute and useful is on the way!",
      details: [
        "Get ready to carry your favorite designs, artwork, and MaisiePaw Prints creations wherever you go.",
        "Cute & customizable designs",
        "Perfect for everyday use, gifts & collectors"
      ],
      pacifico: pacifico.className
    }
  ];

  return (
    <main className="relative bg-black">
      <div className="w-full md:w-[70%] mx-auto px-5 py-20" id="products">
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="text-pink">🐾</span>
            <span className="font-bold text-sm uppercase tracking-widest text-pink">What we make</span>
            <span className="text-pink">🐾</span>
          </div>
          <h2 className={`text-4xl md:text-5xl mb-4 ${pacifico} text-white`}>Our Products</h2>
          <p className="text-white/50 text-lg max-w-lg mx-auto">From tiny pins to big boards - we print all your creative dreams with quality and care.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {products.map(product => (
            <ProductsItem
              key={product.id}
              id={product.id}
              title={product.title}
              imageSrc={product.imageSrc}
              price={product.price}
              description={product.description}
              details={product.details}
              pacifico={product.pacifico}
            />
          ))}
        </div>
      </div>
    </main>
  );
}