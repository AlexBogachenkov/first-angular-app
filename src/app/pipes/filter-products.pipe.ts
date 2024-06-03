import { Pipe, PipeTransform } from '@angular/core';
import {IProduct} from "../models/product";

@Pipe({
  name: 'filterProducts',
  standalone: true
})
export class FilterProductsPipe implements PipeTransform {

  transform(products: IProduct[], search: string): IProduct[] {
    return products.filter(product => product.title.toLowerCase().includes(search.toLowerCase()))
  }

}
