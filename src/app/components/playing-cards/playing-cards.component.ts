import { MonsterType, MonsterTypeProperties } from './../../utils/monster.utils';
import { Component, computed, input, Input, InputSignal, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Monster } from '../../models/monster.model';

@Component({
  selector: 'app-playing-cards',
  standalone: true,
  imports: [],
  templateUrl: './playing-cards.component.html',
  styleUrl: './playing-cards.component.css'
})
export class PlayingCardsComponent  {
  monster = input<Monster>(new Monster());
  monsterTypeIcon = computed(() => {
    return MonsterTypeProperties[this.monster().type].imageUrl;
  });
  backgroundColor = computed(() => {
return MonsterTypeProperties[this.monster().type].color;
  });

}
