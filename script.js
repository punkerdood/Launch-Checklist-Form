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
            alertError = []
            }
            else{
            //document.getElementById("pilotStatus").style.visibility = "visible"
            
            document.getElementById("launchStatus").innerHTML = '<h3>Information Received</h3>'

       }})
         copilot.addEventListener("change",function(){
            
            if (!isNaN(copilot.value)){alertError.push(launchError[2])};
            if (alertError.length !== 0) {alert(`${alertError}`)
           alertError = []
            }
            else{
            //document.getElementById("copilotStatus").style.visibility = "visible"
            
            document.getElementById("launchStatus").innerHTML = '<h3>Information Received</h3>'
         }})
         fuel.addEventListener("change",function(){
            if (isNaN(fuel.value)) {alertError.push(launchError[4])};
           // if (fuel.value < 10000){alertError.push(launchError[5])};
            
            
           // document.getElementById("launchStatus").innerHTML = '<h2 style="color:red">Shuttle not ready for launch.</h2>'
            
            
            if (alertError.length !== 0) {alert(`${alertError}`)
           alertError = []
            }
            else {
               //document.getElementById("fuelStatus").style.visibility = "visible"
           
            document.getElementById("launchStatus").innerHTML = '<h3>Information Received</h3>'
         }})
         mass.addEventListener("change",function(){
            if (isNaN(mass.value)) {alertError.push(launchError[6])};
           // if (mass.value > 10000){alertError.push(launchError[7])}
           
           // document.getElementById("launchStatus").innerHTML = '<h2 style="color:red">Shuttle not ready for launch.</h2>'
           // document.getElementById("cargoStatus").style.visibility = "visible"
           // document.getElementById("cargoStatus").innerHTML = `${mass.value} : She's tooooooo heavy.`

            if (alertError.length !== 0) {alert(`${alertError}`)
            alertError = []
            }
            else {
            //document.getElementById("cargoStatus").innerHTML = `${mass.value} : You have good cargo.`
            document.getElementById("launchStatus").innerHTML = '<h3>Information Received</h3>'
         }})
      //    document.getElementById("formSubmit").addEventListener(("click"),function(){
      //    if (pilot.value === "" || copilot.value === "" || mass.value === "" || fuel.value === ""){
      //    alert('all values must be entered')
      //     event.preventDefault()
          
      //    }
         
      // })
      document.getElementById("formSubmit").addEventListener("click",function(){
         let flag1 = true
         let flag2 = true
            // {
            //          document.getElementById("faultyItems").style.visibility = "visible"
            //       document.getElementById("launchStatus").innerHTML = '<h2 style="color:green">Shuttle ready for launch.</h2>';
            //       document.getElementById("pilotStatus").innerHTML = `Pilot ${pilot.value} present for duty.`
            //       document.getElementById("copilotStatus").innerHTML = `CoPilot ${copilot.value} present for duty.`
            //       document.getElementById("fuelStatus").innerHTML = `${fuel.value} : You have enough gas.`
            //       document.getElementById("cargoStatus").innerHTML = `${mass.value} : You have good cargo.`
            //       event.preventDefault()
            //    }
         if (pilot.value !== ''){
            document.getElementById("pilotStatus").innerHTML = `Pilot ${pilot.value} ready.`
            document.getElementById("pilotStatus").style.visibility = "visible"
            event.preventDefault()
         }
         else {
            document.getElementById("pilotStatus").style.visibility = "hidden"
         }
         if (copilot.value !== ''){
            document.getElementById("copilotStatus").innerHTML = `CoPilot ${copilot.value} ready.`
            document.getElementById("copilotStatus").style.visibility = "visible"
            event.preventDefault()
         }
         else {
            document.getElementById("copilotStatus").style.visibility = "hidden"
         }

         if (mass.value > 10000){document.getElementById("cargoStatus").innerHTML = `${mass.value} : She's tooooooo heavy.`;
         flag1 = false
         document.getElementById("launchStatus").innerHTML = '<h2 style="color:red">Shuttle not ready for launch.</h2>'
         document.getElementById("cargoStatus").style.visibility = "visible"
         
         event.preventDefault()
         }
         if (mass.value < 10000 ){document.getElementById("cargoStatus").innerHTML = `${mass.value} : You have good cargo.`
            document.getElementById("cargoStatus").style.visibility = "visible"
            flag1 = true
            event.preventDefault()
            
         }
         if (mass.value === ""){document.getElementById("cargoStatus").style.visibility = "hidden"
         event.preventDefault()}

         if (fuel.value < 10000){document.getElementById("fuelStatus").style.visibility = "visible"
         document.getElementById("fuelStatus").innerHTML = `${fuel.value} : Needs more Gas.`}
         flag2 = false
         if (fuel.value > 10000){document.getElementById("fuelStatus").innerHTML = `${fuel.value} : You have enough gas.`
            document.getElementById("fuelStatus").style.visibility = "visible"
            flag2= true
            event.preventDefault()
           
         }
         if (fuel.value === ""){document.getElementById("fuelStatus").style.visibility = "hidden"
            event.preventDefault()}
         if ( pilot.value === "" || copilot.value === ""  || mass.value === ''  || fuel.value ===''){
            document.getElementById("launchStatus").innerHTML = '<h2 style="color:red">Shuttle not ready for launch.</h2>'
            alert(`All values must be entered.`)
            
         }
         if (flag1 === false || flag2 === false) {
            document.getElementById("launchStatus").innerHTML = '<h2 style="color:red">Shuttle not ready for launch.</h2>'
         }
         else{
            document.getElementById("launchStatus").innerHTML = '<h2 style="color:green">Shuttle ready for launch.</h2>';
         }
      }

      //    
   )
  
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
