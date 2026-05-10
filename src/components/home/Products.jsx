import React from 'react'
import products from "@/data/toys.json";
import ProductCard from '../cards/ProductsCard';

const Products = () => {
  return (
    <div>
     <h2 className='text-4xl font-bold text-center mb-10'>Our Products</h2>

     <div className='grid grid-cols-3 gap-5'>
        {
            products.map(product=> <li key={product.title}><ProductCard product={product} /></li>)
        }
     </div>
    </div>
  )
}

export default Products
