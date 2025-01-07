import React from "react";
import ReactDOM from "react-dom/client"
/**
 * Header
 * body
 * Footer 
 */
const Header = () =>{
    return (
        <div>
            <div>
                <img src=""/>
            </div>
            <div>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const AppLayout = () =>{
    return (
        <div>
            <Header/>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);