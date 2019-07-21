function Fighter(param) {
    let name = param.name;
    let damage = param.damage;
    let hp = param.hp;
    let agility = param.agility;
    let win = 0;
    let lose = 0;

    this.getName = function () {
        return name;
    };
    this.getDamage = function () {
        return damage;
    };
    this.getAgility = function () {
        return agility;
    };
    this.getHealth = function () {
        return hp;
    };
    this.dealDamage = function (d = 0) {
        hp -= d;
    };
    this.heal = function (points = 0) {
        hp += points;
    };
    this.addWin = function () {
        win++;
    };
    this.addLose = function () {
        lose++;
    };
    this.logCombatHistory = function () {
        console.log(`Name ${name}, Wins: ${win}, Losses: ${lose}`)
    };
}

Fighter.prototype.attack = function (anotherFighter) {
    const opponentAgility = anotherFighter.getAgility();
    const hitChance = 100 - opponentAgility;
    const hit = function (_hitChance) {
        let hitting = Math.random() * 100 + 1;
        console.log(_hitChance, hitting);
        return hitting < _hitChance;
    }(hitChance);

    if (hit) {
        this.dealDamage(anotherFighter.getDamage());
        console.log(`${this.getName()} make ${this.getDamage()} damage to ${anotherFighter.getName()}`);
    } else {
        console.log(`${this.getName()} attack missed`);
    }
};

function battle(firstFighter, secondFighter) {
    if (firstFighter.getHealth() <= 0) {
        console.log(`${firstFighter.getName()} is dead and can't fight`);
        return;
    }
    if (secondFighter.getHealth() <= 0) {
        console.log(`${secondFighter.getName()} is dead and can't fight`);
        return;
    }
    while (firstFighter.getHealth() > 0 && secondFighter.getHealth() > 0) {
        let attack = 0;
        if (attack === 0) {
            firstFighter.attack(secondFighter);
            attack = 1;
        }
        if (attack === 1) {
            secondFighter.attack(firstFighter);
            attack = 0;
        }
    }
    if (firstFighter.getHealth() <= 0) {
        firstFighter.addLose();
        secondFighter.addWin();
    } else {
        firstFighter.addWin();
        secondFighter.addLose();
    }
}

const one = new Fighter({name: 'John', damage: 20, hp: 100, agility: 25});
const two = new Fighter({name: 'Jack', damage: 25, hp: 100, agility: 20});
