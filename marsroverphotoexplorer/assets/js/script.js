var apiKey = 'FJacUr1VhK0jtqP0jGSNJ0k9RKgfTcMLwRUeoL6T'; 
      document.addEventListener('DOMContentLoaded', onSubmit);

      function onSubmit(){
        document.getElementById('calendarsubmit').addEventListener('click', function(event){
          var request = new XMLHttpRequest();
          var date = document.getElementById('calendar').value;
          var dateArray = date.split("/");
          var month = dateArray[0];
          var day = dateArray[1];
          var year = dateArray[2];          var roverName = "";
          var button1 = document.getElementById('first').checked;
          var button2 = document.getElementById('second').checked;
          var button3 = document.getElementById('third').checked;

          if(button1 === true)
          {
            roverName = "curiosity";
          }
          else if(button2 === true)
          {
            roverName = "opportunity";
          }
          else if (button3 === true)
          {
            roverName = "spirit";
          }

          request.open('GET', 'https://api.nasa.gov/mars-photos/api/v1/rovers/' + roverName + '/photos?earth_date=' + year + '-' + month + '-' + day + '&api_key=' + apiKey, true);
          request.addEventListener('load',function(){
           if(request.status >= 200 && request.status < 400)
           {
              var response = JSON.parse(request.responseText);
              console.log(response);

              document.getElementById('imageStatus').textContent = 'Click to display full size';
             for (let i = 0; i < 25; i++) 
             {
                document.getElementById("image" + i).src = response.photos[i].img_src;
             }


            } 


            else 
            { 
                  console.log("Error in network request: " + request.statusText);

             }});
          document.getElementById('imageStatus').textContent = 'Loading';
          request.send(null);
          event.preventDefault();
        })

      }

      