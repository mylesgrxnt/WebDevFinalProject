import {Link} from "react-router-dom"
import "../styles/home.css"
import Search from "../images/icons/Search.png"
import Example_Profile from "../images/Example_Profile.jpg"
import { post_data } from "../data"

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
            <div class="new-post"><Link to="/newpost">New Post</Link></div>
          </div>
        </section>
        <section class="user-feed">
          {post_data.map((user_post) => (
            <div class="post">
              <div class="at-a-glance">
                <input type="checkbox" class="expand" id="expand"/>
                <div class="user-info">
                  <img src={Example_Profile} alt=""/>
                  <div>
                    <p class="post-title">{user_post.title}</p>
                    <p class="experience-level"><i>{user_post.skill_level} {user_post.activity}</i></p>
                  </div>
                </div>
                <div class="registration-info">
                  <p><b>{user_post.spots_left}</b> of <b>{user_post.spots_needed}</b><br />Spots Left</p>
                </div>
                <div class="event-info">
                  <p>{user_post.month} {user_post.day}</p>
                  <p>4:30 PM - 6:00 PM</p>
                  <p>Gym 3rd Floor, Court A</p>
                </div>
                <label for="expand"></label>
              </div>
              <div class="description-registration">
                <div class="post-description">Come play basketball with my friends and I! We're kinda competitive but not too competitive haha</div>
                <div class="expanded-registration-info-container">
                  <button type="submit" class="registration-button">
                    I'll Be There!
                  </button>
                  <p><b>3</b> of <b>5</b><br />Spots Left</p>
                </div>
              </div>
              <div class="hosted-by"><i>Hosted by Stacy Coolidge</i></div>
            </div>
          ))}
        </section>
      </main>
    </>
  );
};

export default Home;