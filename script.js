// Write your JavaScript code here!



window.addEventListener("load", function() {
   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
      response.json().then(function(json){
        
         const div = document.getElementById("missionTarget");
         div.innerHTML =  `<h2>Mission Destination</h2>
         <ol>
            <li>Name:${json[0].name}</li>
            <li>Diameter: ${json[0].diameter}</li>
            <li>Star: ${json[0].star}</li>
            <li>Distance from Earth: ${json[0].distance}</li>
            <li>Number of Moons: ${json[0].moons}</li>
         </ol>
         <img src="${json[0].image}">
            `
   } );
})
let button = document.getElementById("formSubmit");
   button.addEventListener("click",function(){
      
         let pilot = document.querySelector("input[name=pilotName]");
         let copilot = document.querySelector("input[name=copilotName]");
         let fuel = document.querySelector("input[name=fuelLevel]");
         let mass = document.querySelector("input[name=cargoMass]");
            if (!isNaN(pilot.value)){
            alert("Names must not contain numbers")
            event.preventDefault();
         }
            if (!isNaN(copilot.value)){
            alert("Names must not contain numbers")
            event.preventDefault();
         }
            if (isNaN(fuel.value)){
               alert("Fuel must be entered as a number")
               event.preventDefault();
            }

            if (isNaN(mass.value)){
               alert("Mass must be entered as a number")
               event.preventDefault();
            }
            if(pilot.value === ""|| copilot.value === ""|| fuel.value === ""|| mass.value === ""){
               alert(`All fields required dummy.`)
               event.preventDefault();
            }
            event.preventDefault();
            document.getElementById("faultyItems").style.visibility = "visible"
            document.getElementById("launchStatus").innerHTML = '<h2>Information Received</h2>'
            document.getElementById("pilotStatus").innerHTML = `Pilot ${pilot.value} present for duty.`            
            document.getElementById("copilotStatus").innerHTML = `Copilot ${copilot.value} present for duty.` 
           
            if (fuel.value < 10000) {
               document.body.style.backgroundColor = 'red';
               document.getElementById("launchStatus").innerHTML = '<h2>Shuttle not ready for launch.</h2>'
               document.getElementById("fuelStatus").innerHTML = 'Not Enough Gas';
               alert("Can't Go Up!");
            }
            else {
               document.getElementById("fuelStatus").innerHTML = 'Gas is good.';
            };
            if (mass.value > 10000){
               document.body.style.backgroundColor = 'red';
               document.getElementById("cargoStatus").innerHTML = 'She is to heavy!';
               document.getElementById("launchStatus").innerHTML = '<h2>Shuttle not ready for launch.</h2>'
               alert("Can't Go Up!");
            }
            
     })     

});



/* /* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${name}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${image[0]}">
*/ 
