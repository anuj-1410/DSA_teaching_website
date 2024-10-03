import React, { useState } from 'react';
import {
    FaTh,
    FaBars,
    FaUserAlt,
    FaRegChartBar,
    FaCommentAlt,
    FaShoppingBag,
    FaThList
} from "react-icons/fa";
import { NavLink, Outlet, useParams } from 'react-router-dom';
import './Sidebarmain.css';

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const { topic } = useParams();

    const menuItem = [
        {
            path: `aim`,
            name: "Aim",
            icon: <FaTh />
        },
        {
            path: `pretest`,
            name: "Pretest",
            icon: <FaUserAlt />
        },
        {
            path: `learning`,
            name: "Learning",
            icon: <FaRegChartBar />
        },
        {
            path: `concept`,
            name: "Concept",
            icon: <FaCommentAlt />
        },
        {
            path: `demo`,
            name: "Demo",
            icon: <FaShoppingBag />
        },
        {
            path: `quiz`,
            name: "Quiz",
            icon: <FaThList />
        },
        {
            path: `posttest`,
            name: "Posttest",
            icon: <FaThList />
        }
    ];

    return (
        <div className="container-outer">
            <div style={{ width: isOpen ? "200px" : "50px" }} className="sidebar">
                <div className="top_section">
                    <h1 style={{ display: isOpen ? "block" : "none" }} className="logo">Logo</h1>
                    <div style={{ marginLeft: isOpen ? "50px" : "0px" }} className="bars">
                        <FaBars onClick={toggle} />
                    </div>
                </div>
                {
                    menuItem.map((item, index) => (
                        <NavLink to={`/course/${topic}/${item.path}`} key={index} className={({ isActive }) => (isActive ? "link-bar active-bar" : "link-bar")}>
                            <div className="icon">{item.icon}</div>
                            <div style={{ display: isOpen ? "block" : "none" }} className="link_text">{item.name}</div>
                        </NavLink>
                    ))
                }
            </div>
            <main><Outlet /></main>
        </div>
    );
};

export default Sidebar;
