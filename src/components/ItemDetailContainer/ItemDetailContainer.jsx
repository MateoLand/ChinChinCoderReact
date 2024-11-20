import { useEffect, useState } from "react"
import { doc, getDoc } from "firebase/firestore";
import db from "../../db/db.js";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";



export const ItemDetailContainer = () => {
    const { id } = useParams();
    const [item, setItem] = useState({});

    const getProductById = () => {
      const docRef = doc( db, 'products', id )
      getDoc(docRef)
        .then((dataDb) => {
          const productDb = { id: dataDb.id, ...dataDb.data()}
          setItem(productDb)
        })
    }

    useEffect( () => { 
      getProductById()
     }, [id])
  return (
    <>
    {item && <ItemDetail {...item} />}
    </>
  )
}