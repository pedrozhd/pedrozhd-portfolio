"use client";

import { useRef, useEffect, useCallback } from "react";

interface PhotoTiltProps {
  children: React.ReactNode;
  className?: string;
}

export default function PhotoTilt({ children, className = "" }: PhotoTiltProps) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const animRef = useRef<number>(0);
  const isHoveredRef = useRef(false);
  const rotRef = useRef({ x: 4, y: 7, z: 0.8 });
  const speedRef = useRef({ x: 0.06, y: 0.09, z: 0.015 });

  const sway = useCallback(() => {
    const el = innerRef.current;
    if (!el || isHoveredRef.current) return;

    rotRef.current.x += speedRef.current.x;
    rotRef.current.y += speedRef.current.y;
    rotRef.current.z += speedRef.current.z;

    if (Math.abs(rotRef.current.x) > 6) speedRef.current.x *= -1;
    if (Math.abs(rotRef.current.y) > 8) speedRef.current.y *= -1;
    if (Math.abs(rotRef.current.z) > 1.5) speedRef.current.z *= -1;

    el.style.transform = `rotateX(${rotRef.current.x}deg) rotateY(${rotRef.current.y}deg) rotateZ(${rotRef.current.z}deg)`;
    animRef.current = requestAnimationFrame(sway);
  }, []);

  useEffect(() => {
    const wrap = wrapRef.current;
    const inner = innerRef.current;
    if (!wrap || !inner) return;

    // Always start the sway — skip mouse tracking on touch devices
    animRef.current = requestAnimationFrame(sway);

    if (window.matchMedia("(pointer: coarse)").matches) {
      return () => cancelAnimationFrame(animRef.current);
    }

    const onMove = (e: MouseEvent) => {
      const rect = inner.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const ax = ((e.clientY - cy) / (rect.height / 2)) * 16;
      const ay = (-(e.clientX - cx) / (rect.width / 2)) * 16;
      const pctX = ((e.clientX - rect.left) / rect.width) * 100;
      const pctY = ((e.clientY - rect.top) / rect.height) * 100;

      inner.style.transform = `rotateX(${ax}deg) rotateY(${ay}deg)`;
      wrap.style.setProperty("--shine-x", `${pctX}%`);
      wrap.style.setProperty("--shine-y", `${pctY}%`);
    };

    const onEnter = () => {
      isHoveredRef.current = true;
      cancelAnimationFrame(animRef.current);
      inner.style.transition = "transform 0.1s ease-out";
    };

    const onLeave = () => {
      isHoveredRef.current = false;
      inner.style.transition = "transform 0.6s ease-out";
      inner.style.transform = "rotateX(0deg) rotateY(0deg)";
      wrap.style.setProperty("--shine-x", "50%");
      wrap.style.setProperty("--shine-y", "50%");
      setTimeout(() => {
        inner.style.transition = "";
        animRef.current = requestAnimationFrame(sway);
      }, 620);
    };

    wrap.addEventListener("mouseenter", onEnter);
    wrap.addEventListener("mousemove", onMove);
    wrap.addEventListener("mouseleave", onLeave);

    return () => {
      cancelAnimationFrame(animRef.current);
      wrap.removeEventListener("mouseenter", onEnter);
      wrap.removeEventListener("mousemove", onMove);
      wrap.removeEventListener("mouseleave", onLeave);
    };
  }, [sway]);

  return (
    <div
      ref={wrapRef}
      className={`photo-tilt-wrap ${className}`}
      style={{ ["--shine-x" as string]: "50%", ["--shine-y" as string]: "50%" }}
    >
      <div ref={innerRef} className="photo-tilt-inner">
        {children}
        <div className="photo-tilt-shine" aria-hidden="true" />
      </div>
    </div>
  );
}
