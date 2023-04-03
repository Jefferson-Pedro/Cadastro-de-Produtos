import { ProductService } from './../product.service';
import { Product } from './../product.model';

import {Component} from '@angular/core';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})

export class ProductReadComponent {
  displayedColumns: string[] = ['id', 'name', 'price', 'action'];
  //data: Product[];
  data$: Observable<Product[]>

  constructor(private productService: ProductService) {
    /*this.productService.read().subscribe({ 
      next: (products: Product[]) => {
        this.data = products;
      }
    });*/
    this.data$ = this.productService.read();
  }

  ngOnInit(): void {}

}
