import React, { useState } from "react";
import person1 from "../../assets/images/girl1.png";
import { BsSendFill, BsFillFlagFill } from 'react-icons/bs';
import { BiLoader } from 'react-icons/bi';
import { AiOutlineExclamationCircle } from 'react-icons/ai';
import { GrCaretNext } from 'react-icons/gr';
import { FiArrowRight } from 'react-icons/fi';



import Modal from 'react-bootstrap/Modal';

import { FiMoreHorizontal } from 'react-icons/fi';
// import Modal from 'react-bootstrap/Modal';
// import Button from 'react-bootstrap/Button';

export const ChatScreen = () => {

  const [reportButton, setReportButton] = useState(false);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [reportButtonVisible, setReportButtonVisible] = useState(false);

  const handleMouseEnter = () => {
    setReportButtonVisible(true);
  };

  const handleMouseLeave = () => {
    setReportButtonVisible(false);
  };


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
                  <div className="ReportButton">
                    <button className="moreButton" onClick={() => { setReportButton(!reportButton) }}><FiMoreHorizontal /></button>
                    {
                      reportButton &&
                      <div className="innerButton">
                        <button className="reportInner" onClick={handleShow}> <BsFillFlagFill /> Report</button>
                      </div>
                    }
                  </div>
                </div>
              </div>
              <div className="menuButtons">
                <div className="menuInner">
                  <div className="topicName">
                    <p>
                      Topic: <span>Ukraine War</span>
                    </p>
                    <button> <BiLoader /> Regenerate</button>
                    <div className="switchButton">
                      <button>Next <FiArrowRight style={{ color: 'white' }} /> </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="chatSection">
                <div className="chatInner" id="chatInnerId" onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
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

                  <div className={`ReportButton ${reportButtonVisible ? 'visible' : ''}`}>
                    <button className="moreButton" onClick={() => { setReportButton(!reportButton) }}><FiMoreHorizontal /></button>
                    {
                      reportButton &&
                      <div className="innerButton">
                        <button className="reportInner" onClick={handleShow}> <BsFillFlagFill /> Report</button>
                      </div>
                    }
                  </div>

                  <div className="inputChat">
                    <input type="text" />
                    <div className="sendButton">
                      <button>
                        <BsSendFill />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        className="modalMain"
      >
        <Modal.Header closeButton>
          <Modal.Title className="modalHeaderTitle">Find Support or Report Page</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modalBody">
          <p className="bodyTitle"> <AiOutlineExclamationCircle /> Help us understand what's happening.</p>
          <div className="reportsToggle">
            <div className="reportValues">
              <input type="radio" id="hateSpeech" name="reported" />
              <label htmlFor="hateSpeech">Hate Speech</label>
            </div>
            <div className="reportValues">
              <input type="radio" id="nudity" name="reported" />
              <label htmlFor="nudity">Nudity or Sexual Content</label>
            </div>
            <div className="reportValues">
              <input type="radio" id="violence" name="reported" />
              <label htmlFor="violence">Violence</label>
            </div>
            <div className="reportValues">
              <input type="radio" id="harassment" name="reported" />
              <label htmlFor="harassment">Harassment</label>
            </div>
            <div className="reportValues">
              <input type="radio" id="Scams" name="reported" />
              <label htmlFor="Scams">Scams and Fake</label>
            </div>
            <div className="reportValues">
              <input type="radio" id="intellectual" name="reported" />
              <label htmlFor="intellectual">Intellectual Property</label>
            </div>
            <div className="reportValues">
              <input type="radio" id="others" name="reported" />
              <label htmlFor="others">Other</label>
            </div>
          </div>
          <div className="reportMessage">
            <textarea rows="10"></textarea>
          </div>
          <div className="submitButton">
            <button onClick={handleClose}>
              Submit
            </button>
          </div>
        </Modal.Body>

      </Modal>

    </React.Fragment>
  );
};
