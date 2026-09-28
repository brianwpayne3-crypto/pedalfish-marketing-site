"use client";

import { useEffect, useState } from "react";

const views = [
  { id: "manager-ai", label: "Manager AI", concept: "Ask what’s happening and what needs attention.", src: "/images/managerAIScreen.png" },
  { id: "shop-view", label: "Shop View", concept: "See the operation at a glance.", src: "/images/shopView.png" },
  { id: "mechanic-view", label: "Mechanic View", concept: "Keep the work moving.", src: "/images/mechanicViewScreen.png" },
];

export default function ProductShowcase() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [manualSelection, setManualSelection] = useState(false);

  useEffect(() => {
    if (manualSelection || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(() => setSelectedIndex((index) => (index + 1) % views.length), 7000);
    return () => window.clearInterval(timer);
  }, [manualSelection]);

  const selected = views[selectedIndex];

  return (
    <div className="hero-showcase" aria-label="PedalFish product views">
      <div className="hero-showcase-stage" aria-live="polite">
        <img key={selected.id} className="hero-showcase-primary" src={selected.src} alt={`${selected.label} screen`} />
      </div>
      <div className="hero-showcase-controls" role="tablist" aria-label="Choose a PedalFish product view">
          {views.map((view, index) => (
            <button
              key={view.id}
              className={`hero-showcase-tab${index === selectedIndex ? " is-selected" : ""}`}
              type="button"
              role="tab"
              aria-selected={index === selectedIndex}
              aria-controls="hero-showcase-panel"
              onClick={() => { setSelectedIndex(index); setManualSelection(true); }}
            >
              {view.label}
            </button>
          ))}
      </div>
      <div id="hero-showcase-panel" className="sr-only" role="tabpanel">{selected.label}: {selected.concept}</div>
    </div>
  );
}
