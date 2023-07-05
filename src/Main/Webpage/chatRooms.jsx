import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../utils/Routes";

import { ChatBox } from "../Component/chatBox";

export const ChatRoom = () => {
    const navigate = useNavigate();
    const chatBoxes = [
      {chatName: "Are you For, Against, or Indifferent towards equal rights and protection for the LGBTQ+ community? " },
      {chatName: "Are you For, Against, or Indifferent towards the legality of abortion? " },
      {chatName: "Are you For, Against, or Indifferent towards stronger environmental policies to combat climate change? " },
      {chatName: "Are you For, Against or Indifferent towards the legalisation of drugs such as marijuana or psychedelics?" },
      {chatName: "Are you For, Against, or Indifferent towards redistributing wealth to reduce income inequality?" },
      {chatName: "Are you For, Against, or Indifferent towards increasing military spending to maintain national security? " },
      {chatName: "Are you For, Against, or Indifferent towards implementing a universal basic income for all citizens? " },
      {chatName: "Are you For, Against, or Indifferent towards building a wall to strengthen border security? " },
      {chatName: "Are you For, Against, or Indifferent towards the use of Nuclear Energy? " },
      {chatName: "Are you For, Against, or Indifferent towards social media platforms allowing free speech? " },
      {chatName: "Are you For, Against, or Indifferent towards the development and use of artificial intelligence?" },
      {chatName: "Are you For, Against, or Indifferent towards mandating vaccines for all citizens? " },

  ];
  return (
    <React.Fragment>
      <div className="page">
        <div className="chatRoom">
          <div className="container">
            <div className="subHeader">
              <div className="subHeaderInner">
                <label htmlFor="">User ID</label>
                <input type="text" />
              </div>
              <div className="subHeaderInner">
                <label htmlFor="">Email</label>
                <input type="emails" />
              </div>

              <div className="startButton">
                <button onClick={()=>{navigate(ROUTES.CHATSCREEN)}} >Begin!</button>
              </div>
            </div>
            <div className="allChatBox">
                {
                    chatBoxes.map((item, key) => {
                        return(
                            <ChatBox radioId={key} key={key} itemData={item}/>
                        )
                    })
                }

            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
