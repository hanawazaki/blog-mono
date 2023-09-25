import { Link } from '@inertiajs/react'
import React from 'react'

export default function Navbar() {
  return (
    <div className="navbar bg-base-100 flex justify-between">
      <Link href="/" className="btn btn-ghost normal-case text-xl">My Blog</Link>
      <div className="form-control">
        <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
      </div>
      <div className='flex gap-5 items-center'>
        <button className='btn btn-primary btn-outline btn-sm'>Create Post</button>
        <div className="dropdown dropdown-end px-4 ">
          <div className='flex gap-2 items-center' tabIndex={0}>
            <label className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </label>
            <label className="normal-case text-base">User 1</label>
          </div>
          <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
            <li>
              <a className="justify-between">
                Profile
              </a>
            </li>
            <li><a>Dashboard</a></li>
            <li><a>Logout</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}
