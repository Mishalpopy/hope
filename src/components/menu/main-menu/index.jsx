import React from "react";
import { NavLink } from "react-router-dom";

const MainMenu = () => {
    return (
        <nav>
            <ul className="main-menu">
                <li className="active">
                    <NavLink className="main-menu-link" exact to="/">
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className="main-menu-link"
                        to={process.env.PUBLIC_URL + "/"}
                    >
                        Services
                    </NavLink>
                    <ul className="sub-menu">
                        <li>
                            <NavLink
                                className="sub-menu-link"
                                to={process.env.PUBLIC_URL + "/"}
                            >
                                Essential Preventative Dentistry
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                className="sub-menu-link"
                                to={process.env.PUBLIC_URL + "/service"}
                            >
                                Dental Implants
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                className="sub-menu-link"
                                to={
                                    process.env.PUBLIC_URL +
                                    "/service-details/1"
                                }
                            >
                                Orthodontics
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                className="sub-menu-link"
                                to={process.env.PUBLIC_URL + "/"}
                            >
                                Oral Surgery
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                className="sub-menu-link"
                                to={process.env.PUBLIC_URL + "/"}
                            >
                                Treatment of Gum Disease
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                className="sub-menu-link"
                                to={process.env.PUBLIC_URL + "/"}
                            >
                                Root Canal Treatment
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                className="sub-menu-link"
                                to={process.env.PUBLIC_URL + "/"}
                            >
                                Complex Reconstructive Dentistry
                            </NavLink>
                        </li>
                    </ul>
                </li>

                <li>
                    <NavLink
                        className="main-menu-link"
                        to={process.env.PUBLIC_URL + "/about"}
                    >
                        About
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className="main-menu-link"
                        to={process.env.PUBLIC_URL + "/"}
                    >
                        Gallery
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className="main-menu-link"
                        to={process.env.PUBLIC_URL + "/"}
                    >
                        Team
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className="main-menu-link"
                        to={process.env.PUBLIC_URL + "/"}
                    >
                        Contact
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default MainMenu;
