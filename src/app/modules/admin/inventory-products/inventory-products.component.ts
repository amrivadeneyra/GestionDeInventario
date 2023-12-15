import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { NotificationService } from 'src/services/notification/notification.service';
import { ProductService } from 'src/services/product/product.service';
import { MatDialog } from '@angular/material/dialog';
import { ProductsModalComponent } from 'src/app/shared/modals/products-modal/products-modal.component';
import { Observable, map } from 'rxjs';
import { ConfirmationModalComponent } from 'src/app/shared/modals/confirmation-modal/confirmation-modal.component';
import { categoryOfType } from 'src/app/values-force/category';
import { Category } from 'src/app/models/category';
import { productsValue } from 'src/app/values-force/products';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/services/auth/auth.service';
import { ModalComponent } from 'src/app/shared/modal/modal.component';

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

  currentUser: User = new User();

  searchTerm: string = '';
  categories: Category[] = [];

  constructor(
    private _productService: ProductService,
    private _notificationService: NotificationService,
    private _router: Router,
    private _dialog: MatDialog,
    private _changeDetection: ChangeDetectorRef,
    private _authService: AuthService,

  ) { }

  ngOnInit(): void {
    this.getProducts()
    this.categories = categoryOfType;
  }

  getProducts(): void {
    this._productService.products$.subscribe(products => {

      this.products = [...products];

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
    /* return this.products.filter(product =>
      product.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    ) */
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

  openModalLoggin(): void {

    const userLogged = this._authService.getLoggedInUser();

    const modalType = userLogged ? 'sign-out' : 'sign-in';

    this._dialog.open(ModalComponent, {
      data: {
        type: modalType,
      },
      width: '40%',
    });

  }

  generateReport(): void {
    const reportWindow = window.open('', '_blank');

    if (reportWindow) {
      const currentDate = new Date().toLocaleDateString();

      reportWindow.document.write('<html><head><title>Reporte del Día - ' + currentDate + '</title>');
      reportWindow.document.write('<style>');
      reportWindow.document.write('body { background-color: #f5f5f5; font-family: Arial, sans-serif; }');
      reportWindow.document.write('.container { max-width: 800px; margin: 50px auto; padding: 20px; background-color: #ffffff; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); }');
      reportWindow.document.write('table { width: 100%; border-collapse: collapse; margin-top: 20px; }');
      reportWindow.document.write('th, td { border: 1px solid #dddddd; text-align: left; padding: 12px; }');
      reportWindow.document.write('th { background-color: #4CAF50; color: white; }');
      reportWindow.document.write('h1 { text-align: center; color: #333; }');
      reportWindow.document.write('.download-btn { display: block; margin-top: 20px; padding: 10px 15px; background-color: #4CAF50; color: white; text-decoration: none; text-align: center; cursor: pointer; }');
      reportWindow.document.write('</style>');
      reportWindow.document.write('</head><body>');

      reportWindow.document.write('<div class="container">');
      reportWindow.document.write('<h1>Reporte del Día - ' + currentDate + '</h1>');

      reportWindow.document.write('<table>');
      reportWindow.document.write('<thead>');
      reportWindow.document.write('<tr>');
      reportWindow.document.write('<th>Nombre</th>');
      reportWindow.document.write('<th>Lote</th>');
      reportWindow.document.write('<th>Precio</th>');
      reportWindow.document.write('<th>Cantidad</th>');
      reportWindow.document.write('<th>Categoría</th>');
      reportWindow.document.write('<th>Fecha de vencimiento</th>');
      reportWindow.document.write('<th>Número de serie</th>');
      reportWindow.document.write('<th>Descripción</th>');
      reportWindow.document.write('</tr>');
      reportWindow.document.write('</thead>');
      reportWindow.document.write('<tbody>');

      this.products.forEach(product => {
        reportWindow.document.write('<tr>');
        reportWindow.document.write('<td>' + product.name + '</td>');
        reportWindow.document.write('<td>' + product.batch + '</td>');
        reportWindow.document.write('<td>' + product.price + '</td>');
        reportWindow.document.write('<td>' + product.stock + '</td>');
        reportWindow.document.write('<td>' + product.category + '</td>');
        reportWindow.document.write('<td>' + (product.expiration_date ? new Date(product.expiration_date).toLocaleDateString() : 'N/A') + '</td>');
        reportWindow.document.write('<td>' + product.serial_number + '</td>');
        reportWindow.document.write('<td>' + product.description + '</td>');
        reportWindow.document.write('</tr>');
      });


      reportWindow.document.write('</tbody>');
      reportWindow.document.write('</table>');

      reportWindow.document.write('</body></html>');
      reportWindow.document.close();
    } else {
      alert('No se pudo abrir la ventana del informe. Asegúrate de desactivar el bloqueo de ventanas emergentes.');
    }
  }



  generateReportPDF(): void {
    const currentDate = new Date().toLocaleDateString();

    const printWindow = window.open('', '_blank');

    if (printWindow) {
      printWindow.document.write('<html><head><title>Reporte del Día - ' + currentDate + '</title>');
      printWindow.document.write('<style>');
      printWindow.document.write('body { background-color: #f5f5f5; font-family: Arial, sans-serif; }');
      printWindow.document.write('.container { max-width: 800px; margin: 50px auto; padding: 20px; background-color: #ffffff; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); }');
      printWindow.document.write('table { width: 100%; border-collapse: collapse; margin-top: 20px; }');
      printWindow.document.write('th, td { border: 1px solid #dddddd; text-align: left; padding: 12px; }');
      printWindow.document.write('th { background-color: #4CAF50; color: white; }');
      printWindow.document.write('h1 { text-align: center; color: #333; }');
      printWindow.document.write('.no-print { display: none; }');
      printWindow.document.write('</style>');
      printWindow.document.write('</head><body>');

      printWindow.document.write('<div class="container">');
      printWindow.document.write('<h1>Reporte del Día - ' + currentDate + '</h1>');

      printWindow.document.write('<table>');
      printWindow.document.write('<thead>');
      printWindow.document.write('<tr>');
      printWindow.document.write('<th>Nombre</th>');
      printWindow.document.write('<th>Lote</th>');
      printWindow.document.write('<th>Precio</th>');
      printWindow.document.write('<th>Cantidad</th>');
      printWindow.document.write('<th>Categoría</th>');
      printWindow.document.write('<th>Fecha de vencimiento</th>');
      printWindow.document.write('<th>Número de serie</th>');
      printWindow.document.write('<th>Descripción</th>');
      printWindow.document.write('</tr>');
      printWindow.document.write('</thead>');
      printWindow.document.write('<tbody>');

      this.products.forEach(product => {
        printWindow.document.write('<tr>');
        printWindow.document.write('<td>' + product.name + '</td>');
        printWindow.document.write('<td>' + product.batch + '</td>');
        printWindow.document.write('<td>' + product.price + '</td>');
        printWindow.document.write('<td>' + product.stock + '</td>');
        printWindow.document.write('<td>' + product.category + '</td>');
        printWindow.document.write('<td>' + (product.expiration_date ? new Date(product.expiration_date).toLocaleDateString() : 'N/A') + '</td>');
        printWindow.document.write('<td>' + product.serial_number + '</td>');
        printWindow.document.write('<td>' + product.description + '</td>');
        printWindow.document.write('</tr>');
      });

      printWindow.document.write('</tbody>');
      printWindow.document.write('</table>');

      printWindow.document.write('</div>');

      printWindow.document.write('</body></html>');
      printWindow.document.close();

      printWindow.onload = () => {
        printWindow.print();
        printWindow.onafterprint = () => {
          printWindow.close();
        };
      };
    } else {
      alert('No se pudo abrir la ventana del informe. Asegúrate de desactivar el bloqueo de ventanas emergentes.');
    }
  }


}
