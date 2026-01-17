'use client';
import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import gsap from 'gsap';

export default function PageTransition({ children }) {
  const pathname = usePathname();
  const transitionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        transitionRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out', delay: 0.6 }
      );
    });

    return () => ctx.revert();
  }, [pathname]);

  return (
    <div ref={transitionRef} style={{ opacity: 0 }}>
      {children}
    </div>
  );
}