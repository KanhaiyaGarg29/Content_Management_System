import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import atom from "./images/atom.png";
import search from "./images/search.png";
import { useState } from "react";
import toast from "react-hot-toast";

export default function Navbar({ isLoggedin, handleLogout }) {
  const[isSearchVisible,setSearchVisible]=useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  //render home page
  function clickHandler() {
    navigate("/");
  }

  // to render the login button to login page
  function loginHandler() {
    navigate("/login");
  }

  // render the signup page
  function signupHandler(){
    navigate("/signup");
  }

  //to display search input
  function displaySearch(){
     setSearchVisible(!isSearchVisible);
  }

  function handleSearch(){
    const searchField=searchQuery.toLowerCase();
    switch(searchField){
      case 'html':
        navigate('/html');
        break;
      case 'css':
        navigate('/css');
        break;
      case 'javascript':
      case 'js':
        navigate('/javascript');
        break;
      case 'react':
        navigate('/react');
        break;
      default:
        // alert("No Search Found");
        toast.error("No search found");
        break;
    }

    setSearchQuery("");
  }
  
  function handleKeyPress(event) {
    if (event.key === "Enter") {
      handleSearch();
    }
  }
  return (
    <div className="navbar" data-aos="fade-down" data-aos-duration="1000">
      <div className="nav-links">
        <div className="navlogo" onClick={clickHandler}>
          <img src={atom} alt=""></img>
          <span className="navlogoname">BitLegion</span>
        </div>
        <div className="navlinks">
          <Link to="/html" className="link">
            HTML
          </Link>
          <Link to="/css" className="link">
            CSS
          </Link>
          <Link
            to="/javascript"
            className="link"
          >
            Javascript
          </Link>
          <Link to="/react" className="link">
            React
          </Link>
        </div>

        {/* search-container */}
        <div className="navsearch">

          {isSearchVisible && (
            <input
              type="text"
              placeholder="Search"
              className="search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyPress={handleKeyPress} 
            />
          )}
          
           <img src={search} className="search" alt="" onClick={displaySearch}></img>
         

          
        </div>

           {/* signup button */}
        <div className="login-container">
        {!isLoggedin && (
            <button class="cssbuttons-io-button" onClick={signupHandler}>
              SignUp
              <div class="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path
                    fill="currentColor"
                    d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                  ></path>
                </svg>
              </div>
            </button>
          )}
          {/* login and logout based on condition */}
          {!isLoggedin ? (
            <div>
              <button class="cssbuttons-io-button" onClick={loginHandler}>
                Login
                <div class="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                  >
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path
                      fill="currentColor"
                      d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                    ></path>
                  </svg>
                </div>
              </button>
            </div>
          ) : (
            <button class="cssbuttons-io-button" onClick={handleLogout}>
              LogOut
              <div class="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path
                    fill="currentColor"
                    d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                  ></path>
                </svg>
              </div>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}