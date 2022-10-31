import React from 'react';
import Body from './component/body/body'
import RightMenu from './component/right-menu/right-menu'
import { leagues } from './data/leagues';
import './index.css';

function App() {

  return (
    <div className='app'>
      <div className='body'>
        <h3>Лиги</h3>
        <Body leagues={leagues} />
      </div>
      <RightMenu />
    </div>
  )
}

export default App;
