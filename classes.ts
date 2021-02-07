abstract class UserAccount {
    public name: string;
    protected age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    logDatails(): void {
        console.log(`The player ${this.name} is ${this.age} years old.`);
    }
}

class CharAccount extends UserAccount {
    private nickname: string;
    level: number;
    constructor(name: string, age: number, nickname: string, level:number) {
        super(name, age);
        this.nickname = nickname;
        this.level = level;
    }

    get getLevel() {
        console.log('---------GET---------');
        return this.level;
    }

    set setLevel(level: number) {
        this.level = level;
    }

    logCharDetails(): void {
        console.log(`The player ${this.name} is ${this.age} and has the char ${this.nickname} at level ${this.level}`);   
    }
}

// const will = new UserAccount('william', 30);

// console.log(will);
// console.log(will.age);
// will.logDatails();

const john = new CharAccount('john', 45, 'jj', 80);
console.log(john.name);
// john.nickname = 'william';
console.log(john.level);
john.logDatails();
john.logCharDetails();
console.log(john.getLevel);
john.setLevel = 81;
console.log(john.getLevel);