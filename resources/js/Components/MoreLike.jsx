import React from 'react'
import CardSide from './CardSide'

export default function MoreLike() {
  return (
    <div className="card flex flex-col gap-8 border">
      <div className="card w-96 bg-base-100 flex flex-col gap-4 p-8">
        <h2 className="card-title">More Like This</h2>
        <CardSide />
        <CardSide />
        <CardSide />
      </div>
    </div>
  )
}
