import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Logo = () => {
  return (
    <div>
      <Link className='flex items-center gap-1' href={"/"}>

      <Image alt='heroshoplogo' height={50} width={40} src={"/assets/logo.png"}></Image>
      <h2 className='text-xl font-bold'>Hero <span className='text-primary'> KidZ</span></h2>
      
      </Link>
    </div>
  )
}

export default Logo
