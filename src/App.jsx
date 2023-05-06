import React, { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom';
import { Layout } from './Main/Layout';
import { ROUTES } from './utils/Routes';
import { HomePage } from './Main/Webpage/homePage';
import { ChatRoom } from './Main/Webpage/chatRooms';
import { ChatScreen } from './Main/Webpage/chatScreen';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <React.Fragment>
        <Routes>
          <Route element={<Layout />}>
            <Route path={ROUTES.HOMEPAGE} element={<HomePage />} />
            <Route path={ROUTES.CHATROOM} element={<ChatRoom />} />
            <Route path={ROUTES.CHATSCREEN} element={<ChatScreen />} />
          </Route>
        </Routes>
      </React.Fragment>
    </>
  )
}

export default App
