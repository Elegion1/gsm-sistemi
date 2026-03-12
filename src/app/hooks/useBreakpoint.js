import { useEffect, useState } from "react";

const getBreakpointForWidth = (width) => {
  if (width < 576) return "mobile";
  if (width < 992) return "tablet";
  return "desktop";
};

export default function useBreakpoint() {
  const [breakpoint, setBreakpoint] = useState(() => {
    if (typeof window === "undefined") return "desktop";
    return getBreakpointForWidth(window.innerWidth);
  });

  useEffect(() => {
    const handleResize = () => setBreakpoint(getBreakpointForWidth(window.innerWidth));

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return breakpoint;
}
