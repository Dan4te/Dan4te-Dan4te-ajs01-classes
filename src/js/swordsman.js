import Character from './character.js';

export default class Swordsman extends Character {
    constructor(name, type) {
      super(name, type);
      this.attack = 40;
      this.defence = 10;
    }
}
