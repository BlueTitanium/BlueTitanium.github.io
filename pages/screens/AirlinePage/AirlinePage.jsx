import React from "react";
import "./style.css";
import Fade from 'react-reveal/Fade';
export const AirlinePage = () => {
  return (
    <div className="AIRLINE-page">
      <div className="div">
      <Fade left>
      <div className="NAVBAR-SECTION">
        <a className="nbutton-2" href="/">
                      
                      <div className="noverlap-group-3" >
                      <img loading="lazy" className="home" alt="home" src="/img/HomeButton.png"  />
                      </div>
                      </a>
        </div>
        </Fade>
        <Fade down>
        <header className="HEADER">
          <img className="rectangle" alt="Rectangle" src="/img-airline/rectangle-9.png" />
          <div className="group">
            <div className="overlap-group">
              <div className="text-wrapper">AIRLINE FLIGHTS MANAGER</div>
            </div>
          </div>
        </header>
        </Fade>
        <div className="ABOUT">
          <Fade left>
          <img className="img" alt="Rectangle" src="/img-airline/rectangle-18.png" />
          <div className="rectangle-2" />
          </Fade>
          <Fade right>
          <div className="overlap-group-wrapper">
            <div className="overlap-group-2">
              <div className="text-wrapper-2">ABOUT</div>
              <p className="p">
                The airline flights management system is a website that me and my team created for the NYU database
                class. The goal of the project was to use what we learned in class to develop a software with login
                authentications, information handling, and ticket purchasing methods for a potential airline. It is
                intended to be a practical database management software.
              </p>
            </div>
          </div>
          </Fade>
        </div>
        <div className="ROLES">
          <Fade left>
          <div className="rectangle-3" />
          </Fade>
          <Fade right>
          <div className="div-wrapper">
            <div className="overlap-group-3">
              <div className="text-wrapper-3">ROLES AND FOCUS</div>
            </div>
          </div>
          </Fade>
          <Fade right>
          <div className="overlap-wrapper">
            <div className="overlap">
              <div className="text-wrapper-4">MYSQL</div>
            </div>
          </div>
          </Fade>
          <Fade left>
          <div className="group-2">
            <div className="overlap-2">
              <div className="text-wrapper-5">DATABASE DEV.</div>
            </div>
          </div>
          </Fade>
          <Fade right>
          <div className="group-3">
            <div className="overlap-2">
              <div className="text-wrapper-5">FRONTEND DEV.</div>
            </div>
          </div>
          </Fade>
          <Fade left>
          <div className="group-4">
            <div className="HTML-PYTHON-wrapper">
              <div className="HTML-PYTHON">HTML &amp; PYTHON</div>
            </div>
          </div>
          </Fade>
        </div>
        <div className="PLATFORMS">
          <Fade left>
          <div className="group-5">
            <div className="overlap-group-3">
              <div className="text-wrapper-6">PLATFORMS</div>
            </div>
          </div>
          </Fade>
          <Fade right>
          <div className="group-6">
            <div className="overlap-3">
              <div className="text-wrapper-7">BROWSER</div>
            </div>
          </div>
          </Fade>
          <Fade left>
          <a className="group-7" href="https://github.com/BlueTitanium/DatabaseFinalProject">
            <div className="overlap-4">
              <div className="text-wrapper-8">GITHUB REPO</div>
            </div>
          </a>
          </Fade>
          <Fade right>
          <div className="group-8">
            <div className="overlap-5">
              <div className="text-wrapper-9">launched</div>
              <div className="text-wrapper-10">2022</div>
            </div>
          </div>
          </Fade>
        </div>
        <Fade up>
        <div className="development">
          <div className="group-9">
            <div className="overlap-group-4">
              <div className="text-wrapper-11">DEVELOPMENT</div>
            </div>
          </div>
          <div className="group-10">
            <div className="i-was-tasked-with-wrapper">
              <p className="i-was-tasked-with">
                I was tasked with working on primarily the frontend and making sure the backend works well with the
                frontend design of the website and that it integrates well with the database. <br />I went for a clean
                bootstrap-based look for my interface.
                <br />
                It was important to both keep things simple while also conveying all of the relevant information.
                <br />
                The page was created for a class and we didn’t end up publishing the website, but I’ll share some
                pictures below and the GitHub repository is public.
              </p>
            </div>
          </div>
          <div className="rectangle-wrapper">
            <img className="rectangle-4" alt="Rectangle" src="/img-airline/rectangle-22-1.png" />
          </div>
          <div className="img-wrapper">
            <img className="rectangle-4" alt="Rectangle" src="/img-airline/rectangle-22.png" />
          </div>
        </div>
        
        <div className="conclusion">
          <div className="group-9">
            <div className="overlap-group-4">
              <div className="text-wrapper-11">CONCLUSION</div>
            </div>
          </div>
          <div className="group-11">
            <div className="overlap-6">
              <p className="text-wrapper-12">
                I learned a lot from this project. This was the first class I took in college about databases, so
                formally learning about how to integrate databases into websites was a great experience. I also liked
                using bootstrap to quickly prototype a website without manually writing every aspect of the website
                design. Although, I personally like designing my own websites to be more unique, I think it was a good
                experience to create a basic formal design for a project like this. In addition to the development work
                I had to do with the HTML and styling of the website, I also had to write documentation for many of the
                use case files in the project. I also had to fully review the website to make sure all of the
                functionality worked once all of the components were merged together by my team. Overall this was a
                great experience to have learned from.
              </p>
            </div>
          </div>
          <img className="rectangle-5" alt="Rectangle" src="/img-airline/rectangle-8.png" />
        </div>
        </Fade>
      </div>
    </div>
  );
};
