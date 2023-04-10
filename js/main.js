let contenedor = document.getElementById("contenedor");

/* function getProducto() { // promesa sin fetch
    return new Promise( (resolve, reject) => {
        if (producto == null) {
            reject(new Error("Producto no existe")); //reject
        }
        setTimeout( ()=>{ 
            resolve(producto); // resolve
        }, 2000);
    });
} */


function getProducto(){ //fetch

            let promesa = fetch("https://fakestoreapi.com/products", {
                method: "GET"
            });

            promesa
            .then( (response) => {
                response.json().then( (prods)=> {
                    mostrarProducto(prods);
                    console.log("prods=>json()");
                    console.log(prods);
                    
                })
                .catch( (err)=> {
                    console.error("No es formato JSON" + err.message);
                });// si es json

            }) // respuesta 
            .catch( (err)=> {
                console.error("Error en la promesa" + err.message);
            });
}


getProducto();

/* getProducto()
            .then((prod)=> mostrarProducto(prod))
            
            .catch((err)=> console.log(err.message)); */

            
 function mostrarProducto(datos){

    totalProductos = datos.length;
    for (let i=0; i<totalProductos; i++){

    let card = `
        <div class="card" style="width: 18rem;">
        <img src="${datos[i].image}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${datos[i].title}</h5>
          <p class="card-text">${datos[i].description}</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
         </div>
        `;

        contenedor.insertAdjacentHTML("beforeend",card);
    }

 }
       