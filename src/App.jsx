import { useState } from 'react'
import "./app.scss"
import { Link, Route, Routes, Outlet } from "react-router";
import Home from './sides/Home';
import Archive from './sides/Archive';
import Popular from './sides/Popular';
import Settings from './sides/Settings';

function App() {

    return(
      <>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/archive" element={<Archive />}/>
          <Route path="/popular" element={<Popular />}/>
          <Route path="/settings" element={<Settings />}/>
        </Routes>
      </>
    )
}

export default App
