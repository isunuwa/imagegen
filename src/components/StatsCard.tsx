import { Bot, Users, MessageSquare, TrendingUp } from "lucide-react";

interface StatCard {
  icon: React.ReactNode;
  value: string | number;
  label: string;
  color: string;
}

const StatsCards = () => {
  const stats: StatCard[] = [
    {
      icon: <Bot className="w-6 h-6" />,
      value: 24,
      label: "Active Bots",
      color: "blue",
    },
    {
      icon: <Users className="w-6 h-6" />,
      value: 156,
      label: "Active Sessions",
      color: "green",
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      value: 892,
      label: "Today's Chats",
      color: "purple",
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      value: "12.5k",
      label: "Total Messages",
      color: "orange",
    },
  ];

  const colorClasses: Record<
    string,
    { text: string; border: string; bg: string }
  > = {
    blue: {
      text: "text-blue-500",
      border: "dark:border-blue-500/50 hover:border-blue-500/50",
      bg: "from-blue-500/10",
    },
    green: {
      text: "text-green-500",
      border: "dark:border-green-500/50 hover:border-green-500/50",
      bg: "from-green-500/10",
    },
    purple: {
      text: "text-purple-500",
      border: "dark:border-purple-500/50 hover:border-purple-500/50",
      bg: "from-purple-500/10",
    },
    orange: {
      text: "text-orange-500",
      border: "dark:border-orange-500/50 hover:border-orange-500/50",
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
            className={`bg-background dark:bg-slate-900 rounded-lg border border-gray-200 ${colors.border} transition-all group relative overflow-hidden`}
          >
            <div
              className={`absolute inset-0 bg-gradient-to-bl ${colors.bg} to-transparent opacity-0 group-hover:opacity-100 transition-opacity`}
            ></div>
            <div className="relative p-6">
              <div className={`${colors.text} mb-3`}>{stat.icon}</div>
              <div className={`text-3xl mb-1 ${colors.text}`}>{stat.value}</div>
              <div className="text-sm text-gray-600 dark:text-foreground">{stat.label}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default StatsCards;
