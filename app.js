var input = document.querySelector('.input_text');
var main = document.querySelector('#name');
var temp = document.querySelector('.temp');
var desc = document.querySelector('.desc');
var clouds = document.querySelector('.clouds');
var button = document.querySelector('.submit');


button.addEventListener('click', function(name) {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + input.value + '&appid=45877aff211554395fa8c6a4bb95d4b1')
        .then(response => response.json())
        .then(data => {
            var tempValue = Math.floor(parseInt(data.main.temp) - 273.15);
            var nameValue = data.name;
            var descValue = data.weather[0].description;

            main.innerHTML = "도시 - " + nameValue;
            desc.innerHTML = "기후 - " + descValue;
            temp.innerHTML = "온도 - " + tempValue + "Cº";
            input.value = "";

        })

    .catch(err => alert("다시 입력해주세요"));
})
