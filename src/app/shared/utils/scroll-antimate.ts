export function registerScrollAnimations(containerSelector: string, contextElement: HTMLElement): void {
  const container = document.querySelector(containerSelector);

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('aos-animate');
        }
      });
    },
    {
      root: container,
      threshold: 0.1
    }
  );

  const targets = contextElement.querySelectorAll('[data-aos]');
  targets.forEach((el: Element) => observer.observe(el));
}
