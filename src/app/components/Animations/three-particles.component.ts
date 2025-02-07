import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import * as THREE from 'three';

@Component({
  selector: 'app-three-particles',
  standalone: true,
  template: `<canvas #threeCanvas></canvas>`,
  styles: [`
    :host {
      position: fixed !important;
      top: 0 !important;
      left: 0 !important;
      width: 100vw !important;
      height: 100vh !important;
      z-index: -1 !important;
      overflow: hidden !important;
      display: block !important;
    }
    canvas {
      display: block;
      width: 100vw !important;
      height: 100vh !important;
    }
  `]
})
export class ThreeParticlesComponent implements AfterViewInit {
  @ViewChild('threeCanvas', { static: true }) canvasRef!: ElementRef<HTMLCanvasElement>;
  
  private scene!: THREE.Scene;
  private camera!: THREE.PerspectiveCamera;
  private renderer!: THREE.WebGLRenderer;

  ngAfterViewInit() {
    const canvas = this.canvasRef.nativeElement;

    // Renderer Setup
    this.renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(window.devicePixelRatio);
    
    // Scene and Camera
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    this.camera.position.z = 5;

    // Particle System
    const geometry = new THREE.BufferGeometry();
    const particleCount = 500;
    const positions = new Float32Array(particleCount * 3);
    
    for (let i = 0; i < particleCount * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 10; // Spread particles randomly
    }
    
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    
    const material = new THREE.PointsMaterial({ color: 0xffffff, size: 0.1 });
    const particles = new THREE.Points(geometry, material);
    this.scene.add(particles);

    // Animation Loop
    const animate = () => {
      requestAnimationFrame(animate);
      particles.rotation.y += 0.002;
      this.renderer.render(this.scene, this.camera);
    };
    animate();

    // Handle Resizing
    window.addEventListener('resize', () => {
      this.renderer.setSize(window.innerWidth, window.innerHeight);
      this.camera.aspect = window.innerWidth / window.innerHeight;
      this.camera.updateProjectionMatrix();
    });
  }
}
