export default class Character {
    constructor(name) {
        if (name === undefined || name.length < 2 || name.length > 10) {
            throw new Error('Имя должно быть сткрой от 2 до 10 символов включительно');
        }
        this.name = name;
        this.health = 100;
        this.level = 1;
    }
}

export class Team {
    constructor(name) {
        this.name = name;
        this.members = new Set();
    }
    add(member) {
        if (this.members.has(member)) {
            throw new Error('Такой персонаж уже есть');
        }
        this.members.add(member)
    }
    addAll(...rest) {
        rest.forEach((member) => this.members.add(member));
    }

    toArray() {
        return Array.from(this.members);
    }
}
