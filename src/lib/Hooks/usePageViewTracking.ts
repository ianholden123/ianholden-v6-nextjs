import { useEffect } from "react";
import { useRouter } from "next/router";
import { trackPageView } from "@/lib/Services/Rudderstack";

export const usePageViewTracking = () => {
  const router = useRouter();

  // Track our initial page view on page load
  useEffect(() => {
    trackPageView();
  }, []);

  // Track all subsequent page views when we navigate to new pages
  useEffect(() => {
    const handleRouteChange = (path) => {
      const url = window.location.href;
      const pageName = document.title;
      trackPageView(pageName, { path, url });
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router]);
};
