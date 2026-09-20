import { LoginForm } from "@/components/auth/LoginForm" 
import { Navbar } from "@/components/auth/Navbar";

import { Nunito , Pacifico, Dancing_Script} from "next/font/google";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});
const dancingScript = Dancing_Script({
  weight: "400",
  variable: "--font-dancing-script",
  subsets: ["latin"],
});


const pacifico = Pacifico({
  weight: "400",
  variable: "--font-pacifico",
  subsets: ["latin"],
});
export default function Login() {
    return (
        <main>
            <Navbar pacifico={pacifico.className} dancingScript={dancingScript.className}/>
            <LoginForm pacifico={pacifico.className} dancingScript={dancingScript.className}/>
        </main>
    )
}