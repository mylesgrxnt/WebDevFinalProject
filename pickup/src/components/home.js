import {Link} from "react-router-dom"
import "../styles/home.css"
import Search from "../images/icons/Search.png"
import Example_Profile from "../images/Example_Profile.jpg"

const Home = () => {
  return (
    <>
      <main class="home-page">
        <section class="home-header">
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
          <h1>Community Posts</h1>
          <div class="filters-and-new-post">
            <div class="filters">
              <div class="checkbox-wrapper">
                <label class="checkbox-wrapper">
                  <input type="checkbox" class="checkbox-input" />
                  <span class="checkbox-tile">
                    <span class="checkbox-label">Basketball</span>
                  </span>
                </label>
              </div>
              <div class="checkbox-wrapper">
                <label class="checkbox-wrapper">
                  <input type="checkbox" class="checkbox-input" />
                  <span class="checkbox-tile">
                    <span class="checkbox-label">Soccer</span>
                  </span>
                </label>
              </div>
              <div class="checkbox-wrapper">
                <label class="checkbox-wrapper">
                  <input type="checkbox" class="checkbox-input" />
                  <span class="checkbox-tile">
                    <span class="checkbox-label">Volleyball</span>
                  </span>
                </label>
              </div>
              <div class="checkbox-wrapper">
                <label class="checkbox-wrapper">
                  <input type="checkbox" class="checkbox-input" />
                  <span class="checkbox-tile">
                    <span class="checkbox-label">Frisbee</span>
                  </span>
                </label>
              </div>
            </div>
            <div class="new-post">New Post</div>
          </div>
        </section>
        <section class="user-feed">
        <div class="post">
            <div class="user-info">
              <img src={Example_Profile} alt=""/>
              <div>
                <p class="post-title">Stacy's Basketball Game</p>
                <p class="experience-level"><i>Intermediate Basketball</i></p>
              </div>
            </div>
            <div class="registration-info">
              <p><b>3</b> of <b>5</b><br />Spots Left</p>
            </div>
            <div class="event-info">
              <p>November 10th</p>
              <p>4:30 PM - 6:00 PM</p>
              <p>Gym 3rd Floor, Court A</p>
            </div>
          </div>
          <div class="post">
            <div class="user-info">
              <img src={Example_Profile} alt=""/>
              <div>
                <p class="post-title">Stacy's Basketball Game</p>
                <p class="experience-level"><i>Intermediate Basketball</i></p>
              </div>
            </div>
            <div class="registration-info">
              <p><b>3</b> of <b>5</b><br />Spots Left</p>
            </div>
            <div class="event-info">
              <p>November 10th</p>
              <p>4:30 PM - 6:00 PM</p>
              <p>Gym 3rd Floor, Court A</p>
            </div>
          </div>
          <div class="post">
            <div class="user-info">
              <img src={Example_Profile} alt=""/>
              <div>
                <p class="post-title">Stacy's Basketball Game</p>
                <p class="experience-level"><i>Intermediate Basketball</i></p>
              </div>
            </div>
            <div class="registration-info">
              <p><b>3</b> of <b>5</b><br />Spots Left</p>
            </div>
            <div class="event-info">
              <p>November 10th</p>
              <p>4:30 PM - 6:00 PM</p>
              <p>Gym 3rd Floor, Court A</p>
            </div>
          </div>
          <div class="post">
            <div class="user-info">
              <img src={Example_Profile} alt=""/>
              <div>
                <p class="post-title">Stacy's Basketball Game</p>
                <p class="experience-level"><i>Intermediate Basketball</i></p>
              </div>
            </div>
            <div class="registration-info">
              <p><b>3</b> of <b>5</b><br />Spots Left</p>
            </div>
            <div class="event-info">
              <p>November 10th</p>
              <p>4:30 PM - 6:00 PM</p>
              <p>Gym 3rd Floor, Court A</p>
            </div>
          </div>
          <div class="post">
            <div class="user-info">
              <img src={Example_Profile} alt=""/>
              <div>
                <p class="post-title">Stacy's Basketball Game</p>
                <p class="experience-level"><i>Intermediate Basketball</i></p>
              </div>
            </div>
            <div class="registration-info">
              <p><b>3</b> of <b>5</b><br />Spots Left</p>
            </div>
            <div class="event-info">
              <p>November 10th</p>
              <p>4:30 PM - 6:00 PM</p>
              <p>Gym 3rd Floor, Court A</p>
            </div>
          </div>
          <div class="post">
            <div class="user-info">
              <img src={Example_Profile} alt=""/>
              <div>
                <p class="post-title">Stacy's Basketball Game</p>
                <p class="experience-level"><i>Intermediate Basketball</i></p>
              </div>
            </div>
            <div class="registration-info">
              <p><b>3</b> of <b>5</b><br />Spots Left</p>
            </div>
            <div class="event-info">
              <p>November 10th</p>
              <p>4:30 PM - 6:00 PM</p>
              <p>Gym 3rd Floor, Court A</p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;