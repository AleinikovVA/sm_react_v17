import React from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';

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

const Items = ({ leagues }: BodyProps) => {

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

const mapStateToProps = (state: any) => {
  return {
    leagues: state.leagues
  }
}

export default connect(mapStateToProps)(Items);