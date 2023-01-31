import React from 'react'
interface CompProps{
    name: string;
    empsCount: number;
    year: number;


}

function Companies(props:CompProps) {
  return (
    <article className='profile-card'>
        <div>
            <h2>{props.name}</h2>
            <span>{props.empsCount} Employ</span>
            <span>Since {props.year}</span>
        </div>
    </article>
  )
}

export default Companies