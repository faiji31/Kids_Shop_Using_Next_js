import Image from 'next/image'
import React from 'react'

const Banner = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <Image src={"/assets/hero.png"} alt='banner' width={600} height={600}></Image>
    <div>
      <h1 className="text-5xl font-bold">আপনার শিশুকে দিন একটি সুন্দর ভবিষ্যৎ।</h1>
      <p className="py-6">
       Buy Every Toy Upto 15% Discount
      </p>
      <button className="btn btn-primary btn-outline">Get Started</button>
    </div>
  </div>
</div>
  )
}

export default Banner
