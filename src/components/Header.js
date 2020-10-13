import React from 'react';

export default function Header(props) {
    return (
        <header> 
            <div>   
                <h1>Social Media Dashboard</h1>
                <span>Total Followers: 23004</span>
            </div>
            <div className="toggle-container">
                <span className="toggle-name primary">{ props.darkMode? "Dark Mode" : "Light Mode"}</span>
                <label className="switch">
                    <input type="checkbox" checked={props.darkMode} onChange= {()=> props.setDarkMode(prevMode => !prevMode)}></input>
                    <span className="slider round"></span>
                </label>    
            </div>
            
        </header>
    )
}
