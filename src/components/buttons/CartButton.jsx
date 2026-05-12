"use client"

import { ShoppingCart } from 'lucide-react'
import { useRouter } from 'next/navigation';
import React from 'react'

const CartButton = ({product}) => {
    const isLogin = false;
    const router = useRouter()

    const add2toCart = () => {
        if (isLogin) alert(product._id)
        else {
            router.push(`/login?callbackUrl=/products`)
        }
    }

    return (
        <div>
            <button 
                onClick={add2toCart}
                className="mt-8 w-full md:w-auto bg-primary text-white px-8 py-4 rounded-2xl font-semibold hover:bg-primary/90 transition flex items-center justify-center gap-2 cursor-pointer"
            >
                <ShoppingCart size={20} />
                Add to Cart
            </button>
        </div>
    )
}

export default CartButton
