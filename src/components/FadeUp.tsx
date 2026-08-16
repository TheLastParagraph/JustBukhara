"use client";

import { useEffect, useRef, useState } from "react";

interface FadeUpProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

let observer: IntersectionObserver | null = null;
const callbacks = new Map<Element, () => void>();

function getObserver() {
  if (typeof window === "undefined") return null;
  if (!observer) {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const callback = callbacks.get(entry.target);
            if (callback) {
              callback();
              callbacks.delete(entry.target);
              observer!.unobserve(entry.target);
            }
          }
        });
      },
      { rootMargin: "0px", threshold: 0.15 }
    );
  }
  return observer;
}

export default function FadeUp({ children, className = "", delay = 0 }: FadeUpProps) {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentRef = domRef.current;
    if (!currentRef) return;

    const obs = getObserver();
    if (obs) {
      callbacks.set(currentRef, () => setIsVisible(true));
      obs.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        callbacks.delete(currentRef);
        if (obs) obs.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div
      ref={domRef}
      className={`transition-all duration-1000 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
