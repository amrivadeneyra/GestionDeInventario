import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from 'src/app/models/product';

@Injectable({
    providedIn: 'root'
})
export class ProductService {
    private productsSubject = new BehaviorSubject<Product[]>([]);
    products$ = this.productsSubject.asObservable();

    constructor() { }

    private saveProductsToLocalStorage(products: Product[]): void {
        localStorage.setItem('products', JSON.stringify(products));
    }

    private getProductsFromLocalStorage(): Product[] {
        const savedProducts = localStorage.getItem('products');
        return savedProducts ? JSON.parse(savedProducts) : [];
    }

    addProduct(product: Product): void {
        const currentList = this.productsSubject.value;
        const lastProductId = currentList.length > 0 ? parseInt(currentList[currentList.length - 1]._id, 10) : 0;
        const newProduct = { ...product, _id: (lastProductId + 1).toString() };
        const updatedList = [...currentList, newProduct];
        this.saveProductsToLocalStorage(updatedList);
        this.productsSubject.next(updatedList);
    }

    loadProducts(): void {
        const currentList = this.getProductsFromLocalStorage();
        this.productsSubject.next(currentList);
    }

    deleteProduct(productId: string): void {
        const currentList = this.productsSubject.value;
        const updatedList = currentList.filter(product => product._id !== productId);
        this.saveProductsToLocalStorage(updatedList);
        this.productsSubject.next(updatedList);
    }
}
