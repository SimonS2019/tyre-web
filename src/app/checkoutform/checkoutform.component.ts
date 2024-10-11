import { Component, OnInit } from '@angular/core';
import { Contact } from '../Contact';

@Component({
  selector: 'app-checkoutform',
  templateUrl: './checkoutform.component.html',
  styleUrls: ['./checkoutform.component.css']
})
export class CheckoutformComponent implements OnInit {
    msg : string = "gmail.com";
   contact = new Contact();
   submitted = false;
  constructor() { }

  ngOnInit(): void {
  }

  submit(form)
  {
   this.contact.firstName= form.firstName;
   this.contact.lastName =form.lastName;
   this.contact.email=form.email;
   window.alert("Cart is successfully Submitted by"+this.contact.firstName);
   this.submitted = true;
   

    console.log(form);
    //
  }
}
