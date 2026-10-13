"use client";

import { Nunito, Pacifico, Dancing_Script } from "next/font/google";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Menu } from "lucide-react";

const nunito = Nunito({ variable: "--font-nunito", subsets: ["latin"] });
const pacifico = Pacifico({ weight: "400", variable: "--font-pacifico", subsets: ["latin"] });
const dancingScript = Dancing_Script({ weight: "400", variable: "--font-dancing-script", subsets: ["latin"] });

const mockCategories = [
  { id: 1, name: "Prints", slug: "prints", description: "Art prints and posters", productCount: 12 },
  { id: 2, name: "Stationery", slug: "stationery", description: "Cards, notebooks, and paper goods", productCount: 8 },
  { id: 3, name: "Accessories", slug: "accessories", description: "Bags, pins, and other accessories", productCount: 5 },
];

export default function CategoriesPage() {
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
          Categories Management
        </h1>

        <div className="mt-12 overflow-x-auto">
          <table className="w-full bg-white/5 border border-white/10 rounded-3xl">
            <thead>
              <tr className="border-b border-white/10">
                <th className={`${nunito} text-left text-sm text-white/60 font-medium px-6 py-3`}>Name</th>
                <th className={`${nunito} text-left text-sm text-white/60 font-medium px-6 py-3`}>Slug</th>
                <th className={`${nunito} text-left text-sm text-white/60 font-medium px-6 py-3`}>Description</th>
                <th className={`${nunito} text-left text-sm text-white/60 font-medium px-6 py-3`}>Products</th>
                <th className={`${nunito} text-left text-sm text-white/60 font-medium px-6 py-3`}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {mockCategories.length > 0 ? (
                mockCategories.map((category) => (
                  <tr key={category.id} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                    <td className={`${nunito} text-white px-6 py-4`}>{category.name}</td>
                    <td className={`${nunito} text-white/60 px-6 py-4`}>{category.slug}</td>
                    <td className={`${nunito} text-white/60 px-6 py-4`}>{category.description}</td>
                    <td className={`${nunito} text-white px-6 py-4`}>{category.productCount}</td>
                    <td className={`${nunito} px-6 py-4`}>
                      <button className="text-pink hover:text-white transition-colors text-sm">Edit</button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td className={`${nunito} text-white px-6 py-4`}>No data - category</td>
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
