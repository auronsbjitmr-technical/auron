"use client";

import { useEffect, useState } from "react";
import Loader from "./Loader";

export default function InitialLoaderWrapper() {
  const [mounted, setMounted] = useState(false);
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
    const hasLoaded = sessionStorage.getItem("auron_session_loaded");
    const isRoot = window.location.pathname === "/" || window.location.pathname === "";
    if (hasLoaded || !isRoot) {
      sessionStorage.setItem("auron_session_loaded", "true");
      setShowLoader(false);
      document.documentElement.classList.remove("global-loading");
    }
  }, []);

  const handleComplete = () => {
    sessionStorage.setItem("auron_session_loaded", "true");
    setShowLoader(false);
    document.documentElement.classList.remove("global-loading");
  };

  if (mounted && !showLoader) return null;

  return <Loader onComplete={handleComplete} />;
}
