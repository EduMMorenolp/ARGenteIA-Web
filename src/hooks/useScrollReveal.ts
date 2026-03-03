import { useEffect } from 'react';
import { useRole } from '../context/RoleContext';

export function useScrollReveal() {
  const { role } = useRole();

  useEffect(() => {
    // Small delay to ensure DOM has updated after role change
    const timeout = setTimeout(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible');
            }
          });
        },
        { threshold: 0.05, rootMargin: '0px 0px -20px 0px' }
      );

      const elements = document.querySelectorAll('.reveal');
      elements.forEach((el) => observer.observe(el));

      return () => observer.disconnect();
    }, 100);

    return () => clearTimeout(timeout);
  }, [role]);
}
