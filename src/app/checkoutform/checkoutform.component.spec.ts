import { dependenciesFromGlobalMetadata } from '@angular/compiler/src/render3/r3_factory';
import { forwardRef } from '@angular/core';
import { ComponentFixture,  fakeAsync,  TestBed, tick } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { Contact } from '../Contact';

import { CheckoutformComponent } from './checkoutform.component';

describe('CheckoutformComponent', () => {
  let component: CheckoutformComponent;
  let fixture: ComponentFixture<CheckoutformComponent>;
  const formData :Contact = {firstName:"Rahul",lastName:"Shetty",
email:"test@test.com",password:"123456"};

  beforeEach(fakeAsync( () => {
     TestBed.configureTestingModule({
      imports : [FormsModule],
      declarations: [ CheckoutformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(fakeAsync(() => {
    fixture = TestBed.createComponent(CheckoutformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(component.submitted).toBe(false);
    component.submit(formData);
    fixture.detectChanges();
    expect(component.submitted).toBe(true);
    const formHtml =fixture.nativeElement.querySelector(".my-container");
    expect(formHtml.hidden).toEqual(true);
    component.submitted = false;
    fixture.detectChanges();
    expect(formHtml.hidden).toEqual(false);

  });


  it('User input field', fakeAsync(() => {

   const email= fixture.nativeElement.querySelector("#exampleInputEmail1");
   email.value = 'I am Testing';
   email.dispatchEvent(new Event('input'));
   fixture.detectChanges();
   tick();
   const message= fixture.nativeElement.querySelector("p");
   expect(message.textContent).toMatch("I am Testing");



   

   





}));

});
