import { Atom, Palette, Zap } from "lucide-react";

const Features = () => {
  const featuresList = [
    {
      icon: <Zap className="w-8 h-8 text-yellow-500 dark:text-yellow-400" />,
      text: "Fast Generation",
    },
    {
      icon: <Palette className="w-8 h-8 text-pink-500 dark:text-pink-400" />,
      text: "Creative Designs",
    },
    {
      icon: <Atom className="w-8 h-8 text-purple-600 dark:text-purple-400" />,
      text: "Cutting-edge AI",
    },
  ];

  return (
    <div className="bg-white dark:bg-background">
      <div className="max-w-3xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-center gap-16 py-8">
          {featuresList.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center space-y-4"
            >
              {feature.icon}
              <span className="text-gray-700 dark:text-gray-300 font-medium text-lg">
                {feature.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
