import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <header>
        <section>
            <div>
                <Image src={'https://i.postimg.cc/gcVsypZn/Whatbytes-logo-2.png'} alt='' width={300} height={300}/>
            </div>
            <h1>WhatBytes</h1>
        </section>
    </header>
  )
}

export default Header
