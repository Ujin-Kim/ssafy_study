const button = document.createElement('button');
console.log(button);

const buttonText = document.createTextNode("create button");
console.log(buttonText);

//button에 속성을 넣어보쟈
button.setAttribute("id", "chicken");///이게 body.append(button)보다 뒷줄에 가있으면 id안들어감 그러니까 시점 정리도 확실히
button.append(buttonText);

const body = document.querySelector("body");
body.append(button);
//동적으로 넣는거기 때문에 이벤트가 생겼을 때 넣는다거나 그런것도 할 수 있고 더 좋음.



button.setAttribute("id", "chicken");



//다른방법
const data = "<button>hello world!</button>";
// body.innerHTML = data;
//기존에 있던게 사라지고 hello world버튼만 생김
//그러니까 누적해줘야해

body.innerHTML += data;




//사실이거 앞으로 안씀요