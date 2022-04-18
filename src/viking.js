// Soldier
class Soldier {
  constructor(healthParam, strengthParam ) {
    this.health = healthParam;
    this.strength = strengthParam;
  }
  attack() {
    return this.strength;
  }
  receiveDamage(damageParam) {
    this.health -= damageParam;
  }
};
// Viking
class Viking extends Soldier {
  constructor( nameParam, healthParam, strengthParam ) {
    super(healthParam, strengthParam)
    this.name = nameParam;
  }
    receiveDamage(damageParam) {
      this.health -= damageParam;
      if ( this.health > 0 ) {
        return `${this.name} has received ${damageParam} points of damage`;
      } else {
        return `${this.name} has died in act of combat`;
      }
    }
    battleCry() {
      return `Odin Owns You All!`;
    }
}

// Saxon
class Saxon extends Soldier  {
 
  receiveDamage(damageParam) {
    this.health -= damageParam;
    if ( this.health > 0 ) {
      return `A Saxon has received ${damageParam} points of damage`;
    } else {
      return `A Saxon has died in combat`;
    }
  }

}

// War
class War extends Soldier {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  };
  addViking(vikingObj) {
    this.vikingArmy.push(vikingObj);
  }
  addSaxon(saxonObj) {
    this.saxonArmy.push(saxonObj);
  };
  vikingAttack() {
    // Convertimos en numeros enteros y randoms cada soldado
    let vikingRandom = Math.floor(Math.random() * this.vikingArmy.length);
    let saxonRandom = Math.floor(Math.random() * this.saxonArmy.length);

    // lucha, soldado random pierde salud(health) por fuerza (strength)
    let fight = saxonRandom.receiveDamage(vikingRandom.strength);
    
    // Condición para eliminar Saxon
    if ( saxonRandom.health <= 0 ) {
      saxonArmy.splice(saxonRandomWar, 1)
    };
  
  return fight;

  }


  receiveDamage(damageParam) {
      this.health -= damageParam;
  }
  saxonAttack() {

  }
  showStatus() {

  }
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
