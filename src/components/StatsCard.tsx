import { TrendingUp, ImageIcon, CreditCard, Activity } from "lucide-react";
import type { StatCard, StatsCardsProps } from "../types";

const StatsCards = ({ data, loading, error }: StatsCardsProps) => {
  if (loading) {
    return (
      <div className="text-center py-10 text-gray-500">Loading stats...</div>
    );
  }

  if (error) {
    return (
      <div className="mb-4 px-4 py-2 bg-yellow-50 border border-yellow-200 rounded-lg text-yellow-800 text-sm">
        Unable to load live data: {error}
      </div>
    );
  }

  const stats: StatCard[] = [
    {
      icon: <ImageIcon className="w-6 h-6" />,
      value: data?.total_images_generated ?? 0,
      label: "Total Images",
      color: "blue",
    },
    {
      icon: <CreditCard className="w-6 h-6" />,
      value: data?.credits_remaining ?? 0,
      label: "Credits Remaining",
      color: "green",
    },
    {
      icon: <Activity className="w-6 h-6" />,
      value: data?.total_api_calls ?? 0,
      label: "API Calls",
      color: "purple",
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      value: data?.total_credits_used ?? 0,
      label: "Credits Used",
      color: "orange",
    },
  ];

  const colorClasses: Record<
    string,
    { text: string; border: string; bg: string }
  > = {
    blue: {
      text: "text-blue-500",
      border: "border-blue-500/50",
      bg: "from-blue-500/10",
    },
    green: {
      text: "text-green-500",
      border: "border-green-500/50",
      bg: "from-green-500/10",
    },
    purple: {
      text: "text-purple-500",
      border: "border-purple-500/50",
      bg: "from-purple-500/10",
    },
    orange: {
      text: "text-orange-500",
      border: "border-orange-500/50",
      bg: "from-orange-500/10",
    },
  };

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      {stats.map((stat, index) => {
        const colors = colorClasses[stat.color];
        return (
          <div
            key={index}
            className={`bg-background dark:bg-slate-900 rounded-lg border ${colors.border} transition-all relative overflow-hidden`}
          >
            <div className="relative p-6">
              <div className={`${colors.text} mb-3`}>{stat.icon}</div>
              <div className={`text-3xl mb-1 ${colors.text}`}>{stat.value}</div>
              <div className="text-sm text-gray-600 dark:text-foreground">
                {stat.label}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default StatsCards;
