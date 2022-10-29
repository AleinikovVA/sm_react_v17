import React from 'react';
import Body from './component/body/body'
import { RightMenu } from './component/right-menu/right-menu'
import { leagues } from './data/leagues';
import './index.css';

function App() {

  return (
    <div className='app'>
      <Body leagues={leagues} />
      <RightMenu />
    </div>
  )
}

export default App;
