import React from "react";
import './Header.css'

function Header() {
    
    return (
        <>
            <div className="container">
                <div className="options">
                    <span> Home</span>
                    <span> Features</span>
                    <span> Events</span>
                    <span> Pricing</span>
                    <span> Video</span>
                </div>
                <div className="options2">
                    <button>LOGIN</button>
                    <button>REGISTER</button>
                </div>
            </div>
        </>
    )
}

export default Header
