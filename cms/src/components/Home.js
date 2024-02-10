import React from 'react'
import './Home.css'
import { Link, useNavigate } from 'react-router-dom'

function Home() {
  const navigate=useNavigate();

 function clickHandler(){
    navigate('/login')
 } 
  return (
    <>
      <div className='firstdiv'>
        <div data-aos='fade-right' className='subdiv1'>
          <p className='firsttext'>Discover<br></br>the professions<br></br>of the future</p>
          <p className='firstsectext'>Unlock the doors for your future with learning<br></br>and explore the most in demand language</p>
          <button className='btn1' onClick={clickHandler}>Start Learning</button>
          <button className='btn2'>Choose speciality</button>
        </div>
        <div data-aos='fade-left' className='subdiv2'>
          
        </div>
      </div>

      <div className='seconddiv'>
        <div className='secdiv1'>
          <p className='html'>HTML</p>
        </div>
        <div  className='secdiv2'>
          <p className='html2'>HyperText Markup Language</p>
          <Link to="/html" className='link1'>Learn More &gt;</Link>
        </div>
        <div className='secdiv3'>
          <p className='html3'>&lt; HTML &gt;</p>
        </div>
      </div>


      <div className='thirddiv'>
        <div className='thirddiv1'>
          <p className='css'>CSS</p>
        </div>
        <div className='thirddiv2'>
          <p className='css2'>Cascading Style sheet</p>
          <p className='css3'>The cascading magic that makes your web pages shine.</p>
        </div>
        <div data-aos="fade-up" className='thirddiv3'>
        <Link to="/css"  className='link1'>Learn More &gt;</Link>
        </div>
      </div>

      <div className='fourthdiv'>
          <div className='fourthdiv1'>
            <p className='javascript'>Javascript</p>
          </div>
          <div className='fourthdiv2'>
            <p className='js2'>The language of the web, where anything is possible.</p>
            <p className='js3'>Infinite possibilities</p>
          </div>
          <div className='fourthdiv3'>
            <Link to="/javascript"   className='link1'>Learn More &gt;</Link>
          </div>
          <div data-aos="flip-left" className='fourthdiv4'>
          </div>
      </div>

      <div className='fifthdiv'>
        <div className='fifthdiv1'>
          <p className='react'>React</p>
        </div>
        <div className='fifthdiv2'>
          <p className='react2'>Declarative, efficient, and flexible UI development</p>
          <p className='react3'>Flexible UI</p>
        </div>
        <div className='fifthdiv3'>
          <Link to="/react"   className='link1'>Learn More &gt;</Link>
        </div>
      <div className='fifthdiv4'>
        <div className="container1">
          <span className="react-logo">
            <span className="nucleo"></span>
          </span>
        </div>
      </div>
    </div>

    <div className="sixthdiv">
        <footer>
            <div className="footer-content">
                <h3>Bit Legion</h3>
                <p>The web is a vast and ever-changing landscape, but one thing remains constant: the power of information to connect people and change the world." - Tim Berners-Lee</p>
                <ul className="socials">
                    <li><a href="https://www.facebook.com/" target='_blank'><i className="fa fa-facebook"></i></a></li>
                    <li><a href="https://twitter.com/" target='_blank'><i className="fa fa-twitter"></i></a></li>
                    <li><a href="https://google.com/" target='_blank'><i className="fa fa-google-plus"></i></a></li>
                    <li><a href="https://youtube.com/" target='_blank'><i className="fa fa-youtube"></i></a></li>
                    <li><a href="https://in.linkedin.com/" target='_blank'><i className="fa fa-linkedin-square"></i></a></li>
                    <li><a href="https://www.whatsapp.com/" target='_blank'><i class="fa fa-whatsapp" aria-hidden="true"></i></a></li>
                    <li><a href="https://www.snapchat.com/" target='_blank'><i class="fa fa-snapchat" aria-hidden="true"></i></a></li>
              
                    
                </ul>
            </div>
            <div className="footer-bottom">
                <p>copyright &copy;2023 Bit Legion. designed by <span>Ketan, Kanhaiya & Jhanvi</span></p>
            </div>
        </footer>
    </div>

    </>  
  )
}

export default Home