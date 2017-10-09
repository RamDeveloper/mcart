import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

import { Product } from './product';

@Injectable()
export class ProductService {
    private _productUrl = 'assets/products/mobiles.json';
    selectedProducts: any = [];
    products: any = [];
    producttype: string = 'tablet';
    username: string;
    constructor(private _http: Http) {
        if (sessionStorage.getItem("selectedProducts")) {
            this.selectedProducts = JSON.parse(sessionStorage.getItem("selectedProducts"));
        }
    }

    getProducts(): Observable<Product[]> {
        if (this.producttype === 'tablet')
            return this._http.get('assets/products/tablets.json')
                .map((response: Response) => <Product[]>response.json())
                .catch(this.handleError);
        else if (this.producttype === 'mobile')
            return this._http.get('assets/products/mobiles.json')
                .map((response: Response) => <Product[]>response.json())
                .catch(this.handleError);
    }

    getProduct(id: number): Observable<Product> {
        return this.getProducts()
            .map(products => products.filter(product => product.productId === id)[0]);
    }

    private handleError(error: Response) {
        console.log(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}
