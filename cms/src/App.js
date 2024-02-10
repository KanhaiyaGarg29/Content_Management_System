import { useState,useEffect } from 'react';
import { useNavigate, Route, Routes,Navigate } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Data from './components/Data';
import LoginForm from "./components/LoginForm"
import SignUpForm from "./components/SignUpForm"
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

import Navbar from './components/Navbar';
import toast from 'react-hot-toast';

function App() {
  const navigate=useNavigate()
  const [isLoggedin, setIsLoggedin] = useState(false);

useEffect(() => {

// You can also pass an optional settings object
// below listed default settings
AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 1500, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});


  
}, [])

useEffect(() => {
 
  const loggedInStatus = localStorage.getItem('isLoggedIn');
  setIsLoggedin(loggedInStatus === 'true');
}, []);

  const handleLogin = () => {
    setIsLoggedin(true);
    localStorage.setItem('isLoggedIn', 'true');
  };

  const handleLogout = () => {
    setIsLoggedin(false);
    localStorage.removeItem('isLoggedIn');
    toast.success("Logout Successfully");
    navigate("/")
  };
  return (
    <div>
      <Navbar isLoggedin={isLoggedin} handleLogout={handleLogout}></Navbar>
       {/* <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/html" element={<Data value={1}></Data>}></Route>
        <Route path="/css" element={<Data value={2}></Data>}></Route>
        <Route path="/javascript" element={<Data value={3}></Data>}></Route>
        <Route path="/react" element={<Data value={4}></Data>}></Route>
        <Route path="/login" element={<LoginForm handleLogin={handleLogin} ></LoginForm>}></Route>
        <Route path="/signup" element={<SignUpForm  handleLogin={handleLogin}></SignUpForm>}></Route>
       </Routes> */}
       <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/login" element={<LoginForm handleLogin={handleLogin}></LoginForm>}></Route>
        <Route path="/signup" element={<SignUpForm handleLogin={handleLogin}></SignUpForm>}></Route>
        {isLoggedin ? (
          <>
            <Route path="/html" element={<Data value={1}></Data>}></Route>
            <Route path="/css" element={<Data value={2}></Data>}></Route>
            <Route path="/javascript" element={<Data value={3}></Data>}></Route>
            <Route path="/react" element={<Data value={4}></Data>}></Route>
          </>
        ) : (
          <Route path="*" element={<Navigate to="/login"  />}></Route>
        )}
      </Routes>
    </div>
  );
}

export default App;