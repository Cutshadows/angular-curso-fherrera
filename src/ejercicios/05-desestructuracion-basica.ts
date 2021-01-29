interface Reproductor{
    volumen: number;
    segundo: number;
    cancion:string;
    detalles:Detalles;
}
interface Detalles{
    author:string;
    anio:number;
}
const reproductor:Reproductor={
    volumen:90,
    segundo:36,
    cancion:'Number of the beast',
    detalles:{
        author:'Iron Maiden',
        anio:2009
    }
}

const {volumen, segundo, cancion, detalles}=reproductor;
const {author, anio}=detalles;
// console.log('El volumen actual es:', volumen);
// console.log('El segundo actual es:', segundo);
// console.log('La cancion actual es:', cancion);
// console.log('El author actual es:', author);
// console.log('El  actual es:', anio);


const dbz:string[]=['Gokuy', 'Vergeta', 'Tranks'];

const [goku,vergeta,tranks]=dbz;

console.log('Personaje 1:', goku)
console.log('Personaje 2:', vergeta)
console.log('Personaje 3:', tranks)



