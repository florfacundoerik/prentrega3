
let datosTratamiento =[]
const tbody = document.querySelector('.tbody')
let clienteParse = JSON.parse(localStorage.getItem('Personas'));
let message = document.getElementById('welcome');
let divNft = document.getElementById("divContent"); //Se agrega el DIV agregado en el HTML
let divNft2 = document.getElementById("divContent2"); //Se agrega el DIV agregado en el HTML
message.innerHTML += '¡Bienvenido ' + clienteParse[0].nombre + ' comenzemos con el prespuesto!';

//Creamos array de vehiculos//
const vehiculosArray = []
class vehiculo {
    constructor(name1, aumento, id) {
        this.name1 = name1;
        this.aumento = aumento;
        this.id = id
    }
}
const chico = new vehiculo('Chico', 1.10, 1)
vehiculosArray.push(chico);
const hatchback = new vehiculo('Hatchback', 1.15, 2)
vehiculosArray.push(hatchback);
const sedan = new vehiculo('Sedan', 1.20, 3)
vehiculosArray.push(sedan);
const suv = new vehiculo('Suv', 1.25, 4)
vehiculosArray.push(suv);
const pickup = new vehiculo('Pickup', 1.30, 5)
vehiculosArray.push(pickup);


vehiculosArray.forEach((auto) => {        //recorre el array "TRAT ARRAY"
    const divCard2 = document.createElement("div");
    divCard2.classList.add("card");


    let {
        name1,
        aumento,
        id,
} = auto //palabra "variable" referencial.
    
    const divContent2 = ` 
    <div class="card-body">
    <h5 class="card-title">${name1}</h5>
    <p class="card-text"> +% ${aumento} DE INTERES
    <button id="boton${id}" class="btn btn-primary agregar-carrito"> SELECT VEHICULO</button>
    </div>
    `;
divCard2.innerHTML = divContent2;
divNft2.append(divCard2);    
})
//Creamos array de tratamientos disponibles//

let tratArray = []
class tratamientos {
    constructor(nombret, descripcion, price, id) {
        this.nombret = nombret;
        this.descripcion = descripcion;
        this.price = price
        this.id = id
    }    
}    

const Acrilico = new tratamientos("Acrilico", "Tratamiento Acrilico de 6 meses", 40000, 1,);
tratArray.push(Acrilico);

const Ceramico3 = new tratamientos("Ceramico 3", "Tratamiento Cermico de 3 años", 60000, 2,);
tratArray.push(Ceramico3);

const Ceramico5 = new tratamientos("Ceramico 5", "Tratamiento Cermico de 5 años", 80000, 3);
tratArray.push(Ceramico5);

const PPF = new tratamientos("PPF", "PPF completo 10 años de garantia", 100000, 4,);
tratArray.push(PPF);

//Recorrer los array de vehiculos//
tratArray.forEach((trat) => {        //recorre el array "TRAT ARRAY"
    const divCard = document.createElement("div");
    divCard.classList.add("card");

    let {
        nombret,
        descripcion,
        price,
        id,
} = trat //palabra "variable" referencial.
    
    const divContent = ` 
    <div class="card-body">
    <h5 class="card-title">${nombret}</h5>
    <p class="card-test">${descripcion}</p>
    <p class="card-text">$ ${price}
    <button id="boton${id}" class="btn btn-primary select-tratamiento"> SELECT TRATAMIENTO</button>
    </div>
    `;
divCard.innerHTML = divContent;
divNft.append(divCard);    
    
})


