import React from "react";
import person1 from "../../assets/images/girl1.png";

export const ChatScreen = () => {
  return (
    <React.Fragment>
      <div className="page">
        <div className="chatting">
          <div className="container">
            <div className="chattingInner">
              <div className="videoSection">
                <div className="person">
                  {" "}
                  <img src={person1} alt="" />{" "}
                </div>
                <div className="person1">
                  {" "}
                  <img src={person1} alt="" />{" "}
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
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
