import React from 'react';
import { useState } from 'react';
import Roles from '../roles/roles';
import { Link } from "react-router-dom";

interface BodyProps {
  leagues: {}
}

export default function ItemDeatil({ leagues }: BodyProps) {

  const arrLeagues = Object.values(leagues) as [];

  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const leagueKey:any = urlParams.get('key')

  return (
          <>
            <div className='card'>
              <div key={arrLeagues[leagueKey]["id"]}>
                <p><b>{arrLeagues[leagueKey]["title"]}</b></p>
                <p>{arrLeagues[leagueKey]["info"]}</p>
                <Link to="/">Обратно</Link>
              </div>
            </div>
            <Roles league={arrLeagues[leagueKey]} leagueKey={leagueKey} />
          </>
  );
}