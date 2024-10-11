import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Product } from 'src/app/models/product';

import { AlertDetailsComponent } from './alert-details.component';

describe('AlertDetailsComponent', () => {
  let component: AlertDetailsComponent;
  let fixture: ComponentFixture<AlertDetailsComponent>;
  const stubProduct: Product = {
    id: 1,
    name: 'Michelin Pilot Sport 4',
    price: 699,
    quantity: 0,
    status: 'Out of stock',
    description: 'High-performance tire for sports cars',
    imgaddress:
      'https://dxm.contentcenter.michelin.com/api/wedia/dam/transform/b98rpyxf61b4xe194hr9qcgqyy/4w-238_3528700093414_tire_michelin_pilot-sport-4_245-slash-40-zr18-97y-xl_a_main_1-30_nopad.webp?t=resize&height=500',
  };
  const stubProduct2: Product = {
    id: 2,
    name: 'Bridgestone DriveGuard',
    price: 710,
    quantity: 2,
    status: 'In stock',
    description: 'Run-flat tire for enhanced safety',
    imgaddress:
      'https://www.wheels-alive.co.uk/wp-content/uploads/2020/05/Bridgestone-DriveGuard-full-tyre-scaled.jpg',
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AlertDetailsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertDetailsComponent);
    component = fixture.componentInstance;
    component.product = stubProduct;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    const el: HTMLElement = fixture.nativeElement;
    const p = el.querySelector('p');
    expect(p.textContent).toEqual('Course is available for discount');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    const el: HTMLElement = fixture.nativeElement;
    const p = el.querySelector('p');
    expect(p.textContent).toEqual('Course is available for discount');
  });

  it('Verify Paragraph logic', () => {
    expect(component).toBeTruthy();
    const el: HTMLElement = fixture.nativeElement;
    const p = el.querySelectorAll('p');
    expect(p.length).toEqual(2);
    component.product = stubProduct2;
    fixture.detectChanges();
    const el2: HTMLElement = fixture.nativeElement;
    const p2 = el2.querySelectorAll('p');
    expect(p2.length).toEqual(0);
  });

  it('Verify Paragraph logic', () => {
    component.product = stubProduct;
    fixture.detectChanges();
    let selectedproduct: Product;
    component.notify.subscribe((product) => (selectedproduct = product));
    component.clickChildMe();
    expect(selectedproduct).toEqual(stubProduct);
    //expect(selectedproduct).toEqual(stubProduct2);
  });
});
