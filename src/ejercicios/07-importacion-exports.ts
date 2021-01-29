import { Producto, calculateISV } from './06-desetructuracion-argumentos';



const carritoCompras:Producto[]=[
    {
        desc:'Telefono 1',
        precio: 250
    },
    {
        desc:'Telefono 2',
        precio: 150
    }
];

const [total, isv]=calculateISV(carritoCompras)

console.log('total: ',total)
console.log('isv: ', isv)
