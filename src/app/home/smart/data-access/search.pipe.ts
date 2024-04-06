import { Pipe, PipeTransform } from '@angular/core';
import { Services, ServicesList } from './body-interface';

@Pipe({
  name: 'search',
  standalone: true
})
export class SearchPipe implements PipeTransform {
  foundError!: ServicesList[];
  transform(
    value: ServicesList[],
    filterString: string,
  ): ServicesList[] {
    let result: ServicesList[] = [];
    let res: Services[]=[];
    if (!value || !filterString) {
      return value;
    }
    if (value) {
      value.forEach((filters: ServicesList) => {
        let customFilter = filters.services;
        customFilter.forEach((filter: any) => {
          if (
            filter['name']
              .trim()
              .toLowerCase()
              .includes(filterString.toLowerCase())
          ) {
            res.push(filter);
          }
        })
        if(res.length>0){
          result.push({services:res,name:""}); 
        }    
      });
      if (result.length > 0) {
        result.splice(1,result.length-1)
        return result;
      }
    }
    this.foundError = [
      {services: [
        {
          name: 'No Data Found for this keyword',
          img: '',
          background:''
        }
      ],name:""}  
    ];
    return this.foundError;
  }
}