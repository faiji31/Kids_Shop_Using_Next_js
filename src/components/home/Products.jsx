import React from 'react'
import products from "@/data/toys.json";

const Products = () => {
  return (
    <div>
     <h2 className='text-4xl font-bold text-center mb-10'>Our Products</h2>

     <div>
        {
            products.map(product=> <li key={product.title}>{product.title}</li>)
        }
     </div>
    </div>
  )
}

export default Products
