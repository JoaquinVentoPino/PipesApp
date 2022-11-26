import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'mayusculas'
})
export class MayusculasPipe implements PipeTransform{
    
    transform(arg: string, enMayusculas: boolean = true): string{
        // if(enMayusculas){
        //     return arg.toUpperCase();
        // }else{
        //     return arg.toLowerCase();
        // }

        return (enMayusculas) ? arg.toUpperCase() : arg.toLocaleLowerCase();
    }

}