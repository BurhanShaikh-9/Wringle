import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../utils/Routes";

import { ChatBox } from "../Component/chatBox";

export const ChatRoom = () => {
    const navigate = useNavigate();
    const chatBoxes = [
      {chatName: "LGBTQ+ rights and discrimination" },
      {chatName: "Abortion" },
      {chatName: "Climate change and environmental policy" },
      {chatName: "Drug Legalisation" },
      {chatName: "Income inequality and wealth redistribution" },
      {chatName: "Military spending and foreign policy" },
      {chatName: "Universal basic income" },
      {chatName: "Immigration and border security" },
      {chatName: "Nuclear Energy" },
      {chatName: "Social Media and Free Speech" },
      {chatName: "Artificial Intelligence" },
      {chatName: "Vaccines and mandates" },

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
            <div className="allChatBox">'
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
