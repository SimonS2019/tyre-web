export interface Product {
  _id?: string;
  name: string;
  price: number;
  quantity: number;
  description: string;
  img: any;
  imgType: string; // MIME type (e.g., 'image/jpeg')
  overview: string; // Detailed overview (about 100 words)
  specifications: string; // Product specifications as a string
  performance_and_warranty: string; // Performance and warranty details as a string
}
