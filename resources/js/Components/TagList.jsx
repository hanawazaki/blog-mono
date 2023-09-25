import React from 'react'
import Badge from './Badge'

export default function TagList({ tags }) {
  return (
    <div className="card w-96 border bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title mb-8">Tags</h2>
        <div className='flex flex-wrap gap-3'>
          {
            tags && tags.map((tag) => (
              <Badge badge={tag} key={tag} />
            ))
          }
        </div>
      </div>
    </div>
  )
}
