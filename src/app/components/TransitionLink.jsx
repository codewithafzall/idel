'use client';
import { useRouter } from 'next/navigation';

export default function TransitionLink({ href, children, className, onClick, ...props }) {
  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault();
    
    // Call any passed onClick handler first
    if (onClick) {
      onClick(e);
    }
    
    // Delay matches the overlay animation duration
    setTimeout(() => {
      router.push(href);
    }, 600);
  };

  return (
    <a href={href} onClick={handleClick} className={className} {...props}>
      {children}
    </a>
  );
}