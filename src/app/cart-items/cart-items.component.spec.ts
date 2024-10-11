import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CartService } from '../cart.service';

import { CartItemsComponent } from './cart-items.component';
import { MockCartService } from './MockCartService';

describe('CartItemsComponent', () => {
  let component: CartItemsComponent;
  let fixture: ComponentFixture<CartItemsComponent>;
  let cartService : CartService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartItemsComponent ],
     providers :[{provide : CartService,useClass : MockCartService}]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartItemsComponent);
    cartService =TestBed.inject(CartService);

    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(component.sum).toBe(35);
    // component.onKey(cartService.getProducts()[1],3);
    // fixture.detectChanges();
    // expect(component.sum).toBe(75);
    // const el :HTMLElement =fixture.nativeElement;
    // expect(el.querySelector(".mint").textContent).toBe("83");
    



  
  });
});
