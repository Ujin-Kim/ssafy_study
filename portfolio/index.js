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
        <div class="card shadow-sm mb-3 m-2 flex-grow-1">
            <div class="card-header text-center">
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


//IIFE
(function (){
    renderWeather();
})();