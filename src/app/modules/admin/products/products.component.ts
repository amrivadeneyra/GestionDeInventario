import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Category } from 'src/app/models/category';
import { Product } from 'src/app/models/product';
import { User } from 'src/app/models/user';
import { ModalComponent } from 'src/app/shared/modal/modal.component';
import { categoryValue } from 'src/app/values-force/category';
import { productsValue } from 'src/app/values-force/products';
import { usersValue } from 'src/app/values-force/user';
import { AuthService } from 'src/services/auth/auth.service';
import { NotificationService } from 'src/services/notification/notification.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsComponent implements OnInit {

  products: Product[] = [];
  categories: Category[] = [];
  productsOnSearch: Product[] = []

  user: User[] = []

  currentUser: User = new User();

  selectedCategory: number = 0;

  searchTerm: string = '';

  constructor(
    private notificationService: NotificationService,
    private _dialog: MatDialog,
    private _authService: AuthService,
  ) { }

  /**
  * OnInit
  */
  ngOnInit(): void {
    this.products = productsValue;
    this.categories = categoryValue;

    this.user = usersValue;
    this.currentUser = this._authService.getLoggedInUser();
  }

  /**
   * 
   * @param product 
   */
  addToCart(product: Product) {
    // Recuperar productos existentes del localStorage
    const existingProductsString = localStorage.getItem('cart');
    const existingProducts: Product[] = existingProductsString ? JSON.parse(existingProductsString) : [];

    // Agregar el nuevo producto al array
    existingProducts.push(product);

    // Guardar el array actualizado en el localStorage
    localStorage.setItem('cart', JSON.stringify(existingProducts));

    this.notificationService.showSuccess("Se añadió correctamente su producto al carrito de compras.")

  }

  /**
   * 
   * @param product 
   */
  increaseQuantity(product: Product) {
    product.quantity = (product.quantity || 1) + 1;

  }

  /**
   * 
   * @param product 
   */
  decreaseQuantity(product: Product) {
    if (product.quantity && product.quantity > 1) {
      product.quantity -= 1;
    }
  }

  groupedEvent(selectedCategoryId: number): void {
    this.selectedCategory = selectedCategoryId;
  }

  filteredProducts(): Product[] {
    if (!this.selectedCategory) {
      return this.products;
    } else {
      // Filtrar productos por la categoría seleccionada
      return this.products.filter(product => product.category === this.selectedCategory);
    }
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

  /**
   * 
   * @param search 
   */
  onSearchChange(search: string): any {
    this.productsOnSearch = this.filterSearch(search)
  }

  /**
   * 
   * @param searchTerm 
   * @returns 
   */
  filterSearch(searchTerm: string) {
    const filter = [...productsValue]
    searchTerm = searchTerm.toLowerCase();
    return filter.filter(f => f.name.toLowerCase().includes(searchTerm));

  }

  /**
   * 
   */
  clearSearch(): void {
    this.searchTerm = '';
  }
}
