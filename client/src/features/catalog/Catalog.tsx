import { useEffect, useState } from "react";
import { Product } from "../../app/models/Product"
import ProductList from "./ProductList";


export default function Catalog() {

const [products, setProducts] = useState<Product[]>([])

useEffect(() => {
  fetch("http://localhost:5000/api/products")
  .then(response => response.json())
  .then(data => setProducts(data))
  .catch(err => console.log(err))
}, [])


    return (
       <>
       <ProductList products={products}/>
       </>
    )
};