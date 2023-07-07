import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../utils/Routes";
import lgbtq from "../../assets/images/lgbtq.png"
import abortion from "../../assets/images/abortion.jpg"
import climateChange from "../../assets/images/climateChange.jpg"
import drugs from "../../assets/images/drugs.jpg"
import income from "../../assets/images/income.jpg"
import security from "../../assets/images/security.jpg"
import nuclear from "../../assets/images/nuclear.png"
import freeSpeach from "../../assets/images/freeSpeach.jpg"
import ai from "../../assets/images/ai.jpg"
import vaccine from "../../assets/images/vaccine.jpg"

import { ChatBox } from "../Component/chatBox";

export const ChatRoom = () => {
    const navigate = useNavigate();
    const chatBoxes = [
      {image: lgbtq ,chatName: "Are you For, Against, or Indifferent towards equal rights and protection for the LGBTQ+ community" },
      {image: abortion, chatName: "Are you For, Against, or Indifferent towards the legality of abortion " },
      {image: security, chatName: "Are you For, Against, or Indifferent towards building a wall to strengthen border security " },
      {image: income, chatName: "Are you For, Against, or Indifferent towards implementing a universal basic income for all citizens " },
      {image: climateChange, chatName: "Are you For, Against, or Indifferent towards stronger environmental policies to combat climate change " },
      {image: drugs, chatName: "Are you For, Against or Indifferent towards the legalisation of drugs such as marijuana or psychedelics" },
      {image: income, chatName: "Are you For, Against, or Indifferent towards redistributing wealth to reduce income inequality" },
      {image: security, chatName: "Are you For, Against, or Indifferent towards increasing military spending to maintain national security " },
      {image: nuclear, chatName: "Are you For, Against, or Indifferent towards the use of Nuclear Energy " },
      {image: freeSpeach, chatName: "Are you For, Against, or Indifferent towards social media platforms allowing free speech " },
      {image: ai, chatName: "Are you For, Against, or Indifferent towards the development and use of artificial intelligence" },
      {image: vaccine, chatName: "Are you For, Against, or Indifferent towards mandating vaccines for all citizens " },

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
                            <ChatBox key={key} radioId={key} itemData={item}/>
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
