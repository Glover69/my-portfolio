import {AfterViewInit, Component} from '@angular/core';
import {gsap} from 'gsap';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects implements AfterViewInit {

  ngAfterViewInit() {
    const blueStroke = document.querySelector('.lineTwo') as SVGLineElement;
    const container = document.querySelector('.line-container'); // or whatever contains your line

    // Set initial state
    gsap.set(blueStroke, { drawSVG: '0% 30%' });

    // Create timeline (paused initially)
    const tl = gsap.timeline({ paused: true });

    tl.to(blueStroke, {
      drawSVG: '70% 100%',
      duration: 0.6,
      ease: 'power2.out'
    });

    // Hover events
    container?.addEventListener('mouseenter', () => {
      tl.play();
    });

    container?.addEventListener('mouseleave', () => {
      tl.reverse();
    });
  }
}
