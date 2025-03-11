
export function setupScrollAnimations() {
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const handleIntersect = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in-element');
        observer.unobserve(entry.target);
      }
    });
  };

  const observer = new IntersectionObserver(handleIntersect, observerOptions);
  
  const animateElements = document.querySelectorAll('.animate-on-scroll');
  animateElements.forEach(element => {
    observer.observe(element);
  });

  return () => {
    animateElements.forEach(element => {
      observer.unobserve(element);
    });
  };
}
