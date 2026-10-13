"use client";

import { Nunito, Pacifico, Dancing_Script } from "next/font/google";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Menu, Star } from "lucide-react";

const nunito = Nunito({ variable: "--font-nunito", subsets: ["latin"] });
const pacifico = Pacifico({ weight: "400", variable: "--font-pacifico", subsets: ["latin"] });
const dancingScript = Dancing_Script({ weight: "400", variable: "--font-dancing-script", subsets: ["latin"] });

const mockReviews = [
  { id: 1, customer: "Maria Santos", product: "Paw Print Poster", rating: 5, comment: "Amazing quality! My pet looks beautiful.", date: "2026-09-28" },
  { id: 2, customer: "John Cruz", product: "Custom Pet Portrait", rating: 4, comment: "Great portrait, delivery was a bit slow.", date: "2026-09-25" },
  { id: 3, customer: "Ana Reyes", product: "Pet Memorial Card", rating: 5, comment: "Perfect memorial card. Very heartfelt.", date: "2026-09-20" },
];

export default function ReviewsPage() {
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
          Reviews Management
        </h1>

        <div className="mt-12 overflow-x-auto">
          <table className="w-full bg-white/5 border border-white/10 rounded-3xl">
            <thead>
              <tr className="border-b border-white/10">
                <th className={`${nunito} text-left text-sm text-white/60 font-medium px-6 py-3`}>Customer</th>
                <th className={`${nunito} text-left text-sm text-white/60 font-medium px-6 py-3`}>Product</th>
                <th className={`${nunito} text-left text-sm text-white/60 font-medium px-6 py-3`}>Rating</th>
                <th className={`${nunito} text-left text-sm text-white/60 font-medium px-6 py-3`}>Comment</th>
                <th className={`${nunito} text-left text-sm text-white/60 font-medium px-6 py-3`}>Date</th>
              </tr>
            </thead>
            <tbody>
              {mockReviews.length > 0 ? (
                mockReviews.map((review) => (
                  <tr key={review.id} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                    <td className={`${nunito} text-white px-6 py-4`}>{review.customer}</td>
                    <td className={`${nunito} text-white/60 px-6 py-4`}>{review.product}</td>
                    <td className={`${nunito} px-6 py-4`}>
                      <div className="flex items-center gap-1">
                        {Array.from({ length: review.rating }).map((_, i) => (
                          <Star key={i} size={14} className="text-yellow-400 fill-yellow-400" />
                        ))}
                      </div>
                    </td>
                    <td className={`${nunito} text-white/60 px-6 py-4`}>{review.comment}</td>
                    <td className={`${nunito} text-white/60 px-6 py-4`}>{review.date}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td className={`${nunito} text-white px-6 py-4`}>No data - review</td>
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
