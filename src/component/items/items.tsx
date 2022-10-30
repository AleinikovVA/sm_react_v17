import React from 'react';
import { useState } from 'react';
import { Link } from "react-router-dom";

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

export default function Items({ leagues }: BodyProps) {

  const arrLeagues = Object.values(leagues) as [];

  return (
    <div className='items'>
      {arrLeagues.map((value: ILeagues, key: any) => (
        <div className='cards' key={value.id}>
          <p><b>{value.title}</b></p>
          <p>{value.info}</p>
          <Link to={"detail/?key=" + key}>Подробнее</Link>
        </div>
      ))}
    </div>
  )
}