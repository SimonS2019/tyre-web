export class MockCartService {
  getProducts() {
    return [
      { 
        id: 1,
        name: 'Michelin Pilot Sport 4',
        price: 699,
        quantity: 4,
        status: '4 left',
        description: "High-performance tire for sports cars",
        imgaddress: "https://dxm.contentcenter.michelin.com/api/wedia/dam/transform/b98rpyxf61b4xe194hr9qcgqyy/4w-238_3528700093414_tire_michelin_pilot-sport-4_245-slash-40-zr18-97y-xl_a_main_1-30_nopad.webp?t=resize&height=500"
      },
      {
        id: 2,
        name: 'Bridgestone DriveGuard',
        price: 710,
        quantity: 2,
        status: '2 left',
        description: "Run-flat tire for enhanced safety",
        imgaddress: "https://www.wheels-alive.co.uk/wp-content/uploads/2020/05/Bridgestone-DriveGuard-full-tyre-scaled.jpg"
      },
      {
        id: 3,
        name: 'Goodyear Eagle F1',
        price: 650,
        quantity: 1,
        status: '1 left',
        description: "Ultra high-performance tire for superior handling",
        imgaddress: "https://www.carpockets.co.ke/cdn/shop/articles/the-secret-numbers-on-your-tyres-and-what-they-mean-carpockets_817d93d5-bec3-42a4-ad28-4ed97ea8ea58.jpg?v=1707828269"
      }
    ];
  }
}