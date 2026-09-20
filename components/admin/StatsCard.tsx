import { ShoppingBag, DollarSign, Clock, UserPlus } from "lucide-react";

interface StatsCardProps {
  title: string;
  value: string;
  change: string;
  iconName: keyof typeof ICON_MAP;
  pacifico: string;
  nunito: string;
}

const ICON_MAP = {
  ShoppingBag: ShoppingBag,
  DollarSign: DollarSign,
  Clock: Clock,
  UserPlus: UserPlus,
} as const;

export const StatsCard = ({
  title,
  value,
  change,
  iconName,
  pacifico,
  nunito,
}: StatsCardProps) => {
  const Icon = ICON_MAP[iconName];
  const isPositive = change.startsWith("+") || change.startsWith("−") === false;

  return (
    <div className="bg-white/5 border border-white/10 rounded-3xl p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-pink/10 rounded-xl flex items-center justify-center">
            <Icon className="text-pink" width={20} height={20} />
          </div>
          <h3 className={`${nunito} font-semibold text-white/80`}>{title}</h3>
        </div>
        <p className={`${nunito} text-sm text-${isPositive ? "pink" : "white/50"}`}>
          {change}
        </p>
      </div>
      <p className={`${pacifico} font-display text-3xl mb-2 text-white`}>
        {value}
      </p>
    </div>
  );
};