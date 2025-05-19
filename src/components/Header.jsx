import React, { useState, useEffect } from "react";
import logo from "/assets/images/logo.svg";
import moonBtn from "/assets/images/icon-moon.svg";
import sunBtn from "/assets/images/icon-sun.svg";

function Header() {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        document.body.classList.toggle('dark-mode', darkMode);
    }, [darkMode]);

    function toggleMode() {
        setDarkMode(prev => !prev);
    }
    
    return (
        <header className="header">
            <div className="header__container">
                <img src={logo} alt="extension logo" className="header__extension"/>
                <button onClick={toggleMode} className="header__button">
                    {darkMode ? (
                        <img src={sunBtn} alt="sun btn" className="header__sun-btn"/>
                    ) : (
                        <img src={moonBtn} alt="moon btn" className="header__moon-btn"/>
                    )}
                </button>
            </div>
        </header>
    )
}

export default Header;