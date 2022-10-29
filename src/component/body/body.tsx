import React from 'react';
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Items from '../items/items';

interface BodyProps {
  leagues: {}
}


export default function Body({ leagues }: BodyProps) {
  return (
    <Router>
        <Items leagues={leagues}/>
      {/* <Routes>
        <Route path='/'/>
        <Route path='/detail'/>
      </Routes> */}
    </Router>
  );
}
