import React from "react";
import chatProfile from "../../assets/images/chatProfile.png";

export const ChatBox = ({radioId, itemData}) => {
  return (
    <React.Fragment>
      <div className="singleChatBox">
        <div className="picture">
          <img src={itemData?.image} alt="" />
        </div>
        <div className="title">
          <p>{itemData.chatName}</p>
        </div>
        <div className="control">
          <div className="toggle">
            <input
              id={`toggle11-${radioId}`}
              className="toggle-input toggle1"
              name={`toggle${radioId}`}
              value="1"
              type="radio"
            />
            <label htmlFor={`toggle11-${radioId}`} className="toggle-label toggle-label-left">
              With
            </label>

            <input
              id={`toggle12-${radioId}`}
              className="toggle-input toggle2"
              name={`toggle${radioId}`}
              value="2"
              type="radio"
              
            />
            <label
              htmlFor={`toggle12-${radioId}`}
              className="toggle-label toggle-label-middle"
            >
              Moderate
            </label>

            <input
              id={`toggle13-${radioId}`}
              className="toggle-input toggle3"
              name={`toggle${radioId}`}
              value="3"
              type="radio"
            />
            <label
              htmlFor={`toggle13-${radioId}`}
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
