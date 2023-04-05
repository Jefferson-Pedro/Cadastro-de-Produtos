import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit{

  product: Product

  constructor(private productService: ProductService, 
              private router:Router,
              private route: ActivatedRoute){}

  ngOnInit(): void {
   const id = this.route.snapshot.paramMap.get('id');
   this.productService.readById(id).subscribe(product => {
   this.product = product;
   });
  }

  deleteProduct(): void {
    this.productService.delete(`${this.product.id}`).subscribe({
      next: (product) => {
        this.productService.showMessage('Produto excluido com sucesso!');
        this.router.navigate(['/products']);
      },
      error(err) {
          this.ProductService.ShowErrorMessage('Falha ao excluir produto!');
      },
    });
  }

  cancel(): void {
    this.router.navigate(['/products']);
  }

}
