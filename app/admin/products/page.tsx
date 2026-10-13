"use client";

import { Nunito, Pacifico, Dancing_Script } from "next/font/google";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Menu } from "lucide-react";

const nunito = Nunito({ variable: "--font-nunito", subsets: ["latin"] });
const pacifico = Pacifico({ weight: "400", variable: "--font-pacifico", subsets: ["latin"] });
const dancingScript = Dancing_Script({ weight: "400", variable: "--font-dancing-script", subsets: ["latin"] });

const mockProducts = [
  { id: 1, name: "Paw Print Poster", category: "Prints", price: 25.00, status: "active" },
  { id: 2, name: "Custom Pet Portrait", category: "Prints", price: 45.00, status: "active" },
  { id: 3, name: "Pet Memorial Card", category: "Stationery", price: 12.00, status: "draft" },
];

export default function ProductsPage() {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/admin");
    }
  }, [router]);

  return (
    <div className="min-h-screen bg-black p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <button
            onClick={() => router.push("/admin")}
            className={`${nunito} text-white/60 hover:text-pink transition-colors text-sm flex items-center gap-2`}
            aria-label="Back to admin"
          >
            <Menu size={20} /> Back to Admin
          </button>
        </div>

        <h1 className={`${pacifico} text-4xl font-bold text-white mb-6`}>
          Products Management
        </h1>

        <div className="mt-12 overflow-x-auto">
          <table className="w-full bg-white/5 border border-white/10 rounded-3xl">
            <thead>
              <tr className="border-b border-white/10">
                <th className={`${nunito} text-left text-sm text-white/60 font-medium px-6 py-3`}>Product Name</th>
                <th className={`${nunito} text-left text-sm text-white/60 font-medium px-6 py-3`}>Category</th>
                <th className={`${nunito} text-left text-sm text-white/60 font-medium px-6 py-3`}>Price</th>
                <th className={`${nunito} text-left text-sm text-white/60 font-medium px-6 py-3`}>Status</th>
                <th className={`${nunito} text-left text-sm text-white/60 font-medium px-6 py-3`}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {mockProducts.length > 0 ? (
                mockProducts.map((product) => (
                  <tr key={product.id} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                    <td className={`${nunito} text-white px-6 py-4`}>{product.name}</td>
                    <td className={`${nunito} text-white/60 px-6 py-4`}>{product.category}</td>
                    <td className={`${nunito} text-white px-6 py-4`}>₱{product.price.toFixed(2)}</td>
                    <td className={`${nunito} px-6 py-4`}>
                      <span className={`px-2 py-1 rounded-full text-xs ${product.status === "active" ? "bg-green-400/10 text-green-400" : "bg-yellow-400/10 text-yellow-400"}`}>
                        {product.status}
                      </span>
                    </td>
                    <td className={`${nunito} px-6 py-4`}>
                      <button className="text-pink hover:text-white transition-colors text-sm">Edit</button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td className={`${nunito} text-white px-6 py-4`}>No data - product</td>
                  <td className={`${nunito} text-white/60 px-6 py-4`}></td>
                  <td className={`${nunito} text-white/60 px-6 py-4`}></td>
                  <td className={`${nunito} text-white/60 px-6 py-4`}></td>
                  <td className={`${nunito} text-white/60 px-6 py-4`}></td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
