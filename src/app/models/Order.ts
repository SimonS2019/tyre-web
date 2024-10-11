export interface ProductOrder {
  productId: string;
  quantity: number;
}

export interface ContactDetails {
  name: string;
  phone: string;
  email: string;
  address: string;
}

export interface Order {
  products: ProductOrder[];
  contactDetails: ContactDetails;
  shippingPrice: number;
}
