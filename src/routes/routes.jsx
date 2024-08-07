import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Secondpage from '../pages/secondpage';
import Firstpege from '../pages/firstpege';

export default function routes() {
    return (
        <BrowserRouter>
            <Routes>
                  <Route  path='/' element={<Firstpege/>} />
                  <Route  path='/secondpage' element={<Secondpage/>} />
            </Routes>
        
        </BrowserRouter>
    )
  }