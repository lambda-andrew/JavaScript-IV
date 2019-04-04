/*

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/

class GameObject {
  constructor(param) {
    this.createdAt = param.createdAt
    this.name = param.name
    this.dimensions = param.dimensions
  }

  destroy() {
    return `${this.name} was removed from the game.`
  }
}


class CharacterStats extends GameObject {
  constructor(param) {
    super(param)
    this.healthPoints = param.healthPoints
  }

  takeDamage() {
    return `${this.name} took damage.`
  }
}


class Humanoid extends CharacterStats {
  constructor(param) {
    super(param)
    this.team = param.team
    this.weapons = param.weapons
    this.language = param.language
  }

  greet() {
    return `${this.name} offers a greeting in ${this.language}.`
  }
}


const mage = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 1,
    height: 1,
  },
  healthPoints: 5,
  name: 'Bruce',
  team: 'Mage Guild',
  weapons: [
    'Staff of Shamalama',
  ],
  language: 'Common Tongue',
})

const swordsman = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 2,
    height: 2,
  },
  healthPoints: 15,
  name: 'Sir Mustachio',
  team: 'The Round Table',
  weapons: [
    'Giant Sword',
    'Shield',
  ],
  language: 'Common Tongue',
})

const archer = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 1,
    width: 2,
    height: 4,
  },
  healthPoints: 10,
  name: 'Lilith',
  team: 'Forest Kingdom',
  weapons: [
    'Bow',
    'Dagger',
  ],
  language: 'Elvish',
})

console.log(mage.createdAt) // Today's date
console.log(archer.dimensions) // { length: 1, width: 2, height: 4 }
console.log(swordsman.healthPoints) // 15
console.log(mage.name) // Bruce
console.log(swordsman.team) // The Round Table
console.log(mage.weapons) // Staff of Shamalama
console.log(archer.language) // Elvish
console.log(archer.greet()) // Lilith offers a greeting in Elvish.
console.log(mage.takeDamage()) // Bruce took damage.
console.log(swordsman.destroy()) // Sir Mustachio was removed from the game.


class Villain extends Humanoid {
  constructor(param) {
    super(param)
  }

  attack(hero, dmg = 0) {
    hero.healthPoints -= dmg
  }
}

class Hero extends Humanoid {
  constructor(param) {
    super(param)
  }

  attack(villian, dmg = 0) {
    villian.healthPoints -= dmg
  }

  heal() {
    this.healthPoints += this.healthPoints / 3
    this.healthPoints > 10 ? this.healthPoints = 10 : null
  }
}


const balrog = new Villain({
  createdAt: new Date(),
  dimensions: {
    length: 1,
    width: 2,
    height: 4,
  },
  healthPoints: 100,
  name: 'Balrog',
  team: 'N/A',
  weapons: [
    'Black axe',
    'Whip',
  ],
  language: 'Unknown',
})

const gandalf = new Hero({
  createdAt: new Date(),
  dimensions: {
    length: 1,
    width: 2,
    height: 4,
  },
  healthPoints: 10,
  name: 'Gandalf',
  team: 'Middle-Earth',
  weapons: [
    'Staff'
  ],
  language: 'All',
})

console.log("")

balrog.attack(gandalf, 4)
console.log(`${balrog.name} attacks ${gandalf.name} for 4`)
gandalf.heal()
console.log(`${gandalf.name} heals to ${gandalf.healthPoints}`)
gandalf.attack(balrog, 100)
console.log(`${gandalf.name} attacks ${balrog.name} for 100`)
console.log(`${gandalf.name} WINS!`)
