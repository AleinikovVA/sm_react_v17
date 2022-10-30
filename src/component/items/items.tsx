import React from 'react';
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Roles from '../roles/roles';
import './items.css';

import { Provider } from 'react-redux'
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

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
  const [detail, setDetail] = useState(false)
  const [leagueKey, setLeagueKey] = useState(NaN)

  function selectLeague(key: number, detailState: boolean) {
    setLeagueKey(key)
    setDetail(detailState)
  }


  return (
    <div className='body'>
      <h3>Лиги</h3>
      {detail === false && <div className='items'>
        {arrLeagues.map((value: ILeagues, key: any) => (
          <div className='cards' key={value.id}>
            <p><b>{value.title}</b></p>
            <p>{value.info}</p>
            <Link onClick={() => selectLeague(key, true)} to={"/detail/" + key}>Подробнее</Link>
          </div>
        ))}
      </div>}
      {detail === true && (
        <>
          <div className='card'>
            <div key={arrLeagues[leagueKey]["id"]}>
              <p><b>{arrLeagues[leagueKey]["title"]}</b></p>
              <p>{arrLeagues[leagueKey]["info"]}</p>
              <Link onClick={() => selectLeague(leagueKey, false)} to="/">Обратно</Link>
            </div>
          </div>
          <Roles league={arrLeagues[leagueKey]} leagueKey={leagueKey} />
        </>
      )}
    </div>
  );
}

// function About() {
//   return (
//     <div>
//       <h3>About</h3>
//     </div>
//   );
// }