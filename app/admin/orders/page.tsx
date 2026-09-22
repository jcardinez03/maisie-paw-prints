"use client";
import Link from "next/link";
import { useLoading } from "@/components/hooks/useLoading";
import { Nunito, Pacifico, Dancing_Script } from "next/font/google";
import useOrders from "./hooks/useOrders";
import usePagination from "@/app/hooks/usePagination";

const nunito = Nunito({ variable: "--font-nunito", subsets: ["latin"] });
const pacifico = Pacifico({ weight: "400", variable: "--font-pacifico", subsets: ["latin"] });
const dancingScript = Dancing_Script({ weight: "400", variable: "--font-dancing-script", subsets: ["latin"] });

export default function OrdersPage() {
  const { orders } = useOrders();
  const { currentPage, setCurrentPage, totalPages, currentOrders, nextPage, previousPage } = usePagination(orders);
  const { setIsLoading } = useLoading();
  return (
    <main className="min-h-screen bg-black">
      {/* Header */}
      <div className="w-full md:w-[70%] mx-auto px-5 py-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className={`${pacifico} font-display text-4xl md:text-5xl text-white`}>
            All Orders
          </h1>
          <Link href="/admin" className={`${nunito} text-sm text-white/60 hover:text-white transition-colors`}>
            ← Back to Dashboard
          </Link>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
          <div className="bg-white/5 border border-white/10 rounded-3xl p-6">
            <p className={`${nunito} text-sm text-white/60`}>Total Orders</p>
            <p className={`${pacifico} font-display text-3xl mb-2 text-white`}>{orders.length}</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-3xl p-6">
            <p className={`${nunito} text-sm text-white/60`}>Pending</p>
            <p className={`${pacifico} font-display text-3xl mb-2 text-yellow-400`}></p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-3xl p-6">
            <p className={`${nunito} text-sm text-white/60`}>Processing</p>
            <p className={`${pacifico} font-display text-3xl mb-2 text-blue-400`}></p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-3xl p-6">
            <p className={`${nunito} text-sm text-white/60`}>Finished</p>
            <p className={`${pacifico} font-display text-3xl mb-2 text-green-400`}></p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-3xl p-6">
            <p className={`${nunito} text-sm text-white/60`}>Total Revenue</p>
            <p className={`${pacifico} font-display text-3xl mb-2 text-pink`}>₱ </p>
          </div>
        </div>
      </div>

      {/* Orders Table */}
      <div className="w-full md:w-[70%] mx-auto px-5 pb-12">
        <div className="bg-white/5 border border-white/10 rounded-3xl">
          {/* Table Header */}
          <div className="border-b border-white/10 px-15 py-4">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              <div className={`${nunito} font-semibold text-white/80`}>Order ID</div>
              <div className={`${nunito} font-semibold text-white/80`}>Customer</div>
              <div className={`${nunito} font-semibold text-white/80`}>Email</div>
              <div className={`${nunito} font-semibold text-white/80`}>Phone Number</div>
              <div className={`${nunito} font-semibold text-white/80 text-end`}>Product Type</div>
            </div>
          </div>

          {/* Table Body - Empty State */}
          {currentOrders.length > 0 ?
            currentOrders.map((order) =>
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4 px-15 py-4 text-white">
                <div className="">
                  <Link href={`/admin/orders/${order.id}`} className="text-white hover:text-pink transition-colors">
                    {order.id}
                  </Link>
                </div>
                <div>
                  <Link href={`/admin/orders/${order.id}`} className="text-white hover:text-pink transition-colors">
                    {order.name}
                  </Link>
                </div>
                <div>
                  {order.email}
                </div>
                <div>
                  {order.phone_number}
                </div>
                <div className="text-end">
                  {order.product_id}
                </div>
              </div>
            )
            :
            <div className="px-6 py-12 text-center">
              <p className={`${nunito} text-white/60`}>No orders yet.</p>
              <Link href="/" className={`${nunito} mt-4 inline-block text-pink hover:text-white`}>
                Go to Store
              </Link>
            </div>
          }
        </div>
        <div className="flex items-center justify-center gap-10 px-6 py-4 text-white">
          <button
            onClick={previousPage}
            disabled={currentPage === 1}
          >
            Previous
          </button>

          <span>
            Page {orders.length === 0 ? 0 : currentPage} of {totalPages}
          </span>

          <button
            onClick={nextPage}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>



      {/* Auto-refresh indicator (static text) */}
      <div className="w-full md:w-[70%] mx-auto px-5 pt-4 text-center">
        <p className={`${nunito} text-xs text-white/50`}>
          Last updated: {new Date().toLocaleTimeString()}
        </p>
      </div>
    </main>
  );
}