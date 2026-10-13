"use client";

import { Nunito, Pacifico, Dancing_Script } from "next/font/google";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Menu, ShoppingBag, DollarSign, Clock, UserPlus } from "lucide-react";

const nunito = Nunito({ variable: "--font-nunito", subsets: ["latin"] });
const pacifico = Pacifico({ weight: "400", variable: "--font-pacifico", subsets: ["latin"] });
const dancingScript = Dancing_Script({ weight: "400", variable: "--font-dancing-script", subsets: ["latin"] });

const mockStats = {
  totalOrders: 3,
  revenue: 82.00,
  pending: 1,
  newCustomers: 2,
};

const mockRecentActivity = [
  { id: 1, action: "New order placed", detail: "Order #1001 - Paw Print Poster", time: "2 hours ago" },
  { id: 2, action: "Review submitted", detail: "5 stars for Custom Pet Portrait", time: "5 hours ago" },
  { id: 3, action: "New customer registered", detail: "ana@email.com", time: "1 day ago" },
];

export default function OverviewPage() {
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
          Dashboard Overview
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-white/5 border border-white/10 rounded-3xl p-6 hover:bg-white/10 transition-colors">
            <div className="flex items-center justify-between mb-4">
              <h2 className={`${nunito} text-sm text-white/60 uppercase tracking-wider`}>Total Orders</h2>
              <div className="w-10 h-10 bg-pink/10 rounded-xl flex items-center justify-center">
                <ShoppingBag size={18} className="text-pink" />
              </div>
            </div>
            <div className={`${pacifico} text-2xl font-bold text-pink`}>{mockStats.totalOrders}</div>
            <p className={`${nunito} text-white/60 text-sm mt-2`}>+1 from last week</p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-6 hover:bg-white/10 transition-colors">
            <div className="flex items-center justify-between mb-4">
              <h2 className={`${nunito} text-sm text-white/60 uppercase tracking-wider`}>Revenue</h2>
              <div className="w-10 h-10 bg-pink/10 rounded-xl flex items-center justify-center">
                <DollarSign size={18} className="text-pink" />
              </div>
            </div>
            <div className={`${pacifico} text-2xl font-bold text-pink`}>₱{mockStats.revenue.toFixed(2)}</div>
            <p className={`${nunito} text-white/60 text-sm mt-2`}>+15% from last week</p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-6 hover:bg-white/10 transition-colors">
            <div className="flex items-center justify-between mb-4">
              <h2 className={`${nunito} text-sm text-white/60 uppercase tracking-wider`}>Pending</h2>
              <div className="w-10 h-10 bg-pink/10 rounded-xl flex items-center justify-center">
                <Clock size={18} className="text-pink" />
              </div>
            </div>
            <div className={`${pacifico} text-2xl font-bold text-pink`}>{mockStats.pending}</div>
            <p className={`${nunito} text-white/60 text-sm mt-2`}>Needs attention</p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-6 hover:bg-white/10 transition-colors">
            <div className="flex items-center justify-between mb-4">
              <h2 className={`${nunito} text-sm text-white/60 uppercase tracking-wider`}>New Customers</h2>
              <div className="w-10 h-10 bg-pink/10 rounded-xl flex items-center justify-center">
                <UserPlus size={18} className="text-pink" />
              </div>
            </div>
            <div className={`${pacifico} text-2xl font-bold text-pink`}>{mockStats.newCustomers}</div>
            <p className={`${nunito} text-white/60 text-sm mt-2`}>This month</p>
          </div>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-3xl p-6 mb-12">
          <h2 className={`${nunito} text-xl font-bold text-white mb-6`}>
            Recent Activity
          </h2>
          <div className="space-y-4">
            {mockRecentActivity.length > 0 ? (
              mockRecentActivity.map((activity) => (
                <div key={activity.id} className="flex items-center justify-between py-3 border-b border-white/5 last:border-0">
                  <div>
                    <p className={`${nunito} text-white`}>{activity.action}</p>
                    <p className={`${nunito} text-white/60 text-sm`}>{activity.detail}</p>
                  </div>
                  <span className={`${nunito} text-white/50 text-sm`}>{activity.time}</span>
                </div>
              ))
            ) : (
              <p className={`${nunito} text-white/60 text-sm`}>No data - activity</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
