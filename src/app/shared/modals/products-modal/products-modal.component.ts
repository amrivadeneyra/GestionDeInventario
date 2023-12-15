import { formatDate } from '@angular/common';
import { ChangeDetectionStrategy, Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Category } from 'src/app/models/category';
import { Product } from 'src/app/models/product';
import { categoryOfType } from 'src/app/values-force/category';
import { NotificationService } from 'src/services/notification/notification.service';
import { ProductService } from 'src/services/product/product.service';

@Component({
  selector: 'app-products-modal',
  templateUrl: './products-modal.component.html',
  styleUrls: ['./products-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsModalComponent implements OnInit {

  private updateTimeout: any;

  categories: Category[] = [];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { data: any, },
    private _productService: ProductService,
    private _notificationService: NotificationService,
  ) { }

  ngOnInit(): void {
    this.categories = categoryOfType;
  }

  updateField(fieldName: string, event: any): void {

    this.data.data[fieldName] = event.target.value;

    if (this.updateTimeout) {
      clearTimeout(this.updateTimeout);
    }

    this.updateTimeout = setTimeout(() => {
      this.updateProduct();
    }, 1000);

  }

  updateProduct(): void {
    const updatedFields: Partial<Product> = {
      supplier: this.data.data.supplier,
      name: this.data.data.name,
      batch: this.data.data.batch,
      price: this.data.data.price,
      stock: this.data.data.stock,
      serial_number: this.data.data.serial_number,
      expiration_date: this.data.data.expiration_date,
      description: this.data.data.description,
    };

    this._productService.updateProduct(updatedFields);
    this._notificationService.showSuccess("Producto actualzado");
  }

  formatDate(expirationDate: Date | null): string {
    return expirationDate ? formatDate(expirationDate, 'dd/MM/yyyy', 'en-US') : 'N/A';
  }

}
