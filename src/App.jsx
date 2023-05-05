import React, { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom';
import { Layout } from './Main/Layout';
import { ROUTES } from './utils/Routes';
import { HomePage } from './Main/Webpage/homePage';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <React.Fragment>
        <Routes>
          <Route element={<Layout />}>
            <Route path={ROUTES.HOMEPAGE} element={<HomePage />} />
          </Route>
        </Routes>
      </React.Fragment>
    </>
  )
}

export default App
