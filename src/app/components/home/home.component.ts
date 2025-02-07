import { Component } from '@angular/core';
import { ThreeParticlesComponent } from '../Animations/three-particles.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ThreeParticlesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
