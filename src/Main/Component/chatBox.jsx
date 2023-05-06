import React from "react";
import chatProfile from "../../assets/images/chatProfile.png";

export const ChatBox = ({radioId}) => {
  return (
    <React.Fragment>
      <div className="singleChatBox">
        <div className="picture">
          <img src={chatProfile} alt="" />
        </div>
        <div className="title">
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <div className="control">
          <div className="toggle">
            <input
              id={`toggle11 - ${radioId}`}
              className="toggle-input toggle1"
              name="toggle"
              value="1"
              type="radio"
            />
            <label htmlFor={`toggle11 - ${radioId}`} className="toggle-label toggle-label-left">
              With
            </label>

            <input
              id={`toggle12 - ${radioId}`}
              className="toggle-input toggle2"
              name="toggle"
              value="2"
              type="radio"
              
            />
            <label
              htmlFor={`toggle12 - ${radioId}`}
              className="toggle-label toggle-label-middle"
            >
              Moderate
            </label>

            <input
              id={`toggle13 - ${radioId}`}
              className="toggle-input toggle3"
              name="toggle"
              value="3"
              type="radio"
            />
            <label
              htmlFor={`toggle13 - ${radioId}`}
              className="toggle-label toggle-label-right"
            >
              Against
            </label>

            <div className="toggle-selection"></div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
