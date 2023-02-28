import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {

  constructor() { }

  scrollToElement(element: HTMLElement | null) {
    if(!element) return;
    element.scrollIntoView({behavior: "smooth", block: "start"});
  }

  scrollToTarget(target: HTMLElement, duration: number = 1000) {
    const targetPosition = target.offsetTop;
    const targetHeight = target.offsetHeight;
    const windowHeight = window.innerHeight;
    const offset = (windowHeight - targetHeight) / 2;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - offset - startPosition;
    const startTime = performance.now();
    
    const animation = (currentTime: number) => {
      const timeElapsed = currentTime - startTime;
      const run = this.ease(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      }
    };
    requestAnimationFrame(animation);
  }

  ease(t: number, b: number, c: number, d: number): number {
    t /= d / 2;
    if (t < 1) {
      return c / 2 * t * t + b;
    }
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
  }
}
