import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ROUTES } from '../../utils/Routes';
import ReCAPTCHA from "react-google-recaptcha";
import aboutImg from "../../assets/images/communication-transformed.jpeg"
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import bannerImage from '../../assets/images/Background.png'
export const HomePage3 = () => {
    const navigate = useNavigate();
    function onChange(value) {
        console.log("Captcha value:", value);
        if (value) {
            navigate(ROUTES.CHATROOM)
        }
    }
    const [isCaptcha, setIsCaptcha] = useState(false);
    const [isChecked, setIsChecked] = useState(false);

    const buttonOnClick = () => {
        console.log("functionClicked")
        if (!isChecked) {
            toast.error("Accept GuideLines")
        }
        else {
            setIsCaptcha(true);
        }
    }

    return (
        <React.Fragment>
            <div>
                {/* <button onClick={notify}>Notify!</button> */}
                <ToastContainer
                    position="top-center"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    //    pauseOnFocusLoss
                    draggable
                    //    pauseOnHover
                    theme="light"
                />
            </div>
            <div className="page">
                <div className="homepage">

                    <div className="container">
                        <div className="homepageInner">
                            <div className="firstSection">
                                <div className="BannerSection">
                                    <img src={bannerImage} alt="" />
                                </div>
                                <div className="inner">
                                    <div className="wrapper wrapper2">
                                        <div className="innerFirst upper upper2">
                                            <h1>About Us</h1>
                                            <div className="aboutOuter">

                                                <div className="aboutUs">
                                                    <div className="aboutUsInnerPara aboutUsInnerPara2">
                                                        <p>At WeWrangle, we recognize the power of meaningful conversations and the need for a safe and respectful platform to discuss controversial topics. In today's interconnected world, where diverse perspectives and backgrounds intersect, we believe that open dialogue can foster understanding and bridge gaps between individuals. That's why we have developed an innovative chat application that prioritises user safety, moderation, and respectful engagement.
                                                        </p>
                                                        <p>
                                                            We believe that engaging in discussions on contentious topics can be both enlightening and enjoyable. Our application is designed to provide a space where users can freely express themselves and engage in lively debates, all while maintaining a respectful and inclusive environment. By allowing for open dialogue on diverse subjects, we strive to create a platform that stands out from other applications, offering an unparalleled opportunity for intellectual exploration and the exchange of ideas. We are committed to promoting an inclusive space where individuals can voice their opinions while treating others with empathy and understanding, ensuring that every user feels valued and respected.
                                                        </p>
                                                    </div>
                                                </div>
                                                {/* <div className="imageAboutDiv">
                                                    <img src={aboutImg} alt="" />
                                                </div> */}
                                            </div>
                                        </div>
                                        {
                                            !isCaptcha &&
                                            <div className="startButton">
                                                <button onClick={buttonOnClick}>Start</button>
                                            </div>

                                        }
                                        {
                                            isCaptcha &&
                                            <div className="recaptchDiv" >
                                                <ReCAPTCHA
                                                    sitekey="6Lfo1SsmAAAAALCN0fyobiX0we9SpUReB76ecBva"
                                                    onChange={onChange}
                                                />
                                            </div>
                                        }
                                        <div className="innerFirst lower lower2">
                                            <h1>Guide Lines</h1>
                                            <div className="termsConditions termsConditions2">
                                                <p>To ensure a safe and appropriate user experience, WeWrangle requires all users to be 18 years or older.
                                                    Please refer to our <Link to={ROUTES.TERMS}>Terms and Conditions</Link>  for comprehensive information regarding eligibility and usage. If
                                                    you are a parent seeking additional measures to protect your child's online activities, various parental
                                                    control tools can be utilized, as it is essential to prioritize online safety.
                                                    <br />
                                                    Engage in discussions on the WeWrangle platform with the goal of fostering understanding and intellectual
                                                    exploration. Stay focused on the topic at hand and refrain from derailing conversations or engaging in
                                                    excessive off-topic discussions. Be open to diverse perspectives and engage in constructive debates that
                                                    promote learning and growth.
                                                    <br />
                                                    WeWrangle is committed to creating a respectful and inclusive environment for conversations. Treat others
                                                    with respect, empathy, and courtesy, even when discussing controversial topics. Avoid personal attacks,
                                                    harassment, hate speech, or any form of discriminatory behavior. See our <Link to={ROUTES.TERMS}> Terms and Conditions</Link> and
                                                    <Link to={ROUTES.PRIVACY}> Privacy Policy </Link>for what you can and can’t do while using the site.
                                                    <br />
                                                    We prioritize your safety and the safety of others while using WeWrangle. Do not share personal
                                                    information, such as contact details or social media handles, in your discussions. If you come across any
                                                    inappropriate or concerning content, promptly report it to our moderation team. WeWrangle employs a
                                                    moderation system to ensure compliance with our guidelines. However, users are ultimately responsible
                                                    for their own behavior, and any violations may result in appropriate actions, including warnings, temporary
                                                    suspension, or permanent account termination. By adhering to these guidelines, we can create a safe and
                                                    inclusive space where users feel valued and respected.
                                                </p>
                                            </div>
                                            <div className="bottom">
                                                {/* <Link to={ROUTES.PRIVACY}>Privacy & Policy</Link> */}


                                                <div className="acceptTerms">
                                                    <label htmlFor='accceptTerms'>Accept</label>
                                                    <input type="checkbox" id='acceptTerms' checked={isChecked} onChange={(e) => setIsChecked(e.target.checked)} />
                                                </div>


                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
