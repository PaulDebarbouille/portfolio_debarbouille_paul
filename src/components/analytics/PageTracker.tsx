import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";

const generateSessionId = () => {
  const stored = sessionStorage.getItem("analytics_session_id");
  if (stored) return stored;
  const id = crypto.randomUUID();
  sessionStorage.setItem("analytics_session_id", id);
  return id;
};

const PageTracker = () => {
  const location = useLocation();
  const startTime = useRef(Date.now());
  const currentPath = useRef(location.pathname);
  const sessionId = useRef(generateSessionId());

  const trackPageView = async (pagePath: string) => {
    try {
      // Get country from free API
      let country = "Unknown";
      let city = "Unknown";
      try {
        const geoRes = await fetch("https://ipapi.co/json/");
        if (geoRes.ok) {
          const geoData = await geoRes.json();
          country = geoData.country_name || "Unknown";
          city = geoData.city || "Unknown";
        }
      } catch {
        // Geo lookup failed, continue with Unknown
      }

      await supabase.from("page_views").insert({
        page_path: pagePath,
        referrer: document.referrer || null,
        user_agent: navigator.userAgent,
        session_id: sessionId.current,
        country,
        city,
        duration_seconds: 0,
      });
    } catch (err) {
      console.error("Analytics tracking error:", err);
    }
  };

  const updateDuration = async () => {
    const duration = Math.round((Date.now() - startTime.current) / 1000);
    if (duration > 0) {
      try {
        // Update the most recent page view for this session/path
        await supabase
          .from("page_views")
          .update({ duration_seconds: duration })
          .eq("session_id", sessionId.current)
          .eq("page_path", currentPath.current)
          .order("created_at", { ascending: false })
          .limit(1);
      } catch {
        // Silent fail
      }
    }
  };

  useEffect(() => {
    // Don't track admin pages
    if (location.pathname.startsWith("/admin")) return;

    // Update duration for previous page
    if (currentPath.current !== location.pathname) {
      updateDuration();
    }

    currentPath.current = location.pathname;
    startTime.current = Date.now();
    trackPageView(location.pathname);

    // Update duration on page unload
    const handleUnload = () => updateDuration();
    window.addEventListener("beforeunload", handleUnload);

    return () => {
      window.removeEventListener("beforeunload", handleUnload);
      updateDuration();
    };
  }, [location.pathname]);

  return null;
};

export default PageTracker;
