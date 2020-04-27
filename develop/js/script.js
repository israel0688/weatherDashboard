

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
 var wIcon = document.querySelector('.icon')
 var humid = document.querySelector('.humidity')
 var wSpeed = document.querySelector('.windSpeed')
 var uvIndex = document.querySelector('.uvIndex')


 // funciton to call current weather
button.addEventListener('click',function weather()
{
 fetch('http://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=51e148a3c279d80fff69d2b12cc9cdb6&units=imperial')

 .then(response => response.json())
 .then(data => 
    {
       cityName.textContent = data.name;
        var tempValue = data['main']['temp'];
        var descValue = data['weather'][0]['description'];
        var iconValue = data['weather'][0]['icon'];
        var theHumidity = data['main']['humidity'];
        var theWspeed = data['wind']['speed'];
        var longitude = data['coord']['lon'];
        var latitude = data['coord']['lat'];

        var iconurl = 'https://openweathermap.org/img/wn/'+iconValue+'@2x.png';

        cityName.innerHTML= data.name;
        temp.innerHTML = 'Temperature '+tempValue+' Degrees Farenheight';
        desc.innerHTML = descValue;
        wIcon.src = iconurl;
        humid.innerHTML = 'Humidity '+theHumidity;
        wSpeed.innerHTML = 'Wind Speed MPH '+theWspeed;


        //call date function
        theDate();

        // this fetch calls the UV Index

        return fetch('http://api.openweathermap.org/data/2.5/uvi?appid=51e148a3c279d80fff69d2b12cc9cdb6&lat='+latitude+'&lon='+longitude)
    })
    .then(response => response.json())
    .then(data =>
        {
            uvIndex.textContent = data.value;

            uvIndex.innerHTML = 'UV Index '+data.value;


            // these if else statements change background color of uv index depending on status
            if (data.value >= 6)
            {
                uvIndex.style.backgroundColor = '#DC143C';
            }
            else if(data.value > 2 & data.value < 6)
            {
                uvIndex.style.backgroundColor = '#FFFF00';
            }
            else
            {
                uvIndex.style.backgroundColor = '#00FF7F';
            }
        

    });



});


//api.openweathermap.org/data/2.5/forecast?q={city name}&appid={your api key}

 // funciton to call five day forecast
 button.addEventListener('click',function()
 {
  fetch('http://api.openweathermap.org/data/2.5/forecast?q='+inputValue.value+'&appid=51e148a3c279d80fff69d2b12cc9cdb6&units=imperial')
 
  .then(response => response.json())
  .then(data => 
    {
        console.log(data);
    })
});

  


//Display the date
function theDate()
{
  // instantiate a moment object
 var NowDate = moment().format("MMMM Do YYYY");
  
 
  // display value of moment object in #currentDay div
  var eDisplayDate = document.getElementById('currentDay');
  eDisplayDate.innerHTML = NowDate;
  

}

      
var list = JSON.parse(localStorage.getItem("todolist")) || [];

      function renderTodos(list) {
        $("#to-dos").empty(); // empties out the html

        // render our todos to the page
        for (var i = 0; i < list.length; i++) {
          // Create a new variable that will hold a "<p>" tag.
          // Then set the to-do "value" as text to this <p> element.
          var toDoItem = $("<p>");
          toDoItem.text(list[i]);

          // Create a button with unique identifiers based on what number it is in the list. Again use jQuery to do this.
          // Give your button a data attribute called data-to-do and a class called "checkbox".
          // Lastly add a checkmark inside.

          var toDoClose = $("<button>");

          toDoClose.attr("data-to-do", i);
          toDoClose.addClass("checkbox");
          toDoClose.text("✓");

          // Append the button to the to do item
          toDoItem = toDoItem.prepend(toDoClose);

          // Add the button and to do item to the to-dos div
          $("#to-dos").append(toDoItem);
        }
      }

      $("#add-to-do").on("click", function(event) {
        event.preventDefault();

        // Get the to-do "value" from the textbox and store it as a variable
        var toDoTask = $("#to-do")
          .val()
          .trim();

        // Adding our new todo to our local list variable and adding it to local storage
        list.push(toDoTask);

        // Update the todos on the page
        renderTodos(list);

        // Save the todos into localstorage.
        // We need to use JSON.stringify to turn the list from an array into a string
        localStorage.setItem("todolist", JSON.stringify(list));

        // Clear the textbox when done
        $("#to-do").val("");
      });

      // When a user clicks a check box then delete the specific content
      $(document).on("click", ".checkbox", function() {
        // Get the number of the button from its data attribute and hold in a variable called  toDoNumber.
        var toDoNumber = $(this).attr("data-to-do");

        // Deletes the item marked for deletion
        list.splice(toDoNumber, 1);

        // Update the todos on the page
        renderTodos(list);

        // Save the todos into localstorage.
        // We need to use JSON.stringify to turn the list from an array into a string
        localStorage.setItem("todolist", JSON.stringify(list));

      });

      // render our todos on page load
      renderTodos(list);
