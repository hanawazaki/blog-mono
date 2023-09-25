import React, { useState } from 'react'
import Badge from './Badge'
import { Link } from '@inertiajs/react'
import Bookmark from './Bookmark'

export default function Card() {
  const [badges, setBadges] = useState([
    "music", "K-pop", "viral"
  ])

  return (
    <div className="card flex flex-row bg-base-100 shadow-xl border">
      <div className="card-body flex flex-1 w-96">
        <div className='flex flex-col'>
          <label className='text-xs'>Admin | Jul 19</label>
          <div className='flex justify-between items-start gap-1 mb-5 mt-3'>
            <Link href="/detail" className="card-title">
              Lorem ipsum dolor sit amet, consec tetur adipisicing elit.
            </Link>
            <Bookmark />
          </div>
          <Link href='/detail'>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus enim possimus aspernatur alias hic magnam? Dicta provident veritatis eos temporibus, eligendi itaque est animi doloribus!</p>
          </Link>
          <div className="card-actions justify-start mt-8">
            {
              badges && badges.map((badge) => (
                <Badge badge={badge} key={badge} />
              ))
            }
          </div>
        </div>
      </div>
      <figure>
        <Link href='/detail'>
          <img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" className='w-80' alt="Shoes" />
        </Link>
      </figure>
    </div >
  )
}
