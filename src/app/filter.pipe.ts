import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gongFilter'
})
export class FilterPipe implements PipeTransform {

  transform(values: any, term : any ): any {
    // check if search term is undefined
    if(term === undefined){
    	return values;
    }else{
    	// return updated ninja array
    	return values.filter(function(value){
    		return value.name.toLowerCase().includes(term.toLowerCase());
    	});
    }
  }

}
