import React from 'react';
import './body.css';


interface BodyProps {
  leagues: {}
}

interface ILeagues {
  id: number
  title: string
  info: string
  leagueType: string
  roles: {
    id?: number
    title: string
    data: number
  }
}


export default function SpacingGrid({ leagues }: BodyProps) {

  const arrLeagues = Object.values(leagues) as [];

  return (
    <div className='body item'>
      <h3>Лиги</h3>
      <div className='items'>
        {arrLeagues.map((value: ILeagues) => (
          <div key={value.id}>
            <p><b>{value.title}</b></p>
            <p>{value.info}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
