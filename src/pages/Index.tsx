import { useState } from "react";
import Navigation from "@/components/Navigation";
import About from "@/components/About";
import Music from "@/components/Music";
import CV from "@/components/CV";

const Index = () => {
  const [activeTab, setActiveTab] = useState("about");

  const renderContent = () => {
    switch (activeTab) {
      case "about":
        return <About />;
      case "music":
        return <Music />;
      case "cv":
        return <CV />;
      default:
        return <About />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <Navigation activeTab={activeTab} onTabChange={setActiveTab} />
        <main>{renderContent()}</main>
      </div>
    </div>
  );
};

export default Index;
