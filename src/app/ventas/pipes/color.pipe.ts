import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:'color'
})
export class ColorPipe implements PipeTransform{

    transform(vuela:number):string{
        return(vuela)?'vuela':'no vuela';
    }

}