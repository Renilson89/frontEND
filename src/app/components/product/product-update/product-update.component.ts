import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product-create/product.model';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent {
  product: Product;
constructor(private productService: ProductService , private router: Router,private route: ActivatedRoute ){}


ngOnInit():void {
  const id = this.route.snapshot.paramMap.get('id')
  this.productService.readById(id).subscribe(product => {
    this.product = product
  });
}

  updateProduct(): void{
    this.productService.update(this.product).subscribe(()=> {
      this.productService.showMessage('Produto Atualizado com Sucesso!!')
      this.router.navigate(["/products"]);
    })
  }

  cancela(): void {
    this.router.navigate(["/products"]); 
  }
}
