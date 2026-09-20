import { StatsCard } from "@/components/admin/StatsCard";
import { RecentOrders } from "@/components/admin/RecentOrders";
import { QuickActions } from "@/components/admin/QuickActions";
import { Nunito, Pacifico, Dancing_Script } from "next/font/google";
import { Navbar } from "@/components/auth/Navbar";
import Link from "next/link";
const nunito = Nunito({ variable: "--font-nunito", subsets: ["latin"] });
const pacifico = Pacifico({ weight: "400", variable: "--font-pacifico", subsets: ["latin"] });
const dancingScript = Dancing_Script({ weight: "400", variable: "--font-dancing-script", subsets: ["latin"] });

export default function Admin() {
  return (
    <main className="min-h-[100vh] bg-black">
      <Navbar pacifico={pacifico.className} dancingScript={dancingScript.className} />
      <div className="w-full md:w-[70%] mx-auto px-5 py-12">
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h1 className={`font-bold text-4xl md:text-5xl text-white`}>
              Admin Dashboard
            </h1>
            <div className={`${nunito} text-sm text-white/60`}>
              Last updated: {new Date().toLocaleTimeString()}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            <StatsCard
              title="Total Orders"
              value="0"
              change="0%"
              iconName="ShoppingBag"
              pacifico={pacifico.className}
              nunito={nunito.className}
            />
            <StatsCard
              title="Revenue Today"
              value="$0"
              change="0%"
              iconName="DollarSign"
              pacifico={pacifico.className}
              nunito={nunito.className}
            />
            <StatsCard
              title="Pending Orders"
              value="0"
              change="0"
              iconName="Clock"
              pacifico={pacifico.className}
              nunito={nunito.className}
            />
            <StatsCard
              title="New Customers"
              value="0"
              change="0%"
              iconName="UserPlus"
              pacifico={pacifico.className}
              nunito={nunito.className}
            />
          </div>

          <div className="flex justify-center mb-8">
            <Link href="/admin/orders" className={`${nunito} bg-pink text-black font-bold px-8 py-3 rounded-full hover:bg-[#f0c0d0] transition-colors shadow-md shadow-pink/20`}>
              View All Orders
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white/5 border border-white/10 rounded-3xl p-6">
            <RecentOrders
              pacifico={pacifico.className}
              nunito={nunito.className}
              dancingScript={dancingScript.className}
            />
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-6">
            <QuickActions
              pacifico={pacifico.className}
              nunito={nunito.className}
              dancingScript={dancingScript.className}
            />
          </div>
        </div>
      </div>
    </main>
  );
}