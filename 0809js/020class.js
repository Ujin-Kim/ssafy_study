class Person{
    //변수 할당하고싶은데
    //let age = 15; 하면 오류남
    //멤버변수는 constructor에서만 추가 가능함
    constructor(){
        this.age = 40;
    }

    //메서드를 할당하는 방법
    think(){
        console.log("I am person")
    }
}

let p = new Person();

p.think();
console.log(p.age);