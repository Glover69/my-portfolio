import {AfterViewInit, Component} from '@angular/core';
import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(SplitText);
gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-bio',
  imports: [],
  templateUrl: './bio.html',
  styleUrl: './bio.css',
})
export class Bio implements AfterViewInit {


  ngAfterViewInit() {
    const split = new SplitText('.scroll-text', { type: 'words,chars' });

    gsap.fromTo(split.chars, {
      color: '#DADADA', // Starting color (gray)
    }, {
      color: '#2563EB', // Ending color (blue)
      duration: 0.5,
      stagger: 0.1, // Animate each character one by one
      scrollTrigger: {
        trigger: '.scroll-text',
        start: 'top 80%', // When top of text hits 80% of viewport
        end: 'bottom 20%', // When bottom of text hits 20% of viewport
        scrub: 1, // Smooth scrubbing animation tied to scroll
        // markers: true // Remove this after testing
      }
    });
  }

}
