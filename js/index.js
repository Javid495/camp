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
              <h5 class="card-title">Nombre de la tribu: ${tribu}</h5>
              <h6 class="card-subtitle mb-2 text-body-secondary">Id de la tribu: ${idTribu}</h6>
              <p class="card-text"> Puntos: ${puntos}</p>
              
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
              <h5 class="card-title">Nombre: ${nombre}</h5>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">Id: ${id}</li>
              <li class="list-group-item">Edad: ${edad}</li>
              <li class="list-group-item">Rol: ${rol}</li>
              <li class="list-group-item">Nivel de ingles: ${nivelIngles}</li>
            </ul>
          </div>`
          })   
      });
}   