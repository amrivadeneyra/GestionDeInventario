import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { NotificationService } from 'src/services/notification/notification.service';
import { ProductService } from 'src/services/product/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: Product[] = []

  constructor(
    private _productService: ProductService,
    private _notificationService: NotificationService,
  ) { }

  ngOnInit(): void {
    this.getProducts()

  }

  getProducts(): void {
    this._productService.products$.subscribe(products => {
      this.products = products;
    });

    this._productService.loadProducts();
  }

  deleteProduct(product: Product): void {
    const confirmation = confirm(`¿Estás seguro de que deseas eliminar "${product.name}"?`);

    if (confirmation) {
      this._productService.deleteProduct(product._id);
      this._notificationService.showSuccess("Producto eliminado con éxito");
    }
  }
}
