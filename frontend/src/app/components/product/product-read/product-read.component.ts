import { ProductService } from './../product.service';
import { Product } from './../product.model';

import {Component} from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute, Route } from '@angular/router';


@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})

export class ProductReadComponent {
  displayedColumns: string[] = ['id', 'name', 'price', 'action'];
  //data: Product[];
  data$: Observable<Product[]>
  product: Product;

  constructor(private productService: ProductService,
              private route: ActivatedRoute ) {
    /*this.productService.read().subscribe({ 
      next: (products: Product[]) => {
        this.data = products;
      }
    });*/
    this.data$ = this.productService.read();
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.productService.readById(id!).subscribe(product => {
      this.product = product;
    });
  }
}
