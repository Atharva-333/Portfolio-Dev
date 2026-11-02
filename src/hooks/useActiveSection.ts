import { useEffect, useState } from "react";
import { navigationLinks } from "@/data/navigation";

const SECTION_IDS = navigationLinks.map((l) => l.href.replace("#", ""));

export function useActiveSection() {
  const [active, setActive] = useState("home");
  useEffect(() => {
    let raf = 0;
    const update = () => {
      const mid = window.scrollY + window.innerHeight / 3;
      let best = "home";
      let bestDist = Infinity;
      for (const id of SECTION_IDS) {
        const el = document.getElementById(id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        const top = rect.top + window.scrollY;
        const bottom = top + rect.height;
        const dist = mid < top ? top - mid : mid > bottom ? mid - bottom : 0;
        if (dist < bestDist) {
          bestDist = dist;
          best = id;
        }
      }
      setActive((p) => (p === best ? p : best));
    };
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);
  return active;
}
