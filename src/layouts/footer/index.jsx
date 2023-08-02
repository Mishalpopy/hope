import SocialIcon from "../../components/social-icon";
import { Link } from "react-router-dom";
import Newsletter from "../../components/newsletter";
import Logo from "../../components/logo";

const Footer = () => {
    return (
        <footer className="footer-area">
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-md-5 col-lg-4 col-xl-3">
                        <div className="widget-item">
                            <div className="about-widget">
                                <Logo
                                    classOption="footer-logo"
                                    image={`${process.env.PUBLIC_URL}/img/logo.png`}
                                />
                                <p className="mb-0">
                                    Our highly skilled and experienced dentists
                                    are committed to delivering the best
                                    possible care, ensuring your smile is in
                                    safe hands.
                                </p>
                                <ul className="widget-contact-info">
                                    <li className="info-address">
                                        <i className="icofont-location-pin"></i>
                                        Villa #G2U2, Al Wasl Road، Jumeirah 1 -
                                        Dubai
                                    </li>
                                    <li className="info-mail">
                                        <i className="icofont-email"></i>
                                        <a href="mailto://hello@yourdomain.com">
                                            booking@brightwhite.ae
                                        </a>
                                    </li>
                                    <li className="info-phone">
                                        <i className="icofont-ui-call"></i>
                                        <a href="tel://(0091)8547632521">
                                            04 334 4484
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-6 col-md-5 col-lg-4 col-xl-3">
                        <div className="widget-item">
                            <h4 className="widget-title line-bottom">
                                Services
                            </h4>
                            <nav className="widget-posts">
                                <ul className="posts-item">
                                    <li>
                                        <Link to="/">
                                            <i className="icon icofont-rounded-double-right"></i>
                                            Essential Preventative Dentistry
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/">
                                            <i className="icon icofont-rounded-double-right"></i>
                                            Dental Implants
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/">
                                            <i className="icon icofont-rounded-double-right"></i>
                                            Orthodontics
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/">
                                            <i className="icon icofont-rounded-double-right"></i>
                                            Treatment of Gum Disease
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/">
                                            <i className="icon icofont-rounded-double-right"></i>
                                            Root Canal Treatment
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/">
                                            <i className="icon icofont-rounded-double-right"></i>
                                            Complex Reconstructive Dentistry
                                        </Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-5 col-lg-4 col-xl-3">
                        <div className="widget-item">
                            <h4 className="widget-title line-bottom">
                                Quick Links
                            </h4>
                            <nav className="widget-posts">
                                <ul className="posts-item">
                                    <li>
                                        <Link to="/">
                                            <i className="icon icofont-rounded-double-right"></i>
                                            About
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/">
                                            <i className="icon icofont-rounded-double-right"></i>
                                            Gallery
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/">
                                            <i className="icon icofont-rounded-double-right"></i>
                                            Team
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/">
                                            <i className="icon icofont-rounded-double-right"></i>
                                            Contact
                                        </Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-6 offset-md-1 col-lg-4 offset-lg-0 col-xl-3">
                        <div className="widget-item">
                            <h4 className="widget-title line-bottom">
                                Newsletter
                            </h4>
                            <div className="widget-newsletter">
                                <p>
                                    Sign up for our mailing list to get latest
                                    updates and offers.
                                </p>
                                <Newsletter mailchimpUrl="//devitems.us11.list-manage.com/subscribe/post?u=6bbb9b6f5827bd842d9640c82&amp;id=05d85f18ef" />
                            </div>
                            <div className="widget-social-icons">
                                <SocialIcon
                                    path="https://twitter.com/"
                                    icon="icofont-twitter"
                                />
                                <SocialIcon
                                    path="https://myaccount.google.com/"
                                    icon="icofont-google-plus"
                                />
                                <SocialIcon
                                    path="https://www.pinterest.com/"
                                    icon="icofont-pinterest"
                                />
                                <SocialIcon
                                    path="https://rss.com/"
                                    icon="icofont-rss"
                                />
                                <SocialIcon
                                    path="https://www.facebook.com/"
                                    icon="icofont-facebook"
                                />
                                <SocialIcon
                                    path="https://dribbble.com/"
                                    icon="icofont-dribbble"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="container">
                    <div className="row text-center">
                        <div className="col-sm-12">
                            <div className="widget-copyright">
                                <p>
                                    &copy; 2021{" "}
                                    <span className="text-uppercase">
                                        BRIGHT WHITE DENTAL CENTRE
                                    </span>
                                    . Made with{" "}
                                    <i className="icofont-heart-alt"></i> by{" "}
                                    <a
                                        target="_blank"
                                        href="/"
                                        rel="noreferrer"
                                    >
                                        11:11
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
