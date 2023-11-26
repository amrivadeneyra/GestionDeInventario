import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product } from 'src/app/models/product';
import { Supplier } from 'src/app/models/supplier';
import { supplierValue } from 'src/app/values-force/suppliers';
import { NotificationService } from 'src/services/notification/notification.service';
import { ProductService } from 'src/services/product/product.service';

@Component({
  selector: 'app-new-products',
  templateUrl: './new-products.component.html',
  styleUrls: ['./new-products.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewProductsComponent implements OnInit {

  suppliers: Supplier[] = []

  productForm: FormGroup = new FormGroup({});


  constructor(
    private _formBuilder: FormBuilder,
    private _notificationService: NotificationService,
    private _productService: ProductService,
  ) { }

  ngOnInit(): void {
    this.suppliers = supplierValue;
    this.initProductForm();
  }

  initProductForm(): void {
    this.productForm = this._formBuilder.group({
      name: ['', Validators.required],
      price: ['', Validators.required],
      stock: ['', Validators.required],
      batch: ['', Validators.required],
      description: [''],
      category: [''],
      image_url: [''],
      supplier: ['', Validators.required],
      serial_number: ['', Validators.required]

    })
  }

  onSubmit(): void {

    if (!this.productForm.valid) {
      this._notificationService.showWarning("Faltan completar campos");
      return
    }
    const product: Product = new Product(this.productForm.value);

    this.createProduct(product);

    this.productForm.reset();
  }

  createProduct(product: Product): void {
    this._productService.addProduct(product);
    this._notificationService.showSuccess("Producto creado con éxito");

  }


}
