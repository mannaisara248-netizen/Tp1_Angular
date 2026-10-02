import { Component, signal } from '@angular/core';
import { EnTete } from './composants/en-tete/en-tete';
import { ListeCoursComponent, Cours } from './composants/liste-cours/liste-cours';
import {DetailCoursComponent} from './composants/detail-cours/detail-cours';
import {PiedPage} from './composants/pied-page/pied-page';
@Component({
  imports:  [EnTete, ListeCoursComponent, DetailCoursComponent, PiedPage],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  coursSelectionne: Cours | null = null; 
  
  onSelectionCours(c: Cours) { 
    this.coursSelectionne = c; 
}
}
