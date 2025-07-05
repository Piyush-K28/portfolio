import React, { useState, useEffect, useRef } from "react";

function ScrollProgress() {
  const [scroll, setScroll] = useState(0);
  const [visible, setVisible] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const doc = document.documentElement;
      const scrollTop = window.pageYOffset || doc.scrollTop;
      const height = doc.scrollHeight - doc.clientHeight;
      const scrolled = height ? (scrollTop / height) * 100 : 0;
      setScroll(scrolled);
      setVisible(true);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => {
        setVisible(false);
      }, 1000);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        width: "100%",
        height: "4px",
        background: "rgba(0, 0, 0, 0.1)",
        opacity: visible ? 1 : 0,
        transition: "opacity 0.3s ease, width 0.25s ease-out",
        zIndex: 9999,
      }}
    >
      <div
        style={{
          width: `${scroll}%`,
          height: "100%",
          background: "#000",
          transition: "width 0.25s ease-out",
        }}
      />
    </div>
  );
}

export default ScrollProgress;