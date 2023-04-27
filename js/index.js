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
    const divContainer = document.querySelector('#contenido');
    verDatos.forEach(data => {
        const {idTribu,tribu,puntos,} = data;
        divContainer.innerHTML=`
        <h3>id: ${idTribu}</h3>
        <br>
        <h3>Tribu: ${tribu}</h3>
        <h3>Puntos: ${puntos}</h3>
        `
    
    
    });
    
    
}