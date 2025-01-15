import LOGO from "../assets/logo.png"

export const Header = ()=>{
    return(
      <div className="header">
        <div className="log-cotainer">
          <img className="logo" src={LOGO}/>
        </div>
        <div className="nav-items">
            <ul>
              <li>Home</li>
              <li>About us</li>
              <li>Contact Us</li>
              <li>Cart</li>
            </ul>
        </div>
      </div>
    )
  }

