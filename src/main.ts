import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { importProvidersFrom } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { routes } from './app/app.routes'; // Ensure you have this file
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
bootstrapApplication(AppComponent, {
  ...appConfig,
  providers: [
    provideAnimations(),
    importProvidersFrom(FontAwesomeModule),
    provideRouter(routes, withComponentInputBinding()) // ✅ Provide RouterModule
  ],
}).catch((err) => console.error(err));
