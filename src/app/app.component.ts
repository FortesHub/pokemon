import { MonsterService } from './services/monster/monster.service';
import { Component, computed, effect, inject, model, signal } from '@angular/core';
import { PlayingCardsComponent } from './components/playing-cards/playing-cards.component';
import { Monster } from './models/monster.model';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { MonsterType } from './utils/monster.utils';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent { }
