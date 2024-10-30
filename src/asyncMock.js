const products = [
    { id: "1", name: "Smirnoff", img: "url-img", price: 100, category: "vodka", description: "Vodka Smirnoff", stock: 10 },
    { id: "2", name: "Apa", img: "url-img", price: 100, category: "beer", description: "Cerveza Apa", stock: 10 },
    { id: "3", name: "Corona", img: "url-img", price: 100, category: "beer", description: "Cerveza Corona", stock: 10 },
    { id: "4", name: "Alaris", img: "url-img", price: 100, category: "wine", description: "Vino Alaris", stock: 10 },
    { id: "5", name: "Johnnie Walker ", img: "url-img", price: 100, category: "whiskey", description: "Whisky Johnnie Walker", stock: 10 },
  ];

  export const getProducts = () => {
    return new Promise((resolve, reject) => {
      
      if (products.length > 0) {
        setTimeout(() => {
          resolve(products);
        }, 2000);
      } else {
        reject("No hay productos");
      }
    });
  };

  export const getProductById = (id) => {
    return new Promise((resolve, reject) => {
      
      if (products.length > 0) {
        const product = products.find( p => p.id === id);
        
        setTimeout(() => {
          if(!product) {
            reject(`No se encuentra el productos con el id ${id}`)
          }
          resolve(product);
        }, 2000);
      } else {
        reject("No hay productos");
      }
    });
  };