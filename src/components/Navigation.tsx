import { useState } from "react";
import { cn } from "@/lib/utils";

interface NavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const Navigation = ({ activeTab, onTabChange }: NavigationProps) => {
  const tabs = [
    { id: "about", label: "me" },
    { id: "music", label: "music" },
    // { id: "cv", label: "cv" },
  ];

  return (
    <nav className="flex gap-8 mb-12">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          className={cn(
            "text-lg transition-colors duration-200 hover:text-accent",
            activeTab === tab.id ? "text-accent" : "text-muted-foreground"
          )}
        >
          {tab.label}
        </button>
      ))}
    </nav>
  );
};

export default Navigation;