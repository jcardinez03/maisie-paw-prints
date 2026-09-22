import Link from "next/link";
import { Trash2, Edit, Clock, Check, Info, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Nunito, Pacifico, Dancing_Script } from "next/font/google";


const nunito = Nunito({ variable: "--font-nunito", subsets: ["latin"] });
const pacifico = Pacifico({ weight: "400", variable: "--font-pacifico", subsets: ["latin"] });
const dancingScript = Dancing_Script({ weight: "400", variable: "--font-dancing-script", subsets: ["latin"] });

interface ShowOrderProps {
  order: {
    id: number;
    name: string;
    email: string;
    phone_number: string;
    product_id: number;
    details: string;
    status?: string;
    created_at?: number | string | Date;
    order_images?: {
      id: number;
      image: string;
    }[];
  };
}

export default function ShowOrder({ order }: ShowOrderProps) {
  const downloadImage = (base64Image: string, filename: string) => {
    const link = document.createElement("a");

    link.href = base64Image;
    link.download = filename;

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  // Use default values for fields that might not exist
  const status = order.status || "pending";
  const createdAt = order.created_at || Date.now();

  return (
    <main className="min-h-screen bg-black">
      {/* Header */}
      <div className="w-full md:w-[70%] mx-auto px-5 py-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className={`${pacifico} font-display text-4xl md:text-5xl text-white`}>
            Order #{order.id}
          </h1>
          <Link href="/admin/orders" className={`${nunito} text-md text-white/60 hover:text-white transition-colors`}>
            ← Back to Orders
          </Link>
        </div>
      </div>

      {/* Order Image */}
      {order.order_images && (
        <div className="w-full md:w-[70%] mx-auto mb-10 px-5">
          <div className="rounded-2xl p-2 flex flex-wrap flex-row gap-4">
            {order.order_images.map((image) => (
              <div key={image.id} 
              className="group relative w-30 h-30 overflow-hidden border border-white/10 md:flex-wrap" 
              onClick={() => 
                downloadImage(
                  image.image,
                  `order-${order.id}-image-${image.id}.jpg`
                )
              }>
                <Download size={40} className="absolute inset-1/2 -translate-y-1/2 -translate-x-1/2 text-white group-hover:text-pink-500 transition-all opacity-0 group-hover:opacity-100"/>
                <img src={image.image} alt={`order ${order.id} image`} className="w-full h-full object-cover"/>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Order Details */}
      <div className="w-full md:w-[70%] mx-auto px-5 pb-12">
        <div className="bg-white/5 border border-white/10 rounded-3xl">
          {/* Order Info */}
          <div className="px-6 py-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
              <div className="space-y-4">
                <p className={`${nunito} font-semibold text-white/80`}>Customer Information</p>
                <p className={`${nunito} text-white`}>Name: {order.name}</p>
                <p className={`${nunito} text-white`}>Email: {order.email}</p>
                <p className={`${nunito} text-white`}>Phone: {order.phone_number}</p>
              </div>

              <div className="space-y-4">
                <p className={`${nunito} font-semibold text-white/80`}>Order Details</p>
                <p className={`${nunito} text-white`}>Order ID: #{order.id}</p>
                <p className={`${nunito} text-white`}>Product ID: {order.product_id}</p>
                <p className={`${nunito} text-white`}>Placed: {new Date(createdAt).toLocaleDateString()}</p>
                <p className={`${nunito} text-white`}>Status: <span className={`text-${getStatusColor(status)} font-medium`}>{status}</span></p>
              </div>
            </div>

            {/* Product Details */}
            <div className="border-t border-white/10 pt-6">
              <p className={`${nunito} font-semibold text-white/80 mb-4`}>Product Details</p>
              <p className={`${nunito} text-white/90`}>{order.details}</p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="px-6 py-6 border-t border-white/10">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
              <div className="flex flex-col lg:flex-row lg:flex-wrap gap-3 w-full md:w-auto">
                <Button
                  variant="outline"
                  onClick={() => {
                    // Handle edit order - this would be implemented in the parent component
                    alert("Edit functionality would be implemented here");
                  }}
                >
                  <Edit className="mr-2 h-4 w-4" /> Edit Order
                </Button>

                <Button
                  variant="outline"
                  onClick={() => {
                    if (window.confirm("Are you sure you want to delete this order?")) {
                      // Handle delete order - this would be implemented in the parent component
                      alert("Delete functionality would be implemented here");
                    }
                  }}
                >
                  <Trash2 className="mr-2 h-4 w-4" /> Delete Order
                </Button>
              </div>

              {/* Status Update Buttons */}
              <div className="flex flex-col lg:flex-row lg:flex-wrap gap-3">
                <Button
                  variant={status === "pending" ? "default" : "outline"}
                  onClick={() => {
                    // Update status to pending - this would be implemented in the parent component
                    alert("Mark as pending functionality would be implemented here");
                  }}
                  disabled={status === "pending"}
                >
                  <Clock className="mr-2 h-4 w-4" /> Mark Pending
                </Button>

                <Button
                  variant={status === "processing" ? "default" : "outline"}
                  onClick={() => {
                    // Update status to processing - this would be implemented in the parent component
                    alert("Mark as processing functionality would be implemented here");
                  }}
                  disabled={status === "processing"}
                >
                  <Check className="mr-2 h-4 w-4" /> Mark Processing
                </Button>

                <Button
                  variant={status === "finished" ? "default" : "outline"}
                  onClick={() => {
                    // Update status to finished - this would be implemented in the parent component
                    alert("Mark as finished functionality would be implemented here");
                  }}
                  disabled={status === "finished"}
                >
                  <Info className="mr-2 h-4 w-4" /> Mark Finished
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

// Helper function to get status color
function getStatusColor(status: string): string {
  switch (status.toLowerCase()) {
    case "pending":
      return "yellow-400";
    case "processing":
      return "blue-400";
    case "finished":
      return "green-400";
    default:
      return "white";
  }
}