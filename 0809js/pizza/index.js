const inputFile = document.querySelector("#input-file");
const inputWidth = document.querySelector("#input-width");
const inputHeight = document.querySelector("#input-height");
const createButton = document.querySelector("#create-button");

class Image{
    constructor(type, file){
        this.type = type;
        this.file = file;
    }
}

class Something extends Image{
    constructor(type, file, width, height){
        super(type, file);
        this.width = width;
        this.height = height;
    }

    moveEvent = (e) =>{
        const offsetLeft = this.tag.offsetLeft;
        const offsetTop = this.tag.offsetTop;
        if(e.code === "ArrowUp"){
            this.tag.style.top = offsetTop - 50 + "px";
        }
        if(e.code === "ArrowLeft"){
            this.tag.style.left = offsetLeft - 50 + "px";
        }
    }

    removeEvent(){
        document.body.removeEventListener("keyup", this.moveEvent);
    }

    createObject(){
        this.tag = document.createElement("div");
        this.tag.style.width = this.width;
        this.tag.style.height = this.height;
        this.tag.style.backgroundImage = `url(${this.file})`;
        this.tag.classList.add("object");
        this.tag.addEventListener("click", function(e){
            console.log(test);
        })
        document.body.addEventListener("keyup", this.moveEvent);
        document.querySelector("body").append(this.tag);
    }
}

let obj = "";

createButton.addEventListener("click", function(e){
    if(!Number(inputWidth.value) || !Number(inputHeight.value)){
        alert("가로와 세로에는 숫자를 입력해주세요");
        inputWidth.value = "";
        inputHeight.value = "";
        return;
    }

    const reader = new FileReader();
    reader.readAsDataURL(inputFile.files[0]);
    reader.onload = function(){
        if(obj){
            console.log(obj);
            obj.removeEvent();
        }
        obj = new Something("Pizza", reader.result, inputWidth.value + "px", inputHeight.value + "px");
        obj.createObject();
    }
})