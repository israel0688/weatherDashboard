

//searchForm.addEventListener('submit', submitSearch);
 /*var apiUrl = "http://api.openweathermap.org/data/2.5/weather?q=houston&appid=51e148a3c279d80fff69d2b12cc9cdb6";
   
 function myFunction()
 {
    fetch(apiUrl)
    .then((response) => {
        return response.json();
    })
    .then((response) => {
  
var cityName= document.querySelector(".city")
var hum= document.querySelector(".humi")

cityName.textContent= response.name;
hum.integer=response.humidity;

        const responseContainerEl = document.querySelector("#response-container")
        responseContainerEl.innerHTML= response;

    console.log(response)
    
    });
 }*/

 var button = document.querySelector('.button')
 var inputValue = document.querySelector('.inputValue')
 var cityName =document.querySelector('.city')
 var desc =document.querySelector('.desc')
 var temp =document.querySelector('.temp')

button.addEventListener('click',function()
{
 fetch('http://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=51e148a3c279d80fff69d2b12cc9cdb6&units=imperial')

 .then(response => response.json())
 .then(data => 
    {
       cityName.textContent = data.name;
        var tempValue = data['main']['temp'];
        var descValue = data['weather'][0]['description'];

        cityName.innerHTML= data.name;
        temp.innerHTML = tempValue;
        desc.innerHTML = descValue;

    })

 //.catch(err)
 //{alert("wrong city name!")};

});

//Display the date
function headingDate()
{
  // instantiate a moment object
 var NowDate = moment().format("MMMM Do YYYY");
  
 
  // display value of moment object in #currentDay div
  var eDisplayDate = document.getElementById('currentDay');
  eDisplayDate.innerHTML = NowDate;
  

}
headingDate();