// Registering component in Target.js

AFRAME.registerComponent("target-ring", {
  init: function () {
   for(var i = 1; i <= 20; i++){
     //template literal - ${ }
     var id = `ring${i}`

     var posX =(Math.random() * 3000 + (-1000)); 
     var posY = (Math.random() * 2 + (-1));
     var posZ = (Math.random() * 3000 + (-1000));

     var position = {x:posX, y:posY, z:posZ}
      //call the function
     this.createRings(id, position)
   }
  } ,

  createRings: function(id, position) { 
    
    /*querySelector() function helps to select the particular entity element 
    once the id is given to the entities */

    var terrainEl = document.querySelector("#terrain")
    
     //createElement() helps in creating new entity
    var ringEl = document.createElement("a-entity");

    ringEl.setAttribute("id",id);
    
    ringEl.setAttribute("position", position)
    ringEl.setAttribute("material","color","#ff9100");
    
    ringEl.setAttribute("geometry",{ primitive: "torus",radius: 8 });   

    terrainEl.appendChild(ringEl)
  }
});


