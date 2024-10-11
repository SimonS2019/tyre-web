export interface ProductOrder {
  productId: number;
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
