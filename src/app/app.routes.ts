import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { CoachesComponent } from './pages/coaches/coaches.component';
import { ProgramsComponent } from './pages/programs/programs.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { MatchesComponent } from './pages/matches/matches.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'YL Cricket Academy | Train. Compete. Excel.' },
  { path: 'about', component: AboutComponent, title: 'About Us | YL Cricket Academy' },
  { path: 'coaches', component: CoachesComponent, title: 'Our Coaches | YL Cricket Academy' },
  { path: 'programs', component: ProgramsComponent, title: 'Training Programs | YL Cricket Academy' },
  { path: 'gallery', component: GalleryComponent, title: 'Gallery | YL Cricket Academy' },
  { path: 'matches', component: MatchesComponent, title: 'Matches & Tours | YL Cricket Academy' },
  { path: 'contact', component: ContactComponent, title: 'Contact Us | YL Cricket Academy' },
  { path: '**', redirectTo: '' },
];
