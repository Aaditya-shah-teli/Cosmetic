import React from 'react'
import { Header } from '../scripts/Header'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Main } from '../Images/Main';
import { About } from '../scripts/About';
import { Projects } from '../scripts/Projects';
import { Social } from '../scripts/Social';
import { Details } from '../scripts/Details';
export const RouterJs = () => {
  return (
<Router>
      <Header />
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/social" element={<Social />} />
        <Route path="/:id" element={<Details/>} />
      </Routes>
    </Router>
  )
}
