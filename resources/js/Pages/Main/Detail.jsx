import Avatar from '@/Components/Avatar'
import Badge from '@/Components/Badge'
import Bookmark from '@/Components/Bookmark'
import Footer from '@/Components/Footer'
import Like from '@/Components/Like'
import MoreLike from '@/Components/MoreLike'
import Navbar from '@/Components/Navbar'
import Share from '@/Components/Share'
import { Head } from '@inertiajs/react'
import React, { useState } from 'react'

export default function Detail({ post, auth }) {
  const [tags, settags] = useState([
    "music", "sports", "mechanic", "K-pop", "football", "Video games"
  ])

  const [badges, setBadges] = useState([
    "music", "K-pop", "viral"
  ])

  return (
    <>
      <Head title="Detail" />
      <Navbar auth={auth} />
      <div className="max-w-7xl mx-auto p-6 lg:p-8">
        <div className='mb-6 flex gap-8'>
          <div className="blogs flex flex-col w-8/12 gap-6 card border p-4 bg-base-100">
            <h1 className='text-4xl font-bold mb-6'>
              Advice From a Software Engineer With 8 Years of Experience
            </h1>
            <div className='flex justify-between'>
              <div className='flex justify-between gap-2 items-center'>
                <Avatar />
                <div className='flex flex-col'>
                  <h5 className='text-base font-semibold'>Username</h5>
                  <label className='text-xs font-normal'>May 08</label>
                </div>
              </div>
              <div className='flex gap-2'>
                <Like />
                <Bookmark />
                <Share />
              </div>
            </div>
            <div className='content leading-relaxed'>
              <p>
                Ponam in culpa idiota aliis pravitatis. Principium ponere culpam in se justum praeceptum. Neque improperes et aliis qui non perfecte ipse docuit.
                <br />
                Quod Enchiridion Epictetus stoici scripsit. Rodrigo Abela et Technologiae apud Massachusetts instituta Opera collectio. Ex anglicus latine translata sunt.
                <br />
                Quidam alii sunt, et non est in nostra potestate. Quae omnia in nostra sententia, pursuit, cupiditatem, aversatio, ex quibus in Verbo, quicquid non suis actibus nostris. Non sunt in nostra potestate
              </p>
              <p>
                Ponam in culpa idiota aliis pravitatis. Principium ponere culpam in se justum praeceptum. Neque improperes et aliis qui non perfecte ipse docuit.
                <br />
                Quod Enchiridion Epictetus stoici scripsit. Rodrigo Abela et Technologiae apud Massachusetts instituta Opera collectio. Ex anglicus latine translata sunt.
                <br />
                Quidam alii sunt, et non est in nostra potestate. Quae omnia in nostra sententia, pursuit, cupiditatem, aversatio, ex quibus in Verbo, quicquid non suis actibus nostris. Non sunt in nostra potestate
              </p>
            </div>

            <div className="card-actions justify-start mt-8">
              {
                badges && badges.map((badge) => (
                  <Badge badge={badge} key={badge} />
                ))
              }
            </div>
          </div>
          <div className='w-4/12 flex flex-col gap-6'>
            <MoreLike />
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
