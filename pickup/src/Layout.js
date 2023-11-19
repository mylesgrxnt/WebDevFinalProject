import { Outlet, Link, NavLink } from "react-router-dom";
import "./styles/Layout.css"
import Bell from "./images/icons/Bell.png"
import Home from "./images/icons/Home.png"
import Message from "./images/icons/Message.png"
import Question from "./images/icons/Question.png"

const Layout = () => {
  return (
    <>
      <nav>
        <div class="top-section">
          <h1>PickUp</h1>
          <ul class="page-links">
            <li>
              <img src={Home} alt=""/>
              <Link to="/">Home</Link>
            </li>
            <li>
              <img src={Message} alt=""/>
              <Link to="/messages">Messages</Link>
            </li>
            <li>
              <img src={Bell} alt=""/>
              <Link to="/notifications">Notifications</Link>
            </li>
            <li>
              <img src={Question} alt=""/>
              <Link to="/help">Help</Link>
            </li>
          </ul>
        </div>
        <hr />
        <ul class="bottom-section">
          <li>
            <Link to="/account">Account</Link>
          </li>
          <li>
            <Link to="/logout">Logout</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;