import {Link} from "react-router-dom"
import "../styles/home.css"
import Search from "../images/icons/Search.png"
import Example_Profile from "../images/Example_Profile.jpg"
import "../styles/account.css"

const Account = () => {
  return (
    <>
      <main class="account-page">
        <div class="search-name">
          <div class="search-wrapper">
            <img src={Search} alt=""/>
            <input type="text" placeholder="Search User Posts..." class="search" />
          </div>
          <div class="name">
            <Link to="/account"><h3>Stacy Coolidge</h3></Link>
            <img src={Example_Profile} alt=""/>
          </div>
        </div>
        <section class="account-settings">
          <div class="profile-image-container">
            <img src={Example_Profile} alt=""/>
          </div>
          <input type="text" placeholder="Edit Name" class="update-info" />
          <input type="text" placeholder="Edit Username" class="update-info" />
          <input type="text" placeholder="Edit Email" class="update-info" />
          <button type="submit">Update</button>
        </section>
      </main>
    </>
  );
};

export default Account;