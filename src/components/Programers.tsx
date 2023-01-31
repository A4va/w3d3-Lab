import React from 'react'
interface ProgProps{
    name: string;
    langs: string[];
    experYears: number;
    coName: string;
}

function Programers(props: ProgProps) {
  return (
    <article className='profile-card'>
        <div>
            <h2>{props.name}</h2>
            <span>{props.coName}</span>
            <span>{props.experYears} Years</span>
            <ul>
                {props.langs.map((lang,i) => (<li key={lang}>{i+1}- {lang}</li>))}
            </ul>
        </div>

    </article>
  )
}

export default Programers