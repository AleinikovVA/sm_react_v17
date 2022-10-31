import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Items from '../items/items';
import ItemDetail from '../item-detail/item-detail';
import './body.css';
interface BodyProps {
  leagues: {}
}

export default function Body({ leagues }: BodyProps) {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Items />} />
        <Route path='detail' element={<ItemDetail leagues={leagues} />} />
      </Routes>
    </BrowserRouter>
  );
}
