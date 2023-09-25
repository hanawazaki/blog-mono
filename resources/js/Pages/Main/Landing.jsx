import React, { useState } from 'react'
import { Link, Head } from '@inertiajs/react';
import Navbar from '@/Components/Navbar';
import Card from '@/Components/Card';
import TagList from '@/Components/TagList';
import FavTopic from '@/Components/FavTopic';
import Footer from '@/Components/Footer';

export default function Landing({ auth, laravelVersion, phpVersion }) {

  const [tags, settags] = useState([
    "music", "sports", "mechanic", "K-pop", "football", "Video games"
  ])

  return (
    <div className=''>
      <Head title="Home" />
      <Navbar />
      <div className="max-w-7xl mx-auto p-6 lg:p-8">
        <div className='list-blog mb-6 flex gap-8'>
          <div className="blogs flex flex-col w-8/12 gap-6">
            <Card />
            <Card />
            <Card />
          </div>
          <div className='w-4/12 flex flex-col gap-6'>
            <TagList tags={tags} />
            <FavTopic />
          </div>
        </div>
      </div>
      <Footer />
    </div >
  )
}
