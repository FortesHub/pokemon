import { Component, computed, inject, model, signal } from '@angular/core';
import { MonsterService } from '../../services/monster/monster.service';
import { Monster } from '../../models/monster.model';
import { SearchBarComponent } from '../../components/search-bar/search-bar.component';
import { PlayingCardsComponent } from '../../components/playing-cards/playing-cards.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-monster-list',
  standalone: true,
  imports: [CommonModule, SearchBarComponent, PlayingCardsComponent],
  templateUrl: './monster-list.component.html',
  styleUrl: './monster-list.component.css'
})
export class MonsterListComponent {
  monsterService = inject(MonsterService);
  monsters = signal<Monster[]>([]);
  search = model('');

  filteredMonsters = computed(() => {
    return this.monsters().filter(monster => monster.name.includes(this.search()));
  })

  constructor() {
    this.monsters.set(this.monsterService.getAll());
  }
addMonster(){
  const genericMonster = new Monster();
  this.monsterService.add(genericMonster);
  this.monsters.set(this.monsterService.getAll());
}

  // Função para resetar a lista de monstros para os 4 padrão
  resetMonsters() {
    this.monsterService.resetMonsters(); // Chama o reset no serviço
    this.monsters.set(this.monsterService.getAll()); // Atualiza a lista de monstros
  }
  trackMonster(index: number, monster: Monster): number {
    return monster.id; // Aqui você retorna o id único de cada monstro
  }
}
