import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { trackPageView } from "@/lib/Services/Rudderstack";

export const usePageViewTracking = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const url = window.location.href;
    const pageName = document.title;
    trackPageView(pageName, {
      path: pathname,
      url,
      title: pageName,
      search: searchParams.toString(),
    });
  }, [pathname, searchParams]);
};
