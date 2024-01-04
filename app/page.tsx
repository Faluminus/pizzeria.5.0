'use client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react';
import Home from "./pages/home";
import Cart from "./pages/cart_contents";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route index element={<Home />}/>
          <Route element={<Cart/>}/>
      </Routes>
    </BrowserRouter>
  );
}


