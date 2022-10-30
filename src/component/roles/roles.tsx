import React from 'react';
import './roles.css';

interface RolesProps {
  league: ILeagues
  leagueKey: number
}

interface ILeagues {
  id: number
  title: string
  info: string
  leagueType: string
  roles: { [key: string]: any }
}
interface IRole {
  id: number
  title: string
  data: string
}

export default function Roles({ league }: RolesProps) {
  const arrRoles = Object.values(league.roles) as [];
  return (
    <>
    <h3>Роли</h3>
    <div className='roles'>
      
      {arrRoles.length > 0 && arrRoles.map((value: IRole, key:number) =>
        <div className='role' key={key}>
          <p>{value.title}</p>
          <p>{value.data + "%"}</p>
        </div>
      )}
    </div>
    </>
  );
}

// function About() {
//   return (
//     <div>
//       <h3>About</h3>
//     </div>
//   );
// }