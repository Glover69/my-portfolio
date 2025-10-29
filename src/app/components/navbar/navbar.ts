import { Component } from '@angular/core';
import { gsap } from 'gsap';
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin';

gsap.registerPlugin(DrawSVGPlugin)

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {

  ngOnInit() {
    this.drawDiamondSVG()
  }


  drawDiamondSVG(){
    //draws all elements with the "draw-me" class applied with staggered start times 0.1 seconds apart
    gsap.from(".firstPath", {
      duration: 5,
      stagger: 0.5,
      drawSVG: 0,
      repeat: -1,
    });
  }

}
