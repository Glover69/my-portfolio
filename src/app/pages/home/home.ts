import { Component } from '@angular/core';
import { gsap } from 'gsap';
import { SplitText } from 'gsap/SplitText';
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin';

gsap.registerPlugin(SplitText);
gsap.registerPlugin(DrawSVGPlugin)

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

  constructor() {

  }

  ngOnInit() {
    this.drawDiamondSVG()
    this.lineAnimation()
    gsap.set('.second-text, .second-coming', { opacity: 0 });
    const split = new SplitText('.first-text', { type: 'words,chars' });
    console.log(split.chars);

    gsap.fromTo(split.chars, {
      y: 50,
      opacity: 0,
    }, {
      y: 0,
      opacity: 1,
      duration: 3,
      ease: 'elastic.inOut(1.5, 0.3)',
      stagger: 0.05,
      onComplete: () => {
        this.surnameAnimation();
        this.secondComingAnimation()
      }
    })
  }


  surnameAnimation(){
    const split = new SplitText('.second-text', { type: 'words,chars' });
    gsap.set('.second-text, .second-coming', { opacity: 1 });
    gsap.fromTo(split.chars, {
      x: -50,
      opacity: 0,
    }, {
      x: 0,
      opacity: 1,
      duration: 1,
      ease: 'power2.out',
    })
  }

  drawDiamondSVG(){
    //draws all elements with the "draw-me" class applied with staggered start times 0.1 seconds apart
    gsap.from(".path1, .path2, .path3", {
      duration: 1,
      stagger: 0.1,
      drawSVG: 0,
      repeat: -1,
    });
  }

  secondComingAnimation(){
    const object = document.querySelectorAll('.second-coming');
    gsap.fromTo(object[0], {
      y: -20,
      opacity: 0,
    }, {
      y: 0,
      duration: 1,
      opacity: 1,
      ease: 'power2.out',
    })

    gsap.fromTo(object[1], {
      y: 20,
      opacity: 0,
    }, {
      y: 0,
      duration: 1,
      opacity: 1,
      ease: 'power2.out',
    })

    gsap.fromTo(object[2], {
      y: 20,
      opacity: 0,
    }, {
      y: 0,
      duration: 1,
      opacity: 1,
      ease: 'power2.out',
    })
  }


  lineAnimation() {
    gsap.fromTo('.lineOne', {
      drawSVG: '0% 30%'
    }, {
      drawSVG: '70% 100%',
      duration: 2,
      ease: 'power2.inOut',
      repeat: -1,
      yoyo: true
    });
  }
}
