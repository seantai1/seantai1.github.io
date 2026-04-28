import { useEffect, useState } from "react";
import Navigation from "@/components/Navigation";
import About from "@/components/About";
import Music from "@/components/Music";
import CV from "@/components/CV";
import Blog from "@/components/Blog";
import Dialga from "@/components/Dialga";

const Index = () => {
  const [activeTab, setActiveTab] = useState("about");
  const [visited, setVisited] = useState<Record<string, boolean>>({ about: true });

  const markVisited = (tab: string) => {
    setVisited((v) => (v[tab] ? v : { ...v, [tab]: true }));
  };

  useEffect(() => {
    const idle = (window as Window & {
      requestIdleCallback?: (cb: () => void) => number;
    }).requestIdleCallback;
    const handle = idle
      ? idle(() => markVisited("music"))
      : window.setTimeout(() => markVisited("music"), 0);
    return () => {
      const cancelIdle = (window as Window & {
        cancelIdleCallback?: (h: number) => void;
      }).cancelIdleCallback;
      if (cancelIdle) cancelIdle(handle as number);
      else window.clearTimeout(handle as number);
    };
  }, []);

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    markVisited(tab);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="relative max-w-4xl mx-auto px-6 py-12 md:py-20">
        <Dialga />
        <Navigation activeTab={activeTab} onTabChange={handleTabChange} onTabPrefetch={markVisited} />
        <main>
          <div hidden={activeTab !== "about"}>{visited.about && <About />}</div>
          <div hidden={activeTab !== "music"}>{visited.music && <Music />}</div>
          <div hidden={activeTab !== "blog"}>{visited.blog && <Blog />}</div>
          <div hidden={activeTab !== "cv"}>{visited.cv && <CV />}</div>
        </main>
      </div>
    </div>
  );
};

export default Index;
