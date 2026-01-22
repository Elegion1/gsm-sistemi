"use client";

import { useEffect } from "react";

export default function PlerdyScript() {
  useEffect(() => {
    const old = document.querySelector(
      "[data-plerdymainscript='plerdymainscript']",
    );
    old?.remove();

    const script = document.createElement("script");
    script.src = "https://example.plerdy.com/script.js";
    script.async = true;
    script.dataset.plerdymainscript = "plerdymainscript";

    document.head.appendChild(script);

    return () => script.remove();
  }, []);

  return null;
}
