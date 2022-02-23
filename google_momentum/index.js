// https://picsum.photos/200/300
// img src="https://picsum.photos/200/300" 이것도 가능

async function setRenderBackground() {
    //객체 비구조화 할당 data = result.data
    //200, 300 -> 1280, 720
    const { data } = await axios.get('https://picsum.photos/1280/720',{
        //blob속성 : 이미지, 사운드, 비디오등의 멀티미디어 데이터를 다룰 때 사용
        responseType: 'blob',
    });
    //console.log(data);

    //현재 사용하고 있는 페이지에서만 유효한 임시의 URL을 생성
    const imageURL = URL.createObjectURL(data);
    document.querySelector("body").style.backgroundImage = `url(${imageURL})`;
}

function setTime() {
    const timer = document.querySelector('.timer');
    setInterval(()=>{
        const date = new Date();
        //console.log(date);
        //console.log(date.getTime());
        const min = "0" + date.getMinutes();
        const min2 = min.slice(-2, min.length);
        const sec = "0" + date.getSeconds();
        const sec2 = sec.slice(-2, sec.length);
        timer.textContent = `${date.getHours()}:${min2}:${sec2}`;

        const current_hour = date.getHours();
        renderingTime(current_hour);
    }, 1000);
}

function renderingTime(current_hour){
    const welcome = document.querySelector('.timer-content');
    if(current_hour < 12) welcome.textContent = "Good Morning, Yujin";
    else welcome.textContent = "Good Evening, Yujin";
}


//메모를 불러와서 html에 그러져눈
//renderingMemo
function renderingMemo() {
    const memo = document.querySelector('.memo');
    const memoValue = localStorage.getItem('todo');
    memo.textContent = memoValue;
    //console.log(memoValue);
}

function setMemo(){
    const memoInput = document.querySelector('.memo-input');
    memoInput.addEventListener('keyup', function(e) {
        //console.log(e.code);
        //console.log(e.target.value);
        // e.target.value !== undefined && e.target.value !== null && e.target.value !=="" && e.target.value !== 0
        if(e.code === 'Enter' && e.target.value){
            //개발자 도구 -> Application에서 확인 가능
            //html은 localstorage와 data와 일치해야한다
            localStorage.setItem('todo', e.target.value);
            renderingMemo();
            memoInput.value = '';
        }
    })
}

function addDeleteMemoEvent() {
    document.addEventListener('click', function (e) {
        console.log(e.target);
        if(e.target.classList.contains("memo")){
            //local storage로부터 데이터를 지운다
            localStorage.removeItem('todo');
            //데이터와 html의 일치화를 위해 html에있는 내용도 지운다.
            e.target.textContent = '';
        }
    });
}

//navigator.geolocation.getCurrentPosition(function(pos){console.log(pos.coords);});
//현재 위치(위도, 경도)를 가져오는 콜백함수
//api 호출 시점 고려할때 어려움 -> promise화 한다
function getPosition(options){
    return new Promise(function(resolve, reject) {
        //api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}
        navigator.geolocation.getCurrentPosition(resolve, reject, options);
    })
}

async function getWeatherAPI(latitude, longitude){
    //위도와 경도가 있는 경우
    const API_key = 'ad841d12542f595ef85b44657e320378';
    if(latitude & longitude){
        const result = await axios.get(
            `http://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${API_key}`
        );
        return result;
    }

    //위도와 경도가 없는 경우
    //없는 경우에는 서울의 날씨 데이터를 가져온다
    const result = await axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=Seoul&appid=${API_key}`);
    return result;
    // api.openweathermap.org/data/2.5/forecast?q={city name}&appid={API key}
}

async function renderWeather(){
    let latitude = '';
    let longitude = '';
    try{
        const position = await getPosition();
        //console.log(position);
        latitude = position.coords.latitude;
        longitude = position.coords.longitude;
    }catch(error){
        console.log(error);
    }

    // 해당 위도 경도를 기반으로 날씨 API불러오기
    // 날씨 불러오는 API호출 함수 생성
    //console.log(latitude);
    //console.log(longtitude);
    const weatherResult = await getWeatherAPI(latitude, longitude);
    //console.log(weatherResult);
    //weatherResult.data.list
    const {list} = weatherResult.data;
    //18:00:00의 정보만 가져온다
    const weatherList = list.reduce((acc, cur) => {
        if(cur.dt_txt.indexOf("18:00:00") > 0){
            acc.push(cur);
        }
        return acc;
    }, []);
    console.log(weatherList);

    //modal body에 데이터를 기반으로 html과 일치화
    const modalBody = document.querySelector('.modal-body');
    modalBody.innerHTML = weatherList.map((li) => {return weatherWrapperComponent(li)}).join("");

    //modal button에 데이터를 기반으로 html과 일치화
    const modalBtn = document.querySelector('.modal-button');
    modalBtn.style.backgroundImage = `url("${matchIcon(weatherList[0].weather[0].main)}")`;
}

//html을 component로 만들어서 (레고처럼 재사용할 수 있게) 값만 바꿔서 사용할것임
function weatherWrapperComponent(li){
    //console.log(li);

    //온도->절대온도 (toFixed(1) : 소숫점 첫째자리)
    const changeToCelsius = (temp) => (temp-273.15).toFixed(1);
    return `
        <div class="card shadow-sm bg-transparent mb-3 m-2 flex-grow-1">
            <div class="card-header text-white text-center">
                ${li.dt_txt.split(" ")[0]}
            </div>

            <div class="card-body d-flex">
                <div class="flex-grow-1 d-flex flex-column justify-content-center align-items-center">
                    <h5 class="card-title">
                        ${li.weather[0].main}
                    </h5>
                    <img src="${matchIcon(li.weather[0].main)}" width="60px" height="60px" />
                    <p class="card-text">${changeToCelsius(li.main.temp)}˚</p>
                </div>
            </div>
        </div>
    `;
}

function matchIcon(weatherData){
    if(weatherData === "Clear") return "./images/039-sun.png";
    if(weatherData === "Clouds") return "./images/001-cloud.png";
    if(weatherData === "Rain") return "./images/003-rainy.png";
    if(weatherData === "Snow") return "./images/006-snowy.png";
    if(weatherData === "Thunderstorm") return "./images/008-storm-1.png";
    if(weatherData === "Drizzle") return "./images/031-snowflake.png";
    if(weatherData === "Atmosphere") return "./images/033-033-hurricane.png";
}

//IIFE 즉시실행함수
(function () {
    setRenderBackground();

    //setTimeout은 정해진 시간후에 한번만 실행
    //setInterval은 시간마다 계속 실행
    setInterval(()=>{
        setRenderBackground();
    }, 5000);

    //시간설정
    setTime();

    //setting memo
    setMemo();
    renderingMemo();
    addDeleteMemoEvent();
    renderWeather();
})();