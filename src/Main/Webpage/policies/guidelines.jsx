import React from 'react'
import { Link } from 'react-router-dom'
import { ROUTES } from '../../../utils/Routes'

export const GuideLines = () => {
    return (
        <React.Fragment>
            <div className="page">
                <div className="guidelines">
                    <div className="container">
                        <div className="guideInner">
                            <div className="guideHeading">
                                <h1>
                                    WeWrangle Guidelines
                                </h1>
                                <p>

                                </p>
                            </div>
                            <div className="guideBody">
                                <div className="guidBodyInner">

                                    <p>To ensure a safe and appropriate user experience, WeWrangle requires all users to be 18 years or older.
                                        Please refer to our <Link to={ROUTES.TERMS}>Terms and Conditions</Link>  for comprehensive information regarding eligibility and usage. If
                                        you are a parent seeking additional measures to protect your child's online activities, various parental
                                        control tools can be utilized, as it is essential to prioritize online safety.</p>
                                    <p>Engage in discussions on the WeWrangle platform with the goal of fostering understanding and intellectual
                                        exploration. Stay focused on the topic at hand and refrain from derailing conversations or engaging in
                                        excessive off-topic discussions. Be open to diverse perspectives and engage in constructive debates that
                                        promote learning and growth.</p>
                                    <p>
                                        WeWrangle is committed to creating a respectful and inclusive environment for conversations. Treat others
                                        with respect, empathy, and courtesy, even when discussing controversial topics. Avoid personal attacks,
                                        harassment, hate speech, or any form of discriminatory behavior. See our <Link to={ROUTES.TERMS}> Terms and Conditions</Link> and
                                        <Link to={ROUTES.PRIVACY}> Privacy Policy </Link>for what you can and can’t do while using the site.
                                    </p>
                                    <p>
                                        We prioritize your safety and the safety of others while using WeWrangle. Do not share personal
                                        information, such as contact details or social media handles, in your discussions. If you come across any
                                        inappropriate or concerning content, promptly report it to our moderation team. WeWrangle employs a
                                        moderation system to ensure compliance with our guidelines. However, users are ultimately responsible
                                        for their own behavior, and any violations may result in appropriate actions, including warnings, temporary
                                        suspension, or permanent account termination. By adhering to these guidelines, we can create a safe and
                                        inclusive space where users feel valued and respected.
                                    </p>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
