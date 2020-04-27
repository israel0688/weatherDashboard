 // var for weather day
 var button = document.querySelector('.button')
 var inputValue = document.querySelector('.inputValue')
 var cityName =document.querySelector('.city')
 var desc =document.querySelector('.desc')
 var temp =document.querySelector('.temp')
 var wIcon = document.querySelector('.icon')
 var humid = document.querySelector('.humidity')
 var wSpeed = document.querySelector('.windSpeed')
 var uvIndex = document.querySelector('.uvIndex')

 //day 1
 var humi = document.querySelector('.humidi')
 var temper = document.querySelector('.temper')
 var pIcon = document.querySelector('.ico')


 //day 2
 var humi2 = document.querySelector('.humidi2')
 var temper2 = document.querySelector('.temper2')
 var pIcon2 = document.querySelector('.ico2')

  //day 3
  var humi3 = document.querySelector('.humidi3')
  var temper3 = document.querySelector('.temper3')
  var pIcon3 = document.querySelector('.ico3')

   //day 4
 var humi4 = document.querySelector('.humidi4')
 var temper4 = document.querySelector('.temper4')
 var pIcon4 = document.querySelector('.ico4')

  //day 5
  var humi5 = document.querySelector('.humidi5')
  var temper5 = document.querySelector('.temper5')
  var pIcon5 = document.querySelector('.ico5')


 // funciton to call current weather
button.addEventListener('click',function weather()
//fetch to get weather info
{
 fetch('http://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=51e148a3c279d80fff69d2b12cc9cdb6&units=imperial')

 .then(response => response.json())
 .then(data => 
    {

        // store information from fetch
       cityName.textContent = data.name;
        var tempValue = data['main']['temp'];
        var descValue = data['weather'][0]['description'];
        var iconValue = data['weather'][0]['icon'];
        var theHumidity = data['main']['humidity'];
        var theWspeed = data['wind']['speed'];
        var longitude = data['coord']['lon'];
        var latitude = data['coord']['lat'];

        var iconurl = 'https://openweathermap.org/img/wn/'+iconValue+'@2x.png';

        // display information on index.html
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


 // funciton to call five day forecast
 button.addEventListener('click',function()
 {
     // this fetch pulls the five day forcast
  fetch('https://api.openweathermap.org/data/2.5/forecast?q='+inputValue.value+'&appid=51e148a3c279d80fff69d2b12cc9cdb6&units=imperial')
 
  .then(response => response.json())
  .then(data => 
    {
        console.log(data);
        //day 1
        var theHumi = data['list'][0]['main']['humidity'];
        var tem = data['list'][0]['main']['temp'];
        var iconValue = data['list'][0]['weather'][0]['icon'];

        var iconurl = 'https://openweathermap.org/img/wn/'+iconValue+'@2x.png';

        humi.innerHTML = 'Humidity '+theHumi;
        temper.innerHTML = 'Temperature '+ tem;
        pIcon.src = iconurl;


        //day 2
        var theHumi2 = data['list'][1]['main']['humidity'];
        var tem2 = data['list'][1]['main']['temp'];
        var iconValue2 = data['list'][1]['weather'][0]['icon'];

        var iconurl2 = 'https://openweathermap.org/img/wn/'+iconValue2+'@2x.png';
        
        humi2.innerHTML = 'Humidity '+theHumi2;
        temper2.innerHTML = 'Temperature '+ tem2;
        pIcon2.src = iconurl2;

                //day 3
        var theHumi3 = data['list'][2]['main']['humidity'];
        var tem3 = data['list'][2]['main']['temp'];
        var iconValue3 = data['list'][2]['weather'][0]['icon'];

        var iconurl3 = 'https://openweathermap.org/img/wn/'+iconValue3+'@2x.png';
        
        humi3.innerHTML = 'Humidity '+theHumi3;
        temper3.innerHTML = 'Temperature '+ tem3;
        pIcon3.src = iconurl3;

                //day 4
        var theHumi4 = data['list'][3]['main']['humidity'];
        var tem4 = data['list'][3]['main']['temp'];
        var iconValue4 = data['list'][3]['weather'][0]['icon'];

        var iconurl4 = 'https://openweathermap.org/img/wn/'+iconValue4+'@2x.png';
        
        humi4.innerHTML = 'Humidity '+theHumi4;
        temper4.innerHTML = 'Temperature '+ tem4;
        pIcon4.src = iconurl4;

                //day 5
        var theHumi5 = data['list'][4]['main']['humidity'];
        var tem5 = data['list'][4]['main']['temp'];
        var iconValue5 = data['list'][4]['weather'][0]['icon'];

        var iconurl5 = 'https://openweathermap.org/img/wn/'+iconValue5+'@2x.png';
        
        humi5.innerHTML = 'Humidity '+theHumi5;
        temper5.innerHTML = 'Temperature '+ tem5;
        pIcon5.src = iconurl5;

    })
});

  
//function that is used to display the date
function theDate()
{
  // instantiate a moment object
 var NowDate = moment().format("MMMM Do YYYY");
 var tomorrow = moment().add(1, 'days');
 var day3 = moment().add(2,'days');
 var day4 = moment().add(3, 'days');
 var day5 = moment().add(4, 'days');

 
  // display value of moment object in #currentDay div
  var eDisplayDate = document.getElementById('currentDay');
  eDisplayDate.innerHTML = NowDate;

 
 // display value of moment object in #date div
 var eDisplayDate = document.getElementById('date');
 eDisplayDate.innerHTML = NowDate;

  // display value of moment object in #date2 div
  var eDisplayDate = document.getElementById('date2');
  eDisplayDate.innerHTML = tomorrow.format("MMMM Do YYYY");

   // display value of moment object in #date3 div
 var eDisplayDate = document.getElementById('date3');
 eDisplayDate.innerHTML = day3.format("MMMM Do YYYY");

  // display value of moment object in #date4 div
  var eDisplayDate = document.getElementById('date4');
  eDisplayDate.innerHTML = day4.format("MMMM Do YYYY");

   // display value of moment object in #date5 div
 var eDisplayDate = document.getElementById('date5');
 eDisplayDate.innerHTML = day5.format("MMMM Do YYYY");
  
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

        //Here is where I want to call the weather function while 
        // at the same time deleting the listed city buy I keep getting error
        // and have run out of time.
        // weather()


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
