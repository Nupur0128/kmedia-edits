import { useEffect, useRef } from "react";

function isDarkBackground(target: HTMLElement | null): boolean {
  if (!target) return false;

  let el: HTMLElement | null = target;
  let depth = 0;

  while (el && el !== document.documentElement && depth < 10) {
    depth++;

    // 1. Direct class check for dark, red, or dark gradient background classes
    const className =
      typeof el.className === "string"
        ? el.className
        : (el.className as unknown as { baseVal?: string })?.baseVal || "";

    if (
      /(bg-brand-black|bg-black|bg-brand-red|from-black|to-black|dark-bg|bg-\[#1|bg-\[#0|bg-\[#2|bg-zinc-9|bg-neutral-9|bg-gray-9)/i.test(
        className
      ) ||
      el.getAttribute("data-theme") === "dark" ||
      el.getAttribute("data-bg") === "dark"
    ) {
      return true;
    }

    // 2. Images, video, canvas, iframes in media cards
    if (
      el.tagName === "IMG" ||
      el.tagName === "VIDEO" ||
      el.tagName === "IFRAME"
    ) {
      return true;
    }

    // 3. Elements with explicit white text usually indicate a dark parent/container
    if (
      className.includes("text-white") ||
      className.includes("text-brand-white")
    ) {
      return true;
    }

    // 4. Computed background-color check
    const style = window.getComputedStyle(el);
    const bgColor = style.backgroundColor;

    if (
      bgColor &&
      bgColor !== "transparent" &&
      bgColor !== "rgba(0, 0, 0, 0)"
    ) {
      const numbers = bgColor.match(/[\d.]+/g);
      if (numbers && numbers.length >= 3) {
        const r = parseFloat(numbers[0]);
        const g = parseFloat(numbers[1]);
        const b = parseFloat(numbers[2]);
        const a = numbers.length >= 4 ? parseFloat(numbers[3]) : 1;

        if (a > 0.3) {
          // Relative luminance formula (ITU-R BT.709 / BT.601)
          const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
          // Red backgrounds (e.g. brand-red #E53935) where red cursor vanishes
          const isRed = r > 160 && g < 100 && b < 100;

          if (luminance < 0.45 || isRed) {
            return true;
          }
          if (luminance > 0.6) {
            // Definitively light background
            return false;
          }
        }
      }
    }

    el = el.parentElement;
  }

  return false;
}

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateCursorState = (target: HTMLElement | null) => {
      if (!target) return;

      const isClickable = target.closest(
        "a, button, [role='button'], input, textarea, select"
      );
      ringRef.current?.classList.toggle("cursor-hover", Boolean(isClickable));

      const isDark = isDarkBackground(target);
      dotRef.current?.classList.toggle("cursor-dark", isDark);
      ringRef.current?.classList.toggle("cursor-dark", isDark);
    };

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

      updateCursorState(e.target as HTMLElement);
    };

    const handlePointerOver = (e: PointerEvent) => {
      updateCursorState(e.target as HTMLElement);
    };

    const handlePointerLeave = () => {
      if (dotRef.current) dotRef.current.style.opacity = "0";
      if (ringRef.current) ringRef.current.style.opacity = "0";
    };

    const handlePointerEnter = () => {
      if (dotRef.current) dotRef.current.style.opacity = "1";
      if (ringRef.current) ringRef.current.style.opacity = "1";
    };

    document.addEventListener("pointermove", moveCursor);
    document.addEventListener("pointerover", handlePointerOver);
    document.documentElement.addEventListener("pointerleave", handlePointerLeave);
    document.documentElement.addEventListener("pointerenter", handlePointerEnter);

    return () => {
      document.removeEventListener("pointermove", moveCursor);
      document.removeEventListener("pointerover", handlePointerOver);
      document.documentElement.removeEventListener("pointerleave", handlePointerLeave);
      document.documentElement.removeEventListener("pointerenter", handlePointerEnter);
    };
  }, []);

  return (
    <>
      <div ref={ringRef} className="custom-cursor-ring" />
      <div ref={dotRef} className="custom-cursor-dot" />
    </>
  );
}
