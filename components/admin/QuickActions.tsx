import { Plus, Edit, MessageSquare, Settings } from "lucide-react";

interface QuickActionsProps {
  pacifico: string;
  nunito: string;
  dancingScript: string;
}

export const QuickActions = ({
  pacifico,
  nunito,
  dancingScript,
}: QuickActionsProps) => {
  return (
    <>
      <div className="flex items-center justify-between mb-6">
        <h2 className={`${pacifico} font-display text-2xl text-white`}>Quick Actions</h2>
        <div className={`${nunito} text-sm text-white/60`}>
          See all activities
        </div>
      </div>

      <div className="space-y-4">
        <div className="bg-white/5 border border-white/10 rounded-xl p-5">
          <div className="flex items-center mb-4">
            <div className="w-10 h-10 bg-pink/10 rounded-xl flex items-center justify-center">
              <Plus className="text-pink" width={20} height={20} />
            </div>
            <h3 className={`${nunito} font-semibold text-white ml-4`}>Add New Product</h3>
          </div>
          <p className={`${nunito} text-white/60`}>
            Create a new custom product listing with pricing and details
          </p>
          <button
            className={`mt-4 w-full ${nunito} bg-pink text-black font-bold px-5 py-2.5 rounded-full hover:bg-[#f0c0d0] transition-colors`}
          >
            Create Product
          </button>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-xl p-5">
          <div className="flex items-center mb-4">
            <div className="w-10 h-10 bg-pink/10 rounded-xl flex items-center justify-center">
              <Edit className="text-pink" width={20} height={20} />
            </div>
            <h3 className={`${nunito} font-semibold text-white ml-4`}>Manage Orders</h3>
          </div>
          <p className={`${nunito} text-white/60`}>
            View, update status, or process refunds for customer orders
          </p>
          <button
            className={`mt-4 w-full ${nunito} bg-pink text-black font-bold px-5 py-2.5 rounded-full hover:bg-[#f0c0d0] transition-colors`}
          >
            Manage Orders
          </button>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-xl p-5">
          <div className="flex items-center mb-4">
            <div className="w-10 h-10 bg-pink/10 rounded-xl flex items-center justify-center">
              <MessageSquare className="text-pink" width={20} height={20} />
            </div>
            <h3 className={`${nunito} font-semibold text-white ml-4`}>Customer Messages</h3>
          </div>
          <p className={`${nunito} text-white/60`}>
            Respond to inquiries and manage customer communications
          </p>
          <button
            className={`mt-4 w-full ${nunito} bg-pink text-black font-bold px-5 py-2.5 rounded-full hover:bg-[#f0c0d0] transition-colors`}
          >
            View Messages
          </button>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-xl p-5">
          <div className="flex items-center mb-4">
            <div className="w-10 h-10 bg-pink/10 rounded-xl flex items-center justify-center">
              <Settings className="text-pink" width={20} height={20} />
            </div>
            <h3 className={`${nunito} font-semibold text-white ml-4`}>Store Settings</h3>
          </div>
          <p className={`${nunito} text-white/60`}>
            Configure payment methods, shipping options, and store policies
          </p>
          <button
            className={`mt-4 w-full ${nunito} bg-pink text-black font-bold px-5 py-2.5 rounded-full hover:bg-[#f0c0d0] transition-colors`}
          >
            Settings
          </button>
        </div>
      </div>
    </>
  );
};