import React from 'react'
import Link from 'next/link'
const Nav = () => {
  return (
    <div><header className="flex gap-5 py-5 px-5 text-center bg-red-600 text-white">
        <Link href="\">Home</Link>
        <Link href="\name">Name</Link>
        <Link href="\name\address">Address</Link>
        <Link href="\name\address\contact">Contact</Link>
      </header> </div>
        
  )
}

export default Nav