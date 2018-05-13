import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    value.sort((x:any,y:any)=>{
      if(x.name<y.name)
      {
        return -1;
      }
      else if(x.name>y.name)
      {
        return 1;
      }
      else{
        return 0;
      }
    });
    return value;
  }
    
 

}
