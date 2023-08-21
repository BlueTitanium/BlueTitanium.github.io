import React, { useState, useEffect } from 'react';
import { useRef } from "react";
import Fade from 'react-reveal/Fade';
import { useMediaQuery } from 'react-responsive'

import "./style.css";

export const PortfolioHomePage = () => {
  const projectSection = useRef(null);
  const contactSection = useRef(null);
  const headerSection = useRef(null);
  const scrollDown = (ref) => {
    // window.scrollTo({
    //   top: ref.current.offsetTop,
    //   behavior: 'smooth',
    // });
    ref.current.scrollIntoView({ behavior: "smooth"});
  };
  const [isVisible, setIsVisible] = useState(false);
  const [height, setHeight] = useState(0)
  
  useEffect(() => {   
    window.addEventListener("scroll", listenToScroll);
    return () => 
       window.removeEventListener("scroll", listenToScroll); 
  }, [])
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1080px)'
  })
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1079px)' })
  const listenToScroll = () => {
    
    let heightToHideFrom = 600;
    if(isTabletOrMobile){
      heightToHideFrom=200;
    }
    const winScroll = document.body.scrollTop || 
        document.documentElement.scrollTop;
    setHeight(winScroll);

    if (winScroll > heightToHideFrom) {  
         setIsVisible(true);
    } else {
         setIsVisible(false);
    }  
  };

  return (
    
    <div className="PORTFOLIO-HOME-PAGE">
      
      <div className="div">{
        
        <Fade down when={isVisible}>
        <div className="NAVBAR-SECTION">
        <div className="nbutton-2" >
                      
                      <div className="noverlap-group-3" onClick={() => scrollDown(headerSection)}>
                      <img loading="lazy" className="home" alt="home" src="/img/HomeButton.png"  />
                      </div>
                      </div>
        <div className="ngroup-4">
                    
                      <div className="nbutton-3" >
                      
                        <div className="overlap-group-3" onClick={() => scrollDown(projectSection)}>
                          <div className="text-wrapper-13">Projects</div>
                        </div>
                      </div>
                      <div className="nbutton-4">
                        <div className="overlap-group-3" onClick={() => scrollDown(contactSection)}>
                          <div className="text-wrapper-13">Contact</div>
                        </div>
                      </div>
                    </div>
        </div>
        </Fade>
        }
        
        <div className="CONTACTS-SECTION" ><a id="Contact"></a>
        <Fade up>
          <div className="group">
            <div className="overlap-group">
              <div className="text-wrapper" ref={contactSection}>CONTACT / LINKS</div>
            </div>
          </div>
          <div className="overlap-wrapper">
            <div className="overlap">
              <div className="rectangle" />
              <div className="text-wrapper-2">tsm6910@nyu.edu</div>
            </div>
          </div>
          
          <div className="icon-itch-dot-io-wrapper" >
          <a href='https://bluetitanium.itch.io/'>
            <img loading="lazy" className="icon-itch-dot-io" alt="Icon itch dot io" src="/img/icon-itch-dot-io.png"  />
            </a>
          </div>
          
          
          <div className="icon-linkedin-square-wrapper">
          <a href='https://www.linkedin.com/in/taneim-miah-a7825118a/'>
            <img loading="lazy" className="icon-linkedin-square" alt="Icon linkedin square" src="/img/icon-linkedin-square.png" />
            </a>
          </div>
          
          <div className="overlap-group-wrapper">
            <div className="overlap">
              <div className="rectangle">
              <div className="text-wrapper-2">taneim.smiah@gmail.com</div>
              </div>
            </div>
          </div>
          <div className="div-wrapper">
            <div className="overlap-2" >
              <a href="/pdf/Resume 2023 Fall.pdf">
              <div className="rectangle-2" >
              <div className="text-wrapper-3">LINK TO RESUME</div>
              </div>
              </a>
            </div>
          </div>
          <div className="overlap-3">
            <p className="p">website designed and programmed by me</p>
          </div>
          <div className="group-2" onClick={() => scrollDown(headerSection)}>  </div>
          
          <div className="icon-github-wrapper">
          <a href='https://github.com/BlueTitanium'>
            <img loading="lazy" className="icon-github" alt="Icon github" src="/img/icon-github.png"  />
            </a>
          </div>
          
          </Fade>
        </div>
        <div className="overlap-4">
          <div className="PROJECTS-SECTION">
            <div className="overlap-5">
              <div className="overlap-6">
                <div className="overlap-7" ref={projectSection}>
                  <Fade right>
                  <div className="sorter" />
                  </Fade>
                  <Fade left>
                  <div className="card-type-a">
                    <div className="overlap-8">
                      <div className="rectangle-3" />
                      <div className="text-wrapper-4" >EDUCATIONAL VR SIMULATIONS</div>
                      <div className="text-wrapper-5">LOOKING INSIDE CELLS</div>
                      <a className="button" href='/LIC'>

                        <div className="overlap-group-2" >
                          <div className="text-wrapper-6">Learn More</div>
                        </div>
                      </a>
                      <img loading="lazy" className="img" alt="Rectangle" src="/img/rectangle-8.png" />
                      <div className="group-3">
                        <div className="overlap-9">
                        <a>
                          <div className="text-wrapper-7">FEATURED</div>
                           </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  </Fade>
                  <Fade right>
                  <div className="card-type-b">
                    <div className="overlap-10">
                      <p className="METROIDVANIA-VIDEO"> METROIDVANIA VIDEO GAME DESIGN</p>
                      <div className="text-wrapper-5">CONDEMNED</div>
                      <a className="button-2" href='/Condemned'>
                        <div className="overlap-group-2">
                          <div className="text-wrapper-6">Learn More</div>
                        </div>
                      </a>
                      <img loading="lazy" className="rectangle-4" alt="Rectangle" src="/img/rectangle-9-1.png" />
                    </div>
                  </div>
                  </Fade>
                </div>
                <Fade left>
                <div className="card-type-a-2">
                  <div className="overlap-10">
                    <div className="text-wrapper-4">PRACTICAL VR SIMULATIONS</div>
                    <div className="text-wrapper-5">DENTAL INJECTION VR</div>
                    <div className="button">
                      <div className="overlap-group-2">
                        <div className="text-wrapper-6">Learn More</div>
                      </div>
                    </div>
                    <img loading="lazy" className="img" alt="Rectangle"src="/img/rectangle-8-1.png" />
                  </div>
                </div>
                </Fade>
              </div>
              <Fade right>
              <div className="card-type-b-2">
                <div className="overlap-10">
                  <div className="text-wrapper-4">WEB DEV &amp; DATABASE</div>
                  <div className="airline-flights">AIRLINE FLIGHTS MANAGER</div>
                  <div className="button-2">
                    <div className="overlap-group-2">
                      <div className="text-wrapper-6">Learn More</div>
                    </div>
                  </div>
                  <img loading="lazy" className="rectangle-4" alt="Rectangle" src="/img/rectangle-9.png"  />
                </div>
              </div>
              </Fade>
            </div>
            <Fade left>
            <div className="card-type-a-3">
              <div className="overlap-10">
                <p className="text-wrapper-4">REAL TIME CARD GAME DESIGN</p>
                <div className="text-wrapper-5">VK-00M3</div>
                <div className="button">
                  <div className="overlap-group-2">
                    <div className="text-wrapper-6">Learn More</div>
                  </div>
                </div>
                <img loading="lazy" className="img" alt="Rectangle" src="/img/rectangle-8-12.png"/>
              </div>
            </div>
            </Fade>
            <Fade left>
            <div className="card-type-a-4">
              <div className="overlap-10">
                <div className="text-wrapper-4">RESOURCE-BASED GAME DESIGN</div>
                <div className="text-wrapper-5">OVERHEAT</div>
                <div className="button">
                  <div className="overlap-group-2">
                    <div className="text-wrapper-8">LINK</div>
                  </div>
                </div>
                <img loading="lazy" className="img" alt="Rectangle" src="/img/rectangle-8-11.png" />
              </div>
            </div>
            </Fade>
            <Fade left>
            <div className="card-type-a-5">
              <div className="overlap-10">
                <div className="text-wrapper-4">PLATFORMER VIDEO GAME DESIGN</div>
                <div className="text-wrapper-5">GUN AND WHEEL</div>
                <div className="button">
                  <div className="overlap-group-2">
                    <div className="text-wrapper-8">LINK</div>
                  </div>
                </div>
                <img loading="lazy" className="rectangle-5" alt="Rectangle" src="/img/rectangle-8-10.png"  />
              </div>
            </div>
            </Fade>
            <Fade right>
            <div className="card-type-a-6">
              <div className="overlap-10">
                <p className="text-wrapper-4">STEALTH &amp; AI VIDEO GAME DESIGN</p>
                <div className="text-wrapper-5">ESCAPE THE CATACOMBS</div>
                <div className="button">
                  <div className="overlap-group-2">
                    <div className="text-wrapper-8">LINK</div>
                  </div>
                </div>
                <img loading="lazy" className="img" alt="Rectangle" src="/img/rectangle-8-9.png"  />
              </div>
            </div>
            </Fade>
            <Fade right>
            <div className="card-type-a-7">
              <div className="overlap-10">
                <p className="text-wrapper-4">ENDLESS ARENA VIDEO GAME DESIGN</p>
                <div className="text-wrapper-5">KNIGHT AND SPEAR</div>
                <div className="button">
                  <div className="overlap-group-2">
                    <div className="text-wrapper-8">LINK</div>
                  </div>
                </div>
                <img loading="lazy" className="rectangle-5" alt="Rectangle" src="/img/rectangle-8-8.png" />
              </div>
            </div>
            </Fade>
            <Fade right>
            <div className="card-type-a-8">
              <div className="overlap-10">
                <div className="text-wrapper-4">MINIMALIST VIDEO GAME DESIGN</div>
                <div className="text-wrapper-5">BALL AND BLADE</div>
                <div className="button">
                  <div className="overlap-group-2">
                    <div className="text-wrapper-8">LINK</div>
                  </div>
                </div>
                <img loading="lazy" className="img" alt="Rectangle" src="/img/rectangle-8-7.png" />
              </div>
            </div>
            </Fade>
            <Fade left>
            <div className="card-type-a-9">
              <div className="overlap-10">
                <p className="text-wrapper-9">ACTION PLATFORM VIDEO GAME DESIGN</p>
                <div className="text-wrapper-5">DISSONANCE</div>
                <div className="button">
                  <div className="overlap-group-2">
                    <div className="text-wrapper-8">LINK</div>
                  </div>
                </div>
                <img loading="lazy" className="rectangle-5" alt="Rectangle" src="/img/rectangle-8-6.png" />
              </div>
            </div>
            </Fade>
            <Fade left>
            <div className="card-type-a-10">
              <div className="overlap-10">
                <p className="text-wrapper-4">ACTION PLATFORM VIDEO GAME DESIGN</p>
                <div className="text-wrapper-5">MAD SCIENTIST’S LAIR</div>
                <div className="button">
                  <div className="overlap-group-2">
                    <div className="text-wrapper-8">LINK</div>
                  </div>
                </div>
                <img loading="lazy" className="img" alt="Rectangle" src="/img/rectangle-8-5.png" />
              </div>
            </div>
            </Fade>
            <Fade left>
            <div className="card-type-a-11">
              <div className="overlap-10">
                <div className="text-wrapper-4">PHYSICS SIMULATION</div>
                <div className="text-wrapper-5">PI COLLISIONS</div>
                <div className="button">
                  <div className="overlap-group-2">
                    <div className="text-wrapper-8">LINK</div>
                  </div>
                </div>
                <img loading="lazy" className="img" alt="Rectangle" src="/img/rectangle-8-4.png" />
              </div>
            </div>
            </Fade>
            <Fade right>
            <div className="card-type-a-12">
              <div className="overlap-10">
                <p className="text-wrapper-4">STEALTH &amp; AI VIDEO GAME DESIGN</p>
                <div className="text-wrapper-5">L.V. NOIRE</div>
                <div className="button">
                  <div className="overlap-group-2">
                    <div className="text-wrapper-8">LINK</div>
                  </div>
                </div>
                <img loading="lazy" className="rectangle-5" alt="Rectangle" src="/img/rectangle-8-3.svg" />
              </div>
            </div>
            </Fade>
            <Fade right>
            <div className="card-type-a-13">
              <div className="overlap-10">
                <div className="text-wrapper-4">PHYSICS-BASED VIDEO GAME DESIGN</div>
                <div className="text-wrapper-5">BALLS</div>
                <div className="button">
                  <div className="overlap-group-2">
                    <div className="text-wrapper-8">LINK</div>
                  </div>
                </div>
                <img loading="lazy" className="rectangle-5" alt="Rectangle" src="/img/rectangle-8-2.png" />
              </div>
            </div>
            </Fade>
            <Fade right>
            <div className="rectangle-6" />
            </Fade>
          </div>
          <header className="header">
            <a id="Header" ref={headerSection}></a>
            <div className="overlap-11">
              <div className="overlap-12">
                <Fade left>
                <div className="rectangle-7" />
                </Fade>
                <Fade left>
                <div className="rectangle-8" />
                </Fade>
                <Fade right>
                <div className="title-card">
                  <div className="overlap-13">
                    <div className="overlap-14">
                      <div className="text-wrapper-10">a site by</div>
                      <div className="text-wrapper-11">Taneim Miah</div>
                    </div>
                    <p className="text-wrapper-12">
                      Hi! I’m a software developer based in NYC. I’ve worked on many projects across a broad depth of
                      areas in computer science, primarily working with simulations and research. I’m passionate about
                      programming, art, and creating cool things.
                    </p>
                    <div className="group-4">
                      <div className="button-3" >
                        <div className="overlap-group-3" onClick={() => scrollDown(projectSection)}>
                          <div className="text-wrapper-13">Projects</div>
                        </div>
                      </div>
                      <div className="button-4">
                        <div className="overlap-group-3" onClick={() => scrollDown(contactSection)}>
                          <div className="text-wrapper-13">Contact</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                </Fade>
              </div>
              <Fade right>
              <div className="rectangle-9" />
              </Fade>
            </div>
          </header>
        </div>
      </div>
      
    </div>
  );
};
