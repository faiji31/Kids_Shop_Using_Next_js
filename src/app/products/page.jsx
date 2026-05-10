
import ProductCard from '@/components/cards/ProductsCard'
import React from 'react'
import Products from '@/components/home/Products'

export const metadata ={
    title: "All products",
    description:"Browse your regular Products on your kids daily needs"
}

const ProductPage = () => {
  return (
    <div>
      <Products />
    </div>
  )
}

export default ProductPage
