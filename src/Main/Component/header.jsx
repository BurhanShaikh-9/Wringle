import React from 'react'
import LogoPic from '../../assets/images/logo2W.png'
import LogoPic2 from '../../assets/images/logo2.png'
import RealTalk from '../../assets/images/realTalk.png'
import { Link } from 'react-router-dom'
import { ROUTES } from '../../utils/Routes'

export const Header = () => {
    return (
        <React.Fragment>
            <header className='header'>
                <div className='container'>
                    <div className="headerInner">
                        <div className="headerFirst">
                            <Link to={ROUTES.HOMEPAGE}>  <div className="logo">
                                <img className='logo1' src={LogoPic} alt="Logo" />
                                <img className='logo2' src={LogoPic2} alt="Logo" />

                                {/* <p>rangle</p> */}
                            </div>
                            </Link>
                            <div className="imageInner"><img src={RealTalk} alt="" /></div>
                        </div>
                        <div className="headerSecond">
                            <div className="secondInner">
                                <div className="online"></div>
                                <div className="user">
                                    <span className="numbers">5000+</span>
                                    <span className='onlineText'>Online</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </React.Fragment>
    )
}
