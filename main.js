let load=document.querySelector('.load')
let inputData=document.querySelector('.indata')
let search=document.querySelector('.fa-magnifying-glass')


let name=document.querySelector('.name')
let humdity=document.querySelector('.hd')
let speed=document.querySelector('.speed')
let temp=document.querySelector('.temp')
let weatherimg=document.querySelector('.weatimg')

window.onload=()=>{
  load.style.display='none';
}

const apiurl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q='
const api = 'e23c5126b76c0d5ae40bb7dd7712f727';

  async function openWeather(city){
  let response=await fetch(apiurl+city+`&appid=${api}`);
  let data=await response.json();
  console.log(data);
  
if(data.cod==='404'){
  weatherimg.src='/error.png'
name.innerHTML ='Not Found';
temp.innerHTML = 'XXX';
humdity.innerHTML = 'XXX';
speed.innerHTML = 'XXX';
}else{
  
  name.innerHTML = data.name;
  temp.innerHTML = Math.round(data.main.temp) + '⁰C';
  humdity.innerHTML = data.main.humidity + '%';
  speed.innerHTML = data.wind.speed +
    ' Km/H';
  if (data.weather[0].main == 'Clouds') {
    weatherimg.src = '/cloudy.png';
  } else if (data.weather[0].main == 'Rain') {
    weatherimg.src = '/rain.png';
  } else if (data.weather[0].main == 'Haze') {
    weatherimg.src = '/haze.png';
  } else if (data.weather[0].main == 'Clear') {
    weatherimg.src = '/sunny.png';
  } else if (data.weather[0].main == 'Thunderstorm') {
    weatherimg.src = '/thunder.png';
  }
}
  
}


search.addEventListener('click',()=>{
  openWeather(inputData.value)
  
  if(inputData.value==''){
    alert('Please enter city name')
    name.innerHTML ='Not Found';
  }
  
  
  
})