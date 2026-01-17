'use client';
import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import gsap from 'gsap';

export default function TransitionOverlay() {
  const pathname = usePathname();
  const containerRef = useRef(null);

  useEffect(() => {
    const panels = containerRef.current?.querySelectorAll('.panel');
    if (!panels) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      
      tl.fromTo(
        panels,
        { scaleY: 0, transformOrigin: 'top' },
        { 
          scaleY: 1, 
          duration: 0.5, 
          ease: 'power3.inOut',
          stagger: 0.05
        }
      )
      .to(panels, {
        scaleY: 0,
        transformOrigin: 'bottom',
        duration: 0.5,
        ease: 'power3.inOut',
        stagger: 0.05
      });
    });

    return () => ctx.revert();
  }, [pathname]);

  return (
    <div ref={containerRef} className="fixed inset-0 z-50 pointer-events-none flex">
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          className="panel flex-1 bg-[#29367D]"
          style={{ transform: 'scaleY(0)' }}
        />
      ))}
    </div>
  );
}