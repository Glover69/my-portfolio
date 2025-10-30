import {AfterViewInit, Component, OnInit} from '@angular/core';
import {gsap} from 'gsap';
import * as THREE from 'three';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects implements AfterViewInit, OnInit {
  scene!: THREE.Scene;
  camera!: THREE.PerspectiveCamera
  renderer!: THREE.WebGLRenderer
  geometry!: THREE.BoxGeometry
  cube!: THREE.Mesh
  floor!: THREE.Mesh
  ball!: THREE.Mesh

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

    // THREE.JS
    // this.scene = new THREE.Scene();
    // this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    // this.renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    // this.renderer.setSize(window.innerWidth, window.innerHeight);
    // // this.renderer.setAnimationLoop(() => this.animate() )
    // const threeContainer = document.querySelector('.three-container');
    // threeContainer?.appendChild(this.renderer.domElement);
    //
    // // create floor
    // const floorGeometry = new THREE.PlaneGeometry(10, 10);
    // const floorMaterial = new THREE.MeshBasicMaterial({color: '#1F2937', side: THREE.DoubleSide });
    //
    // this.floor = new THREE.Mesh(floorGeometry, floorMaterial);
    // console.log(this.floor)
    // this.floor.rotation.x = -Math.PI / 2;
    // this.floor.position.y = -2;
    // this.floor.position.x = 0;
    // this.scene.add(this.floor);
    //
    // // this.ball = new THREE.
    //
    // this.geometry = new THREE.BoxGeometry(1, 1, 1);
    // const material = new THREE.MeshPhysicalMaterial({ color: '#2563EB' });
    // this.cube = new THREE.Mesh(this.geometry, material);
    // this.cube.position.y = 5
    // this.scene.add(this.cube);
    //
    // this.camera.position.z = 5;
    //
    // this.renderer.setAnimationLoop(() => this.animate() )
    //
    // this.dropCube()


  }

  ngOnInit() {

  }


  animate(): void {
    this.renderer.render(this.scene, this.camera);
  }

  dropCube(): void {
    gsap.to(this.cube.position, {
      y: -1.5,
      duration: 5,
      ease: 'bounce.out', // This automatically creates multiple bounces
    });
  }


}
