import React, { useEffect, useState } from "react";

const Dark = () => {
    let getTheme = () => {
        return JSON.parse(localStorage.getItem("theme"));
    }
    const [theme, SetTheme] = useState(getTheme());
    const [change, Setchange] = useState("DarkMode")

    useEffect(() => {
        document.body.className = theme;
        localStorage.setItem("theme", JSON.stringify(theme))
    }, [theme])
    const Change = () => {
        theme === "dark-theme" ? SetTheme("light-theme") : SetTheme("dark-theme")
  
    };
    return (
        <div>
            <div className="toggle">
                <input onClick={Change} type="checkbox" id="toggle" />
                <label htmlFor="toggle"></label>
            </div>
        </div>
    );
};

export default Dark;