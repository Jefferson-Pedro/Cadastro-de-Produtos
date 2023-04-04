import { Product } from './../product.model';
import { ProductService } from '../product.service';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css'],
})
export class ProductUpdateComponent implements OnInit {

  product: Product = {
    name: '',
    price: null
  }

  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.productService.readById(id!).subscribe(product => {
      this.product = product;
    });
  }
  
  updateProduct(): void {
    this.productService.update(this.product).subscribe({
      next: () => {
      this.productService.showMessage('Producto atualizado com sucesso!');
      this.router.navigate(['products']);
      },
      error: (error) => { 
        this.productService.ShowErrorMessage('Erro ao alterar o produto!') 
      }
    });
  }

  cancel(): void {
    this.router.navigate(['products']);
  }
}
