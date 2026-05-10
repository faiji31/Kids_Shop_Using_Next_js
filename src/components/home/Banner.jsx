import { fontBangla } from '@/app/layout'
import Image from 'next/image'
import React from 'react'

const Banner = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <Image src={"/assets/hero.png"} alt='banner' width={600} height={600}></Image>
    <div>
      <h1 className={`text-7xl font-bold ${fontBangla.className}`}>আপনার শিশুকে দিন <span className='text-primary'>একটি সুন্দর ভবিষ্যৎ।</span></h1>
      <p className="py-6 text-2xl">
       Buy Every Toy Upto 15% Discount
      </p>
      <button className="btn btn-primary btn-outline">Explore Products</button>
    </div>
  </div>
</div>
  )
}

export default Banner
