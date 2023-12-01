import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Product } from 'src/app/models/product';
import { Supplier } from 'src/app/models/supplier';
import { User } from 'src/app/models/user';
import { ModalComponent } from 'src/app/shared/modal/modal.component';
import { supplierValue } from 'src/app/values-force/suppliers';
import { usersValue } from 'src/app/values-force/user';
import { AuthService } from 'src/services/auth/auth.service';
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
  batches: string[] = ["A1", "137", "A115"]; 

  user: User[] = []

  currentUser: User = new User();

  productForm: FormGroup = new FormGroup({});


  constructor(
    private _formBuilder: FormBuilder,
    private _notificationService: NotificationService,
    private _productService: ProductService,
    private _dialog: MatDialog,
    private _authService: AuthService,
  ) { }

  ngOnInit(): void {
    this.suppliers = supplierValue;
    this.initProductForm();

    this.user = usersValue;
    this.currentUser = this._authService.getLoggedInUser();
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

  addNewBatch():void{

  }


  openModal(): void {

    const userLogged = this._authService.getLoggedInUser();

    const modalType = userLogged ? 'sign-out' : 'sign-in';

    this._dialog.open(ModalComponent, {
      data: {
        type: modalType,
      },
      width: '40%',
    });

  }


}
