import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { NotificationService } from 'src/services/notification/notification.service';
import { ProductService } from 'src/services/product/product.service';
import { MatDialog } from '@angular/material/dialog';
import { ProductsModalComponent } from 'src/app/shared/modals/products-modal/products-modal.component';
import { Observable, map } from 'rxjs';
import { ConfirmationModalComponent } from 'src/app/shared/modals/confirmation-modal/confirmation-modal.component';

@Component({
  selector: 'app-products',
  templateUrl: './inventory-products.component.html',
  styleUrls: ['./inventory-products.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InventoryProductsComponent implements OnInit {

  @Input() openFromModal: boolean = false;
  @Input() data: Product = new Product();

  products: Product[] = [];
  currentProduct: Product = new Product();

  searchTerm: string = '';

  constructor(
    private _productService: ProductService,
    private _notificationService: NotificationService,
    private _router: Router,
    private _dialog: MatDialog,
    private _changeDetection: ChangeDetectorRef,

  ) { }

  ngOnInit(): void {

    this.getProducts()
  }

  getProducts(): void {
    this._productService.products$.subscribe(products => {
      this.products = products;

    });

    this._productService.loadProducts();
    this._changeDetection.detectChanges();
  }

  deleteProduct(product: Product): void {

    const dialogRef = this._dialog.open(ConfirmationModalComponent, {
      data: {
        name: product.name
      },
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'confirm') {
        this._productService.deleteProduct(product._id);
        this._notificationService.showSuccess("Producto eliminado con éxito");
      }
    });
    
  }

  filterProducts(): Observable<Product[]> {
    return this._productService.products$.pipe(
      map(products => products.filter(product =>
        product.name.toLowerCase().includes(this.searchTerm.toLowerCase())
      ))
    );
  }

  goNewProduct() {
    this._router.navigate(['/new-products']);
  }

  clearSearch(): void {
    this.searchTerm = '';
  }

  openModal(product: Product): void {
    this.currentProduct = product;


    this._dialog.open(ProductsModalComponent, {
      data: {
        data: this.currentProduct
      },
      width: '35%',
      height: '75%'
    })

    this._changeDetection.detectChanges();
  }

}
