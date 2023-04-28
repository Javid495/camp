const URL_API = "js/data/hunters.json";
loadData()



function loadData(){
    fetch(URL_API)
      .then((response)=>{
        return response.json();

      })
      .then((data) =>{
        console.log(data);

        viewHTML(data);
      })
}



function viewHTML(verDatos){ 
    verDatos.forEach(data => {
        const {idTribu,tribu,puntos,campers} = data;
        const divContainer = document.querySelector('#gola');
        divContainer.innerHTML=`
        <div class="card"id="modal" mm="hola" >
            <div class="card-body">
              <h5 class="card-title">${tribu}</h5>
              <h6 class="card-subtitle mb-2 text-body-secondary">${idTribu}</h6>
              <p class="card-text">${puntos}</p>
              
             <div id="tarjetass" class="d-flex gap-3">
                      
             </div>
            </div>
          </div>`

          data.campers.forEach(element=>{
            const cards = document.querySelector('#tarjetass')
            const{id,nombre,edad,nivelIngles,rol,img}= element
            cards.innerHTML+=`
            <div class="card" style="width: 18rem;">
            <img src="${img}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${nombre}</h5>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">${id}</li>
              <li class="list-group-item">${edad}</li>
              <li class="list-group-item">${rol}</li>
              <li class="list-group-item">${nivelIngles}</li>
            </ul>
          </div>

            
            `



         


          })
      
        




        
       
        
      });
}

/* const padre = document.querySelector('#gola')
padre.addEventListener("click", tajeta)
function tajeta(e){
    if(e.target){
      console.log(e.target);
      const camperss = e.target.getAttribute('mm')
      console.log(camperss);




    }
    




} */

 

















/* function reCampers(verInfo){
    const tarjetas = document.querySelector("#tarjeta");
    verInfo.forEach(camper =>{
      const {id,nombre,edad,nivelIngles,rol} = camper
      console.log(camper)
/*       tarjetas.innerHTML=`
        <div class="card" style="width: 18rem;">
        <img src="..." class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${nombre}</h5>
            <p>${id}</p>
            <p>${edad}</p>
            <p>${nivelIngles}</p>
            <p>${rol}</p>
          </div>
        </div>
        `   */
/*     }) 

} 
   */      