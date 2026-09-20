import { TrendingUp, Activity, ShieldCheck } from "lucide-react";

interface RecentOrdersProps {
  pacifico: string;
  nunito: string;
  dancingScript: string;
}

export const RecentOrders = ({
  pacifico,
  nunito,
  dancingScript,
}: RecentOrdersProps) => {
  return (
    <>
      <div className="flex items-center justify-between mb-6">
        <h2 className={`${pacifico} font-display text-2xl text-white`}>Recent Orders</h2>
        <div className={`${nunito} text-sm text-white/60`}>
          View All →
        </div>
      </div>

      <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-center py-10">
        <p className={`${nunito} text-white/60`}>No recent orders</p>
      </div>

      <div className="mt-6 pt-4 border-t border-white/10">
        <div className="flex items-center justify-between">
          <div className={`${nunito} text-sm text-white/60`}>
            0 orders today • 0% vs yesterday
          </div>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-pink/10 rounded flex items-center justify-center">
              <TrendingUp className="text-pink" width={16} height={16} />
            </div>
            <div className={`${nunito} font-medium text-white`}>0%</div>
          </div>
        </div>
      </div>
    </>
  );
};