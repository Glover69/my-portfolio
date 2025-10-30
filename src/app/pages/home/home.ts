import { Component } from '@angular/core';
import { gsap } from 'gsap';
import { SplitText } from 'gsap/SplitText';
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin';
import {Projects} from '../../components/about/projects';
import {Hero} from '../../components/hero/hero';
import {Bio} from '../../components/bio/bio';

gsap.registerPlugin(SplitText);
gsap.registerPlugin(DrawSVGPlugin)

@Component({
  selector: 'app-home',
  imports: [
    Hero,
    Projects,
    Bio
  ],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {


}
