import db from "../db/db.js";
import { addDoc, collection } from "firebase/firestore";

const products = [
    { id: "1", name: "Smirnoff", img: "/productImages/smirnoffPic.webp", price: 100, category: "vodka", description: "Vodka Smirnoff", stock: 10 },
    { id: "2", name: "Apa", img: "/productImages/apaPic.webp", price: 100, category: "beer", description: "Cerveza Apa", stock: 10 },
    { id: "3", name: "Corona", img: "/productImages/coronaPic.webp", price: 100, category: "beer", description: "Cerveza Corona", stock: 10 },
    { id: "4", name: "Alaris", img: "/productImages/alarisPic.webp", price: 100, category: "wine", description: "Vino Alaris", stock: 10 },
    { id: "5", name: "Johnnie Walker ", img: "/productImages/johnniePic.webp", price: 100, category: "whiskey", description: "Whisky Johnnie Walker", stock: 10 },
  ];

  const seedProducts = () => {
    const productsRef = collection(db, "products")
    products.map(( {id, ...dataProduct} ) => {
        addDoc(productsRef, dataProduct)
    })
    console.log("productos subidos")
    return
  }

  seedProducts();