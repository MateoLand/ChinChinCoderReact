import { useEffect, useState } from "react";
import { ItemList } from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import db from "../../db/db.js";

export const ItemListContainer = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);

  const getProducts = () => {
    const productsRef = collection(db, 'products')
    getDocs(productsRef)
      .then((dataDb) => {
        const productsDb = dataDb.docs.map((productDb) => {
          return { id: productDb.id, ...productDb.data()}
        })

        setProducts(productsDb)
      })
  }

  const getProductsByCategory = () => {
    const productsRef = collection(db, 'products')
    const queryCategories = query(productsRef, where('category', '==', category))
    getDocs(queryCategories)
      .then((dataDb) => {
        const productsDb = dataDb.docs.map((productDb) => {
          return { id:productDb.id, ...productDb.data() }
        })

        setProducts(productsDb)
      })
  }

  useEffect(() => {
    if(category){
      getProductsByCategory()
    } else{
      getProducts()
    }
  }, [category]); // Controlamos el cambio de parámetros para recargar el componente y ejecutar el useEffect

  return <ItemList products={products} />;
};