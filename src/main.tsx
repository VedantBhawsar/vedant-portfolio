import { createRoot } from "react-dom/client";
import { useEffect } from "react";
import Lenis from "lenis";
import App from "./App.tsx";
import "./index.css";

function Root() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    (window as any).lenis = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      delete (window as any).lenis;
    };
  }, []);

  return <App />;
}

createRoot(document.getElementById("root")!).render(<Root />);