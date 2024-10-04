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
import Aim from '../pages/Aim.jsx';
import Pretest from '../pages/Pretest.jsx';
import Concept from '../pages/Concept.jsx';
import Learning from '../pages/Learning.jsx';
import Demo from '../pages/Demo.jsx';
import Quiz from '../pages/Quiz.jsx';
import Posttest from '../pages/Posttest.jsx';
import './Sidebarmain.css';

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [showBarContent, setShowBarContent] = useState(0);

    const toggle = () => setIsOpen(!isOpen);

    const handleShowBarContent = (index) => {
        setShowBarContent(index);
    }

    const content = () => {
        switch (showBarContent) {
            case 0: return <Aim />;
            case 1: return <Pretest />;
            case 2: return <Concept />;
            case 3: return <Learning />;
            case 4: return <Demo />;
            case 5: return <Quiz />;
            case 6: return <Posttest />;
            default: return <Aim />;
        }
    }

    const menuItem = [
        { path: `aim`, name: "Aim", icon: <FaTh /> },
        { path: `pretest`, name: "Pretest", icon: <FaUserAlt /> },
        { path: `learning`, name: "Learning", icon: <FaRegChartBar /> },
        { path: `concept`, name: "Concept", icon: <FaCommentAlt /> },
        { path: `demo`, name: "Demo", icon: <FaShoppingBag /> },
        { path: `quiz`, name: "Quiz", icon: <FaThList /> },
        { path: `posttest`, name: "Posttest", icon: <FaThList /> }
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
                        <div key={index} className="link-bar" onClick={() => handleShowBarContent(index)}>
                            <div className="icon">{item.icon}</div>
                            <div style={{ display: isOpen ? "block" : "none" }} className="link_text">{item.name}</div>
                        </div>
                    ))
                }
            </div>
            <main>{content()}</main>
        </div>
    );
};

export default Sidebar;
