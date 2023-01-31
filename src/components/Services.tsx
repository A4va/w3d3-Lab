import React from 'react'
interface servProps{
    services: string[]
    expctedPrice: number
}

function Services(props:servProps) {
  return (
    <article className='profile-card'>
    <div>
        <ul>
            {props.services.map((serv, i) => (<li key={serv}>{i+1}- {serv}</li>))}
        </ul>
        <span>{props.expctedPrice}</span>
    </div>
    </article>
  )
}

export default Services