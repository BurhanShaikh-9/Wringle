import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ROUTES } from '../../utils/Routes';
import ReCAPTCHA from "react-google-recaptcha";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const HomePage = () => {
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
            toast.error("Accept Terms and Conditions")
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
                                <div className="inner">
                                    <div className="wrapper">
                                        <div className="innerFirst upper">
                                            <h1>About Us</h1>
                                            <div className="aboutUs">
                                                <div className="aboutUsInnerPara">
                                                    <p>At WeWrangle, we recognize the power of meaningful conversations and the need for a safe and respectful platform to discuss controversial topics. In today's interconnected world, where diverse perspectives and backgrounds intersect, we believe that open dialogue can foster understanding and bridge gaps between individuals. That's why we have developed an innovative chat application that prioritises user safety, moderation, and respectful engagement.
                                                    </p>
                                                    <p>
                                                        We believe that engaging in discussions on contentious topics can be both enlightening and enjoyable. Our application is designed to provide a space where users can freely express themselves and engage in lively debates, all while maintaining a respectful and inclusive environment. By allowing for open dialogue on diverse subjects, we strive to create a platform that stands out from other applications, offering an unparalleled opportunity for intellectual exploration and the exchange of ideas. We are committed to promoting an inclusive space where individuals can voice their opinions while treating others with empathy and understanding, ensuring that every user feels valued and respected.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="innerFirst lower">
                                            <h1>Terms & Conditions</h1>
                                            <div className="termsConditions">
                                                <p>
                                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium veniam voluptates debitis. Suscipit corporis aliquid quis, saepe itaque optio officiis nobis perferendis fugit sequi veniam laboriosam ipsam sint, reprehenderit placeat ab repellat velit, sunt vero. Doloribus, officiis! Quibusdam ab error impedit similique id recusandae, eos voluptas sapiente possimus optio inventore maxime eius explicabo harum dolor eaque quis quidem assumenda, atque aspernatur aut, qui perferendis vitae? Nulla hic repellat ratione rerum excepturi nam perspiciatis corrupti doloribus aperiam rem, dolore eius distinctio id repellendus porro unde nisi maxime quam pariatur exercitationem ipsum at a eveniet error! Earum odio molestiae enim. Qui, dolorum hic sunt voluptatem maxime facere voluptatum. Nulla dicta animi rerum? Cupiditate nostrum, porro molestias nesciunt vitae culpa numquam sit, sint voluptatibus vero tenetur et quisquam aspernatur autem cum quod ullam qui perspiciatis ipsam esse facilis non! Culpa eum ipsa voluptatem aperiam cupiditate deleniti suscipit esse dolore sequi? Voluptate, consequuntur aliquam. Quibusdam, repellendus minima veritatis nostrum, eveniet eligendi debitis et nobis omnis laudantium recusandae ipsa tenetur earum beatae ad? Nostrum perspiciatis et consectetur ex iste neque sapiente iure beatae id tempora, facilis soluta similique minima asperiores! Fugit, officiis dicta a nam illo dignissimos? Exercitationem, soluta deleniti. Rerum corporis at voluptas ea molestiae ab, labore voluptatibus exercitationem, perspiciatis praesentium ducimus libero quaerat a minima saepe eum? Ullam libero voluptate modi dolores aliquid neque beatae perspiciatis? Atque doloribus ducimus molestiae dicta voluptatum expedita necessitatibus quos ad dolorem dignissimos quasi soluta tempore magnam, officia quidem sequi tempora! Eligendi fugit numquam, hic deleniti, suscipit, consequatur assumenda architecto quidem eum provident maiores. Illo quidem vitae modi cum neque sapiente repudiandae molestiae hic eum, voluptatibus repellendus quae exercitationem harum rem corporis nobis dolores quisquam corrupti animi necessitatibus doloribus dolor eligendi sed recusandae! Ea eligendi officiis autem modi quia natus dolore molestiae, laudantium obcaecati ipsa? Nihil eveniet consequuntur esse quasi, harum modi vel totam optio non veritatis. Laudantium, doloribus iusto? Odio dolor quos libero, nihil odit, est iusto adipisci suscipit facere voluptatem magnam incidunt quia voluptates soluta animi quo, ut possimus et iure ex ipsum. Aliquid, natus corporis doloremque ducimus earum, sed itaque culpa nihil eum temporibus maiores? Optio ipsam mollitia excepturi, laboriosam assumenda voluptatum, ducimus sequi quidem ea maxime error in doloremque dolores quasi nulla eos consequatur facere placeat, ut similique. Nemo facere tempore cumque eius molestiae velit iusto at aut quae, maxime neque deleniti voluptatem sed natus porro ipsum, illo quo nisi vero ipsa inventore dolor? Reiciendis soluta repellendus quod quia consequuntur pariatur ipsum omnis et neque ullam ex in dolore, id harum asperiores aut rem magni quidem voluptates eveniet? Est reiciendis perferendis accusantium optio! Ea, voluptatibus maxime fugit eius odio, corporis reiciendis ratione, vero ipsum quidem cupiditate amet at iure quia. Dolor, molestiae debitis. Suscipit pariatur exercitationem iure optio sequi deleniti est vitae dignissimos, alias tempora magnam hic sed soluta similique iusto mollitia quam doloremque veniam vero accusamus laborum. Veniam deserunt quam quo iusto, eius iste magni maiores harum omnis, a sunt amet officiis reprehenderit reiciendis fuga ipsa nihil quisquam, vel ducimus dolore nisi nemo quia minus. At officia ullam ad debitis a illo non porro deserunt tenetur, magni asperiores, mollitia, minima libero et aspernatur? Atque nobis molestiae, asperiores aspernatur est, dicta eaque tenetur architecto minus provident recusandae dolorum vitae minima distinctio unde quos eum alias beatae voluptates illum doloribus eius aut officiis! Minima cupiditate aliquam nesciunt tenetur iste expedita omnis delectus amet, repellendus itaque! Ducimus atque iste quibusdam, nulla architecto maxime, vero veritatis ea assumenda error eaque tenetur illum minus eveniet? Minus vero blanditiis deserunt laboriosam earum suscipit qui impedit ab libero voluptas non, quidem dolore aspernatur alias illo, dolor veniam quasi, explicabo ad ducimus assumenda modi dolorum unde fuga. Accusantium iusto corrupti molestiae nulla consequatur, nesciunt ducimus ab, totam velit architecto a non repudiandae optio reiciendis, debitis maxime possimus modi saepe veniam aspernatur fugiat doloribus excepturi eaque nemo? Possimus nostrum id, in, consequuntur corrupti illo porro atque facilis asperiores unde voluptatem, ex consectetur magnam eos? Ab, soluta tempore! Magnam culpa natus commodi? Quas vero voluptatum odio aut? Eligendi, laudantium. Quod animi officia quisquam repellat sunt, ullam in delectus. Optio autem sunt eius quasi aliquam iste dolor aspernatur ea reiciendis vitae suscipit dolorem maiores aliquid ullam incidunt dignissimos, doloribus dolores quae minima omnis sed architecto totam. Quaerat incidunt doloribus necessitatibus quisquam quos consequatur quo architecto perspiciatis culpa vitae modi, dicta enim obcaecati, nisi sapiente nulla corporis. Fugit odit ullam totam minima ratione veritatis dolores ut! Perspiciatis totam necessitatibus porro ducimus soluta illo explicabo esse nulla doloribus quae repellendus, nam iste laborum natus recusandae blanditiis. Unde voluptatum rem, repudiandae deserunt voluptas, placeat labore incidunt aliquid, nam vitae distinctio itaque aliquam reiciendis iure tempora ea facere? Quo illum ex sapiente sint ipsam molestias mollitia vero rem recusandae quos! Sapiente distinctio excepturi quae odio nostrum facere corrupti quidem tempora cumque assumenda quibusdam voluptatibus at sunt vero laudantium, ad natus repellat consequuntur ducimus! Atque eos molestias voluptate corrupti unde veniam saepe illo, velit dolorum deleniti, consequuntur reprehenderit. Rerum saepe sit esse vitae ipsum veniam aut numquam eligendi, perferendis, error tempora, soluta necessitatibus. Similique temporibus explicabo sit voluptatem minima iusto vero iste qui laboriosam accusamus natus facere molestias, nulla ratione a quis. Expedita eius officiis nesciunt nobis delectus itaque iusto quo aut, vel asperiores cum beatae cumque. Hic quos nihil, maiores, sit quo odio obcaecati quae architecto id, ipsam ipsa dolores saepe sunt explicabo. Provident deleniti, saepe suscipit quisquam in corrupti. Excepturi porro quibusdam eveniet repellat, cum reiciendis minima consectetur sit eligendi facere officia beatae nobis quod libero eum! Praesentium quas vero eos numquam nobis, reprehenderit possimus eveniet voluptatum at optio, quae nesciunt cum quam voluptates? Quas, provident, rerum ullam, non nobis adipisci sunt maiores doloribus exercitationem facilis enim deserunt cum quos voluptates! Nostrum, quidem reprehenderit perferendis quisquam sapiente nisi praesentium eos, molestias adipisci a exercitationem consequatur perspiciatis quaerat dolores quae sint suscipit sunt assumenda quam illum consequuntur architecto ex! Debitis neque blanditiis corporis voluptatibus similique est reprehenderit pariatur quasi numquam labore velit nostrum eum repudiandae aspernatur earum perferendis non, consectetur voluptate dolore eveniet. Exercitationem error officiis sed animi.
                                                </p>
                                            </div>
                                            <div className="bottom">
                                                {/* <Link to={ROUTES.PRIVACY}>Privacy & Policy</Link> */}


                                                <div className="acceptTerms">
                                                    <label htmlFor='accceptTerms'>Accept</label>
                                                    <input type="checkbox" id='acceptTerms' checked={isChecked} onChange={(e) => setIsChecked(e.target.checked)} />
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
