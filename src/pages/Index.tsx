import { useState } from "react";
import Navigation from "@/components/Navigation";
import About from "@/components/About";
import Music from "@/components/Music";
import CV from "@/components/CV";
import Dialga from "@/components/Dialga";

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
      <div className="relative max-w-3xl mx-auto px-8 md:px-12 py-16 md:py-20">
        <Dialga />
        <Navigation activeTab={activeTab} onTabChange={setActiveTab} />
        <main>{renderContent()}</main>
      </div>
    </div>
  );
};

export default Index;
