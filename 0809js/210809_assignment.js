class Person{
    constructor(name, hp){
        this.name = name;
        this.hp = hp;
    }

    hello(){
        console.log(this.name);
    }
}

class Avengers extends Person{
    constructor(name, hp, power, skill){
        super(name, hp);
        this.power = power;
        this.skill = skill;
    }
    
    information(){
        console.log(this.name);
        console.log(this.hp);
        console.log(this.power);
        console.log(this.skill);
    }
    
    fly(){
        console.log("비행중");
    }
}

let a  = new Avengers("사람1", 100);
a.hello();

let b = new Avengers("스파이더맨", 500, 10000, "거미줄쏘기");
b.information();
b.hello();
b.fly();