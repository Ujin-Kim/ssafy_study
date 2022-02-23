class Man{
    constructor(a,b){
        this.str = "생성 시작" + String(a) + " " + String(b);
    }

    abc(t){
        for(let i = 0; i < t; i++){
            alert(this.str);
        }
    }
}

let m = new Man(2,4);

m.abc(3);