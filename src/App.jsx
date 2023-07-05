import React, { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom';
import { Layout } from './Main/Layout';
import { ROUTES } from './utils/Routes';
import { HomePage } from './Main/Webpage/homePage';
import { ChatRoom } from './Main/Webpage/chatRooms';
import { ChatScreen } from './Main/Webpage/chatScreen';
import { PrivacyPolicy } from './Main/Webpage/policies/privacyPolicy';
import { TermsCondition } from './Main/Webpage/policies/termsCondition';
import { GuideLines } from './Main/Webpage/policies/guidelines';
import { HomePage2 } from './Main/Webpage/homeV2';

function App() {


  return (
    <>
      <React.Fragment>
        <Routes>
          <Route element={<Layout />}>
            <Route path={ROUTES.HOMEPAGE} element={<HomePage />} />
            <Route path="homev2" element={<HomePage2 />} />

            <Route path={ROUTES.CHATROOM} element={<ChatRoom />} />
            <Route path={ROUTES.CHATSCREEN} element={<ChatScreen />} />
            <Route path={ROUTES.PRIVACY} element={<PrivacyPolicy />} />
            <Route path={ROUTES.TERMS} element={<TermsCondition />} />
            <Route path={ROUTES.GUIDE} element={<GuideLines />} />

          </Route>
        </Routes>
      </React.Fragment>
    </>
  )
}

export default App
