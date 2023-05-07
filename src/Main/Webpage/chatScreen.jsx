import React from "react";
import person1 from "../../assets/images/girl1.png";
import { BsSendFill } from 'react-icons/bs';

export const ChatScreen = () => {
  return (
    <React.Fragment>
      <div className="page">
        <div className="chatting">
          <div className="container">
            <div className="chattingInner">
              <div className="videoSection">
                <div className="person">
                  <img src={person1} alt="" />
                </div>
                <div className="person1">
                  <img src={person1} alt="" />
                </div>
              </div>
              <div className="menuButtons">
                <div className="menuInner">
                  <div className="topicName">
                    <p>
                      Topic: <span>Ukraine War</span>
                    </p>
                    <button>Shuffle</button>
                  </div>
                  <div className="switchButton">
                    <button>Next</button>
                  </div>
                </div>
              </div>
              <div className="chatSection">
                <div className="chatInner">
                  <div className="wrapper">
                    <div className="message1">
                      <p>Hey</p>
                    </div>
                    <div className="message1">
                      <p>Hey</p>
                    </div>
                    <div className="message1">
                      <p>Hey</p>
                    </div>
                    <div className="message2">
                      <p>hello</p>
                    </div>
                    <div className="message2">
                      <p>hello</p>
                    </div>
                    <div className="message2">
                      <p>hello</p>
                    </div>
                  </div>
                  <div className="inputChat">
                    <input type="text" />
                    <div className="sendButton">
                      <button>
                       <BsSendFill/>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
