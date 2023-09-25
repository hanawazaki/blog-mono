import { Link } from '@inertiajs/react'
import React from 'react'

export default function Navbar({ auth }) {
  console.log('auth', auth)

  if (auth.user !== null) {
    console.log('user logged in')
  } else {
    console.log('user logged out')
  }
  return (
    <div className="navbar bg-base-100 flex justify-between">
      <Link href="/" className="btn btn-ghost normal-case text-xl">My Blog</Link>
      <div className="form-control">
        <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
      </div>
      {
        auth.user !== null ? (
          <div className='flex gap-5 items-center'>
            <Link href={route('createPost')} className='btn btn-primary btn-outline btn-sm' >Create Post</Link>
            <div className="dropdown dropdown-end px-4 ">
              <div className='flex gap-2 items-center' tabIndex={0}>
                <label className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                  </div>
                </label>
                <label className="normal-case text-base">{auth.user.name}</label>
              </div>
              <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                <li>
                  <a className="justify-between">
                    Profile
                  </a>
                </li>
                <li><Link href={route('user.dashboard.index')}>Dashboard</Link></li>
                <li><Link method="post" as="button" href={route('logout')}>Logout</Link></li>
              </ul>
            </div>
          </div>
        ) : (
          <div className='flex gap-5 items-center'>
            <Link href='/login' className='btn btn-primary btn-sm'>Sign In</Link>
            <Link href='/register' className='btn btn-secondary btn-sm'>Sign Up</Link>
          </div>
        )
      }
    </div>
  )
}
