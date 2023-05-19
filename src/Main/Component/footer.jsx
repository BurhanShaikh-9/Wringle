import React from 'react'
import { Link } from 'react-router-dom'
import { ROUTES } from '../../utils/Routes'

export const Footer = () => {
    return (
        <React.Fragment>
            <footer>
                <div className="footer">
                    <div className="container">
                        <div className="footerInner">
                           <Link to={ROUTES.TERMS}>
                            Terms & Condition
                           </Link>
                           <Link to={ROUTES.PRIVACY}>Privacy Policy</Link>
                            <p>
                            © 2011-2023 Wrangle  -  Design & Develop by <a href="">Array Digitals</a> 
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </React.Fragment>
    )
}
