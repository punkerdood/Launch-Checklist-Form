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
         <img src="${json[0].image}">`
}).then(function(){
     
         let pilot = document.querySelector("input[name=pilotName]");
         let copilot = document.querySelector("input[name=copilotName]");
         let fuel = document.querySelector("input[name=fuelLevel]");
         let mass = document.querySelector("input[name=cargoMass]");
         let launchError = ["Pilot's name must not contain numbers","Pilots name must be filled in","Co-pilot's name must not contain numbers","Co-pilots name must be filled in",
                           "Fuel must be entered as a number","Not enough gas!","Mass must be entered as a number","She is to heavy!","All fields required dummy."]
         let alertError = []
       pilot.addEventListener("change",function(){
          
            if (!isNaN(pilot.value)){alertError.push(launchError[0])}
            if (alertError.length !== 0) {alert(`${alertError}`)
            window.location.reload()}
            document.getElementById("pilotStatus").style.visibility = "visible"
            document.getElementById("pilotStatus").innerHTML = `Pilot ${pilot.value} present for duty.`
            document.getElementById("launchStatus").innerHTML = '<h3>Information Received</h3>'
         })
         copilot.addEventListener("change",function(){
            
            if (!isNaN(copilot.value)){alertError.push(launchError[2])};
            if (alertError.length !== 0) {alert(`${alertError}`)
            window.location.reload()}
            document.getElementById("copilotStatus").style.visibility = "visible"
            document.getElementById("copilotStatus").innerHTML = `CoPilot ${copilot.value} present for duty.`
            document.getElementById("launchStatus").innerHTML = '<h3>Information Received</h3>'
         })
         fuel.addEventListener("change",function(){
            if (isNaN(fuel.value)) {alertError.push(launchError[4])};
            if (fuel.value < 10000){alertError.push(launchError[5])}
           
            document.getElementById("launchStatus").innerHTML = '<h2 style="color:red">Shuttle not ready for launch.</h2>'
            document.getElementById("fuelStatus").style.visibility = "visible"
            document.getElementById("fuelStatus").innerHTML = `${fuel.value} : Needs more Gas.`
            
            if (alertError.length !== 0) {alert(`${alertError}`)
            window.location.reload()}
            else {document.getElementById("fuelStatus").style.visibility = "visible"
            document.getElementById("fuelStatus").innerHTML = `${fuel.value} : You have enough gas.`
            document.getElementById("launchStatus").innerHTML = '<h3>Information Received</h3>'
         }})
         mass.addEventListener("change",function(){
            if (isNaN(mass.value)) {alertError.push(launchError[6])};
            if (mass.value > 10000){alertError.push(launchError[7])}
           
            document.getElementById("launchStatus").innerHTML = '<h2 style="color:red">Shuttle not ready for launch.</h2>'
            document.getElementById("cargoStatus").style.visibility = "visible"
            document.getElementById("cargoStatus").innerHTML = `${mass.value} : She's tooooooo heavy.`

            if (alertError.length !== 0) {alert(`${alertError}`)
            window.location.reload()}
            else {document.getElementById("cargoStatus").style.visibility = "visible"
            document.getElementById("cargoStatus").innerHTML = `${mass.value} : You have good cargo.`
            document.getElementById("launchStatus").innerHTML = '<h3>Information Received</h3>'
         }})
         document.getElementById("formSubmit").addEventListener(("focus"),function(){
         if (pilot.value === "" || copilot.value === "" || mass.value === "" || fuel.value === ""){
          alert(`All values must be entered. Press the reload button`)
         }
            
      })
      document.getElementById("formSubmit").addEventListener("click",function(){
         document.getElementById("launchStatus").innerHTML = '<h2 style="color:green">Shuttle ready for launch.</h2>' 
         event.preventDefault()
      })
  
      })
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
