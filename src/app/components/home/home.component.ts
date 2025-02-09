import { Component } from '@angular/core';
import { ClickMode, HoverMode, Container, Engine } from 'tsparticles-engine';
import { loadSlim } from "tsparticles-slim"; // if you are going to use `loadSlim`, install the "tsparticles-slim" package too
import { NgParticlesModule } from "ng-particles";
import { MoveDirection, OutMode } from "tsparticles-engine";  // ✅ Import OutMode
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgParticlesModule,RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  id = "tsparticles";

  particlesOptions = {
    background: {
      color: {
        value: "#0d47a1"
      }
    },
    fpsLimit: 60,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: "push"
        },
        onHover: {
          enable: true,
          mode: "repulse"
        },
        resize: true
      },
      modes: {
        bubble: {
          distance: 400,
          duration: 2,
          opacity: 0.8,
          size: 40
        },
        push: {
          quantity: 4
        },
        repulse: {
          distance: 200,
          duration: 0.4
        }
      }
    },
    particles: {
      color: {
        value: "#ffffff"
      },
      links: {
        color: "#ffffff",
        distance: 150,
        enable: true,
        opacity: 0.5,
        width: 1
      },
      collisions: {
        enable: true
      },
      move: {
        direction: MoveDirection.none,
        enable: true,
        outMode: OutMode.bounce,  // ✅ Use OutMode.bounce instead of "bounce"
        random: false,
        speed: 6,
        straight: false
      },
      number: {
        density: {
          enable: true,
          area: 800
        },
        value: 80
      },
      opacity: {
        value: 0.5
      },
      shape: {
        type: "circle"
      },
      size: {
        random: true,
        value: 5
      }
    },
    detectRetina: true
  };

  particlesLoaded(container: Container): void {
  }

  async particlesInit(engine: Engine): Promise<void> {
    // Starting from 1.19.0 you can add custom presets or shape here, using the current tsParticles instance (main)
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    //await loadFull(engine);
    await loadSlim(engine);
  }

}
