"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import ShowOrder from "../ShowOrder";
import { Pacifico } from "next/font/google";

const pacifico = Pacifico({ weight: "400", variable: "--font-pacifico", subsets: ["latin"] });
export default function OrderDetailsPage() {
  const [order, setOrder] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
 const { orderId } = useParams<{orderId : string}> ();
  useEffect(() => {
    const fetchOrder = async () => {
      try {
        setLoading(true);
        const response = await fetch(`http://localhost:8000/api/orders/${orderId}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json"
          }
        });

        if (!response.ok) {
          throw new Error(`Failed to fetch order: ${response.statusText}`);
        }

        const data = await response.json();
        setOrder(data);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An unknown error occurred");
        setOrder(null);
      } finally {
        setLoading(false);
      }
    };

    if (orderId) {
      fetchOrder();
    }
  }, [orderId]);

  if (loading) {
    return (
      <main className="min-h-screen bg-black">
        <div className="w-full md:w-[70%] mx-auto px-5 py-12">
          <div className="flex items-center justify-center h-[60vh]">
            <div className="text-center">
              <div className="w-12 h-12 border-4 border-white/20 border-t-white/60 rounded-full animate-spin mb-4"></div>
              <p className={` text-white/60`}>Loading order details...</p>
            </div>
          </div>
        </div>
      </main>
    );
  }

  if (error) {
    return (
      <main className="min-h-screen bg-black">
        <div className="w-full md:w-[70%] mx-auto px-5 py-12">
          <div className="text-center">
            <h2 className={`${pacifico} font-display text-2xl mb-6 text-red-400`}>Error Loading Order</h2>
            <p className={` text-white/60 mb-6`}>{error}</p>
            <Link href="/admin/orders" className={` text-pink hover:text-white transition-colors`}>
              ← Back to Orders
            </Link>
          </div>
        </div>
      </main>
    );
  }

  if (!order) {
    return (
      <main className="min-h-screen bg-black">
        <div className="w-full md:w-[70%] mx-auto px-5 py-12">
          <div className="text-center">
            <h2 className={`${pacifico} font-display text-2xl mb-6 text-white/60`}>Order Not Found</h2>
            <p className={` text-white/60 mb-6`}>The order you're looking for does not exist.</p>
            <Link href="/admin/orders" className={` text-pink hover:text-white transition-colors`}>
              ← Back to Orders
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black">
      <ShowOrder order={order} />
    </main>
  );
}

// Import fonts for the loading/error states (same as in ShowOrder)

