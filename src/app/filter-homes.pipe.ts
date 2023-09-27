import {Pipe, PipeTransform} from '@angular/core';
import {HousingLocation} from "./housinglocation";

@Pipe({
  name: 'filterHomes',
  standalone: true
})
export class FilterHomesPipe implements PipeTransform {
  transform(houses: HousingLocation[], search: string): HousingLocation[] {
    return houses.filter(h => h.city.toLowerCase().includes(search.toLowerCase()));
  }

}
