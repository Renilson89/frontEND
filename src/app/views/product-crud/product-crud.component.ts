import { Component } from '@angular/core';
import {Router} from '@angular/router';
import { HeaderService } from 'src/app/components/template/header/header.service';

@Component({
  selector: 'app-product-crud',
  templateUrl: './product-crud.component.html',
  styleUrls: ['./product-crud.component.css']
})
export class ProductCrudComponent {

  constructor(private router: Router, private headeService: HeaderService){
    this.headeService.headerData = {
      title: 'Cadastro de Produto',
      icon: 'storefront',
      routeUrl: '/products'
    }
  }

  navigateToProductCreate(): void {
    this.router.navigate(['/products/create'])
  }

}
