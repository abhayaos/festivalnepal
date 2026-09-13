import { useEffect, useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

function forceScrollTop(instant = true) {
  // Bypass stuck scroll: reset window + document + root containers
  const top = () => {
    window.scrollTo({ top: 0, left: 0, behavior: instant ? "instant" : "smooth" });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  };
  top();
  // Re-apply on next frames to beat lazy-load / Suspense layout shifts
  requestAnimationFrame(() => {
    top();
    setTimeout(top, 50);
  });
}

export default function ScrollToTop() {
  const { pathname, search, hash } = useLocation();

  // 1. New route (different pathname/search) -> always jump to top,
  //    unless it's an in-page hash link.
  useLayoutEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
    }
    forceScrollTop(true);
  }, [pathname, search, hash]);

  // 2. Same-route <Link> click (pathname doesn't change, so the effect
  //    above never fires and the page looks "stuck"). Catch it globally.
  useEffect(() => {
    const onClick = (e) => {
      const anchor = e.target.closest?.('a[href^="/"]');
      if (!anchor) return;
      try {
        const url = new URL(anchor.getAttribute("href"), window.location.origin);
        // Same page, no hash -> force back to top
        if (url.pathname === window.location.pathname && !url.hash) {
          forceScrollTop(false);
        }
      } catch {
        /* ignore malformed href */
      }
    };
    const onPopState = () => forceScrollTop(true);
    document.addEventListener("click", onClick);
    window.addEventListener("popstate", onPopState);
    return () => {
      document.removeEventListener("click", onClick);
      window.removeEventListener("popstate", onPopState);
    };
  }, []);

  return null;
}