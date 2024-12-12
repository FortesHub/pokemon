import { Injectable } from '@angular/core';
import { Monster } from '../../models/monster.model';
import { MonsterType } from '../../utils/monster.utils';

@Injectable({
  providedIn: 'root'
})
export class MonsterService {
  monsters: Monster[] = [];
  currentId: number = 5;

  constructor() {
     this.load();
    }
  private save() {
    localStorage.setItem('monsters', JSON.stringify(this.monsters));
  }

  private load() {
    const monsterData = localStorage.getItem('monsters');
    if (monsterData) {
      this.monsters = JSON.parse(monsterData).map(
        (monsterJSON: any) => Object.assign(new Monster(), monsterJSON));
        if(this.monsters.length > 0){
          this.currentId = Math.max(...this.monsters.map(monster => monster.id))+1;
        } else{
          this.currentId = 5;
        }
    } else {
      this.init();
      this.save();
    }
  }

  private init() {

    this.monsters = [];

    const monster1 = new Monster();
    monster1.id = 1;
    monster1.name = "Pikachu";
    monster1.type = MonsterType.ELETRIC;
    monster1.image = "assets/img/pikachu.jpg";
    monster1.hp = 40;
    monster1.figureCaption = "N°001 Pik";
    this.monsters.push(monster1);

    const monster2 = new Monster();
    monster2.id = 2;
    monster2.name = "Bulbasaur";
    monster2.type = MonsterType.WATER;
    monster2.image = "assets/img/bulbasaur.jpg";
    monster2.hp = 40;
    monster2.figureCaption = "N°002 Bulb";
    this.monsters.push(monster2);

    const monster3 = new Monster();
    monster3.id = 3;
    monster3.name = "Charizard";
    monster3.type = MonsterType.FIRE;
    monster3.image = "assets/img/charizard.jpg";
    monster3.hp = 40;
    monster3.figureCaption = "N°003 Cha";
    this.monsters.push(monster3);

    const monster4 = new Monster();
    monster4.id = 4;
    monster4.name = "Squirtle";
    monster4.type = MonsterType.PLANT;
    monster4.image = "assets/img/squirtle.jpg";
    monster4.hp = 40;
    monster4.figureCaption = "N°004 SQui";
    this.monsters.push(monster4);

    this.currentId = 5;
  }


  // Função para resetar para os monstros padrão
  resetMonsters(): void {
    localStorage.removeItem('monsters')
    // this.currentId = 5; // Reinicia o currentId para garantir que o próximo monstro tenha o ID correto.
    this.init(); // Reseta para os 4 monstros padrão
    this.save(); // Salva no localStorage
  }

  getAll(): Monster[] {
    return this.monsters.map(monster => monster.copy());
  }

  get(id: number): Monster | undefined {
    const monster = this.monsters.find(monster => monster.id === id);
    return monster? monster.copy() : undefined;
  }
  add(monster: Monster): Monster {
    const monsterCopy = monster.copy();

    monsterCopy.id = this.currentId++;
    this.monsters.push(monsterCopy);
    this.save();

    return monsterCopy;
  }

  update(monster: Monster): Monster {
    const monsterCopy = monster.copy();
    const monsterIndex = this.monsters.findIndex(
      originalMonster => originalMonster.id === monsterCopy.id
    );
    if (monsterIndex !== -1) {
      this.monsters[monsterIndex] = monsterCopy.copy();
      this.save();
    }
   
    return monsterCopy;
  }

  delete(id: number) {
    const monsterIndex = this.monsters.findIndex(
      originalMonster => originalMonster.id === id
    );
    if (monsterIndex !== -1) {
      this.monsters.splice(monsterIndex, 1);
      this.save();
    }
   
  }

}
