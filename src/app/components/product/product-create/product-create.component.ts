import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import {Router} from '@angular/router'
import { Product } from './product.model';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent {

  product: Product = {
    name: '',
    price: 0
  }


    constructor(private productService: ProductService, private router: Router ){}

    ngOnInit(): void{
    }

    createProduct(): void {
        this.productService.create(this.product).
        subscribe(()=>{
          this.productService.showMessage('Operação executada com sucesso!')
          this.router.navigate(['/products'])
        })


    }

    cancela(): void {
      this.router.navigate(['/products'])
    }

}
