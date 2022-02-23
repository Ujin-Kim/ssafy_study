class Hero{

    constructor(){
        this.HP = 100;
    }

    showHP(){
        console.log(this.HP);
    }

    run(){
        this.HP -= 10;
    }
}

let batman = new Hero;

batman.showHP();
batman.run();
batman.run();
batman.showHP();