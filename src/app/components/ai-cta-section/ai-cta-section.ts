import { Component } from '@angular/core';

@Component({
  selector: 'app-ai-cta-section',
  imports: [],
  templateUrl: './ai-cta-section.html',
  styleUrl: './ai-cta-section.scss'
})
export class AiCtaSection {
  ngOnInit() {
    const particles = document.querySelectorAll('.particle');
    particles.forEach((p: any) => {
      const xStart = Math.random() * window.innerWidth;
      const yStart = Math.random() * window.innerHeight;
      const xEnd = xStart + (Math.random() * 100 - 50);
      const yEnd = yStart + (Math.random() * 80 - 40);
      const delay = Math.random() * 5;

      p.style.setProperty('--x-start', `${xStart}px`);
      p.style.setProperty('--y-start', `${yStart}px`);
      p.style.setProperty('--x-end', `${xEnd}px`);
      p.style.setProperty('--y-end', `${yEnd}px`);
      p.style.animationDelay = `${delay}s`;
    });
  }
}
