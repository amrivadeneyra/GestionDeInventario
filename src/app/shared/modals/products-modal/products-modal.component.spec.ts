import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsModalComponent } from './products-modal.component';

describe('ModalComponent', () => {
  let component: ProductsModalComponent;
  let fixture: ComponentFixture<ProductsModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductsModalComponent]
    });
    fixture = TestBed.createComponent(ProductsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
