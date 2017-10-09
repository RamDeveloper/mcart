import { Component } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';

import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
    templateUrl: 'product-detail.component.html',
    styleUrls: ['product-detail.component.css']
})
export class ProductDetailComponent {
    pageTitle: string = 'Product Detail';
    product: Product;
    imageWidth: number = 100;
    imageMargin: number = 2;
    errorMessage: string;
    id: number = 0;

    constructor(private route: ActivatedRoute,
        private router: Router, public productService: ProductService) {
        this.id = +this.route.snapshot.paramMap.get('id');
        this.product = this.productService.products.filter((product: any) => product.productId === this.id)[0];
    }

    onBack(): void {
        this.router.navigate(['/products']);
    }
}
