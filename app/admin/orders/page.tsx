"use client";

import Link from "next/link";
import { Nunito, Pacifico, Dancing_Script } from "next/font/google";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Menu } from "lucide-react";

const nunito = Nunito({ variable: "--font-nunito", subsets: ["latin"] });
const pacifico = Pacifico({ weight: "400", variable: "--font-pacifico", subsets: ["latin"] });
const dancingScript = Dancing_Script({ weight: "400", variable: "--font-dancing-script", subsets: ["latin"] });

const mockOrders = [
  { id: 1001, name: "Maria Santos", email: "maria@email.com", product: "Paw Print Poster", status: "pending", total: 25.00, created_at: "2026-10-01T10:30:00Z" },
  { id: 1002, name: "John Cruz", email: "john@email.com", product: "Custom Pet Portrait", status: "processing", total: 45.00, created_at: "2026-10-02T14:15:00Z" },
  { id: 1003, name: "Ana Reyes", email: "ana@email.com", product: "Pet Memorial Card", status: "finished", total: 12.00, created_at: "2026-10-03T09:00:00Z" },
];

export default function OrdersPage() {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/admin");
    }
  }, [router]);

  return (
    <main className="min-h-screen bg-black">
      <div className="w-full md:w-[70%] mx-auto px-5 py-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className={`${pacifico} font-display text-4xl md:text-5xl text-white`}>
            All Orders
          </h1>
          <Link href="/admin" className={`${nunito} text-sm text-white/60 hover:text-white transition-colors`}>
            Back to Dashboard
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
          <div className="bg-white/5 border border-white/10 rounded-3xl p-6">
            <p className={`${nunito} text-sm text-white/60`}>Total Orders</p>
            <p className={`${pacifico} font-display text-3xl mb-2 text-white`}>{mockOrders.length}</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-3xl p-6">
            <p className={`${nunito} text-sm text-white/60`}>Pending</p>
            <p className={`${pacifico} font-display text-3xl mb-2 text-yellow-400`}>{mockOrders.filter(o => o.status === "pending").length}</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-3xl p-6">
            <p className={`${nunito} text-sm text-white/60`}>Processing</p>
            <p className={`${pacifico} font-display text-3xl mb-2 text-blue-400`}>{mockOrders.filter(o => o.status === "processing").length}</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-3xl p-6">
            <p className={`${nunito} text-sm text-white/60`}>Finished</p>
            <p className={`${pacifico} font-display text-3xl mb-2 text-green-400`}>{mockOrders.filter(o => o.status === "finished").length}</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-3xl p-6">
            <p className={`${nunito} text-sm text-white/60`}>Total Revenue</p>
            <p className={`${pacifico} font-display text-3xl mb-2 text-pink`}>₱{mockOrders.reduce((sum, o) => sum + o.total, 0).toFixed(2)}</p>
          </div>
        </div>
      </div>

      <div className="w-full md:w-[70%] mx-auto px-5 pb-12">
        <div className="bg-white/5 border border-white/10 rounded-3xl">
          <div className="border-b border-white/10 px-6 py-4">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              <div className={`${nunito} font-semibold text-white/80`}>Order ID</div>
              <div className={`${nunito} font-semibold text-white/80`}>Customer</div>
              <div className={`${nunito} font-semibold text-white/80`}>Product</div>
              <div className={`${nunito} font-semibold text-white/80`}>Status</div>
              <div className={`${nunito} font-semibold text-white/80`}>Date Ordered</div>
            </div>
          </div>

          {mockOrders.length > 0 ? (
            mockOrders.map((order) => (
              <div key={order.id} className="grid grid-cols-1 md:grid-cols-5 gap-4 px-6 py-4 border-b border-white/5 last:border-0 hover:bg-white/5 transition-colors">
                <div>
                  <Link href={`/admin/orders/${order.id}`} className="text-white hover:text-pink transition-colors">
                    #{order.id}
                  </Link>
                </div>
                <div>
                  <Link href={`/admin/orders/${order.id}`} className="text-white hover:text-pink transition-colors">
                    {order.name}
                  </Link>
                </div>
                <div className="text-white/60">
                  {order.product}
                </div>
                <div className={getStatusColor(order.status)}>
                  {order.status}
                </div>
                <div className="text-white/60">
                  {new Date(order.created_at).toLocaleString("en-PH", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </div>
              </div>
            ))
          ) : (
            <div className="px-6 py-12 text-center">
              <p className={`${nunito} text-white/60`}>No data - order</p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

function getStatusColor(status: string): string {
  switch (status.toLowerCase()) {
    case "pending":
      return "text-yellow-400";
    case "processing":
      return "text-blue-400";
    case "finished":
      return "text-green-400";
    default:
      return "text-white";
  }
}
