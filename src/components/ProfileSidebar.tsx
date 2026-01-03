import { User, Key } from "lucide-react";
import type { ProfileSidebarProps } from "../types";

export function ProfileSidebar({
  activeSection,
  onSectionChange,
}: ProfileSidebarProps) {
  const sections = [
    { id: "profile", label: "Profile", icon: User },
    { id: "api-keys", label: "API Keys", icon: Key },
  ];

  return (
    <div className="w-64 bg-background border-r border-border dark:border-slate-700 h-full py-6">
      <h2 className="mb-2 text-foreground font-bold">Settings</h2>

      <div className="space-y-2">
        {sections.map((section) => {
          const Icon = section.icon;
          const isActive = activeSection === section.id;

          return (
            <button
              key={section.id}
              onClick={() => onSectionChange(section.id)}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                isActive
                  ? "bg-slate-100 text-slate-700 dark:text-foreground dark:bg-slate-800"
                  : "text-slate-600 dark:text-foreground dark:hover:bg-slate-800  hover:bg-slate-100/50"
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{section.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
