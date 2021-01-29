export interface Producto{
    desc: string;
    precio: number;
}

const telefono:Producto={
    desc:'Nokia A1',
    precio:150
}

const tableta:Producto={
    desc:'Ipad Air',
    precio:350
}



export function calculateISV(productos:Producto[]):[number, number]{
    let total=0;

    productos.forEach(({precio})=>{
        total += precio
    })
    return [total, total*0.15]

}

const articulos=[telefono, tableta];

const [total, isv]=calculateISV(articulos);

//console.log('ISV:', isv)
//console.log('Total:', total)