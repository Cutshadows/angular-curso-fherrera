import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:'mayusculas'
})
export class MayusculasPipe implements PipeTransform{

    transform(text:string, enmayuscula:boolean=true):string{
        return(enmayuscula)?text.toUpperCase():text.toLowerCase();
    }

}