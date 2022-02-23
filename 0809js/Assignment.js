class Person{
    constructor(name,hp){
        this.name = name;
        this.hp = hp;
    }

    hello(){
        console.log(this.name);
    }
}

class Avengers extends Person{
    constructor(name,hp,power,skill){
        super(name,hp);
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



let a = new Person("일반인",10);
a.hello();

let b = new Avengers("영웅",1000,100,"비행하기");
b.fly();
b.information();
b.hello();