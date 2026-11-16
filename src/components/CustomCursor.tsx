
import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const moveCursor = (e: PointerEvent) => {
      const { clientX, clientY } = e;

      if (dotRef.current) {
        dotRef.current.style.transform =
          `translate3d(${clientX}px, ${clientY}px, 0) translate(-50%, -50%)`;
      }

      if (ringRef.current) {
        ringRef.current.style.transform =
          `translate3d(${clientX}px, ${clientY}px, 0) translate(-50%, -50%)`;
      }
    };

    const handleHover = (e: PointerEvent) => {
      const target = e.target as HTMLElement;

      const isClickable = target.closest(
        "a, button, [role='button'], input, textarea, select"
      );

      ringRef.current?.classList.toggle(
        "cursor-hover",
        Boolean(isClickable)
      );
    };

    document.addEventListener("pointermove", moveCursor);
    document.addEventListener("pointerover", handleHover);

    return () => {
      document.removeEventListener("pointermove", moveCursor);
      document.removeEventListener("pointerover", handleHover);
    };
  }, []);

  return (
    <>
      <div ref={ringRef} className="custom-cursor-ring" />
      <div ref={dotRef} className="custom-cursor-dot" />
    </>
  );
}
