import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faAngular, faReact, faHtml5, faCss3, faBootstrap, faJs, faGit, faMicrosoft} from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule,FontAwesomeModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  faAngular = faAngular;
  faReact = faReact;
  faHtml5 = faHtml5;
  faCss3 = faCss3;
  faBootstrap = faBootstrap;
  faJs = faJs;
  faGit = faGit;
  faMicrosoft = faMicrosoft;
  faDatabase = faDatabase; // Representing .NET (as there's no direct FontAwesome icon)

  skills = [
    { icon: this.faAngular, name: 'Angular', description: 'Proficient in building dynamic and responsive web applications using Angular.' },
    { icon: this.faReact, name: 'React', description: 'Familiar in developing user interfaces with React and Redux.' },
    { icon: this.faHtml5, name: 'HTML5', description: 'Expert in modern HTML5 techniques and semantic web development.' },
    { icon: this.faCss3, name: 'CSS3', description: 'Experienced in styling modern web applications using CSS3, animations, and layouts.' },
    { icon: this.faBootstrap, name: 'Bootstrap', description: 'Proficient in using Bootstrap for responsive and mobile-first web design.' },
    { icon: this.faJs, name: 'JavaScript', description: 'Strong understanding of JavaScript, ES6+, and modern frameworks.' },
    { icon: this.faGit, name: 'Git', description: 'Version control expertise using Git and GitHub for efficient project management.' },
    { icon: this.faDatabase, name: '.NET', description: 'Experience in backend development using .NET and C# for enterprise applications.' },
    { icon: this.faGit, name: 'CI/CD', description: 'Familiar with continuous integration and deployment pipelines.' },
    { icon: this.faAngular, name: 'RxJS', description: 'Proficient in reactive programming with RxJS and state management in Angular.' },
    { icon: this.faJs, name: 'TypeScript', description: 'Experienced in TypeScript for scalable and maintainable web applications.' },
    { icon: this.faAngular, name: 'Angular Material', description: 'Expert in using Angular Material for modern UI/UX components.' },
    { icon: this.faCss3, name: 'Tailwind CSS', description: 'Skilled in using Tailwind CSS for rapid UI development and customization.' },
  ];

  progressBars = [
    { name: 'Web Development', value: 90 },
    { name: 'UI/UX Design', value: 80 },
    { name: 'JavaScript', value: 95 },
    { name: 'Database Management', value: 85 }
  ];

}
