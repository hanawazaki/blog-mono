import { Link } from '@inertiajs/react'
import React from 'react'

export default function Badge({ badge }) {
  return (
    <Link href="#" className='badge badge-outline transition-all ease-in-out duration-500 hover:bg-black hover:text-white'>{badge}</Link>
  )
}
