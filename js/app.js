//<<<<<<<<<<<<<<<<desafio 6 arrays>>>>>>>>>>>>>>


const cabañas = [{ id: 1,  cabaña: "economica", precio: 2000, capacidad: 2  },
                  {  id: 2,  cabaña: "familiar", precio: 5000, capacidad: 4 },
                  {  id: 3,  cabaña: "ejecutiva", precio: 8000, capacidad: 6 },
                  {  id: 4,  cabaña: "hostel", precio: 1000, capacidad: 1 }];

console.log(cabañas);

//buscando datos sobre hostel
const buscarhostel = cabañas.find(cabaña => cabaña.id === 4); 
console.log(buscarhostel);

//buscado alojamiento con valor menor a 5000 
const alojamientoEconomico = cabañas.filter(cabaña => cabaña.precio <5000); 
console.log(alojamientoEconomico);