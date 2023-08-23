import React from "react";
import "./style.css";
import Fade from 'react-reveal/Fade';
export const DentalPage = () => {
  return (
    <div className="DENTAL-page">
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
          <img className="rectangle" alt="Rectangle" src="/img-dental/rectangle-8.png" />
          <div className="group">
            <div className="overlap-group">
              <div className="dental-injection-VR">DENTAL INJECTION VR</div>
            </div>
          </div>
        </header>
        </Fade>
        <div className="ABOUT">
          <Fade left>
          <img className="img" alt="Rectangle" src="/img-dental/rectangle-18.png" />
          <div className="overlap">
            <img className="rectangle-2" alt="Rectangle" src="/img-dental/rectangle-34.png" />
          </div>
          </Fade>
          <Fade right>
          <div className="overlap-group-wrapper">
            <div className="overlap-group-2">
              <div className="text-wrapper">ABOUT</div>
              <p className="p">
                Local Anesthesia VR simulation: Inferior Alveolar Nerve Block is a dental injection VR simulation
                created and designed by the NYU College of Dentistry. All second-year students at the College of
                Dentistry use this simulation for preclinical training. This aids students with gaining experience in
                this field as it is hard to practice this particular type of anesthesia injection in dentistry.
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
              <div className="text-wrapper-2">ROLES AND FOCUS</div>
            </div>
            
          </div>
          <div className="overlap-wrapper">
            <div className="overlap-2">
              <div className="text-wrapper-3">DEVELOPER</div>
            </div>
          </div>
          </Fade>
          <Fade left>
          <div className="group-2">
            <div className="overlap-3">
              <div className="text-wrapper-4">DATABASE DEV.</div>
            </div>
          </div>
          </Fade>
          <Fade right>
          <div className="group-3">
            <div className="overlap-3">
              <div className="text-wrapper-4">UX RESEARCH</div>
            </div>
          </div>
          </Fade>
          <Fade left>
          <div className="group-4">
            <div className="overlap-4">
              <div className="text-wrapper-5">UNITY ENGINE</div>
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
            <div className="overlap-5">
              <div className="text-wrapper-7">META QUEST 2</div>
            </div>
          </div>
          </Fade>
          <Fade left>
          <a className="group-7" href="https://sites.google.com/nyu.edu/nyuusabilitylab/usability-services/case-studies/dentistry-vr-instructional-modules?authuser=0">
            <div className="NYU-LAB-no-download-wrapper">
              <p className="NYU-LAB-no-download">
                <span className="span">
                  NYU LAB
                  <br />
                </span>
                <span className="text-wrapper-8">(no download + outdated)</span>
              </p>
            </div>
          </a>
          </Fade>
          <Fade right>
          <div className="group-8">
            <div className="overlap-6">
              <div className="text-wrapper-9">launched</div>
              <div className="text-wrapper-10">2020</div>
            </div>
          </div>
          </Fade>
        </div>
        <div className="GOALS">
          <Fade right>
          <img className="rectangle-4" alt="Rectangle" src="/img-dental/rectangle-20.png" />
          <img className="rectangle-5" alt="Rectangle" src="/img-dental/rectangle-21.png" />
          </Fade>
          <Fade left>
          <div className="group-9">
            <div className="overlap-group-4">
              <div className="text-wrapper-11">GOALS &amp; CONTEXT</div>
            </div>
          </div>
          <div className="group-10">
            <div className="overlap-7">
              <p className="text-wrapper-12">
                The Dental Injection VR simulation trains a very particular type of anesthetic injection for the
                Inferior Alveolar Nerve Block. It is important for all dentistry students to accurately learn how to do
                this. This is why there are many research studies on how to optimize and teach the material better. In
                the research study I was involved with, it was a collaboration between the College of Dentistry and the
                CREATE Lab to see if adding animations and a more realistic 3D model would help students better learn
                the injection or if the realism goes towards the creepy uncanny valley territory. My job was to
                integrate the 3D model and animations properly with the pre-existing system as well as integrate data
                collection into Firebase and NYU’s Corelink system.
              </p>
            </div>
          </div>
          </Fade>
        </div>
        <div className="development">
          <Fade right>
          <div className="group-9">
            <div className="overlap-group-4">
              <div className="text-wrapper-11">DEVELOPMENT</div>
            </div>
          </div>
          
          <div className="group-11">
            <div className="i-was-tasked-with-wrapper">
              <p className="i-was-tasked-with">
                I was tasked with working on:
                <ul>
                <li>
                Adjusting the VR UI to be more fit for a research study (add a participant ID field to send to the
                database for better data collection)
                </li><li>
                Replacing the old human head model with a new, more realistic, human head model
                </li><li>
                Programmatically adjusting breathing and blink animations for the new model
                </li><li>
                Add baseline measurements so that researchers can track the physical state of the participant before and
                after the study. </li><li>
                Connect the simulation to the NYU Corelink database
                </li><li>
                Connect the simulation to a Firebase database for the researcher to collect her data.
                </li><li>
                Optimize settings to look good in a standalone Quest build
                </li>
                </ul>
              </p>
            </div>
          </div>
          </Fade>
          <Fade left>
          <div className="group-12">
            <div className="overlap-8">
              <img className="rectangle-6" alt="Rectangle" src="/img-dental/rectangle-22.png" />
              <div className="text-wrapper-13">Before</div>
            </div>
          </div>
          <div className="group-13">
            <div className="overlap-9">
              <img className="rectangle-6" alt="Rectangle" src="/img-dental/rectangle-23.png" />
              <div className="text-wrapper-13">After</div>
            </div>
          </div>
          </Fade>
          <Fade right>
          <div className="rectangle-7" />
          </Fade>
        </div>
        <Fade up>
        <div className="conclusion">
          <div className="group-9">
            <div className="overlap-group-4">
              <div className="text-wrapper-11">CONCLUSION</div>
            </div>
          </div>
          <div className="group-14">
            <div className="i-learned-a-lot-from-wrapper">
              <p className="i-learned-a-lot-from">
                I learned a lot from this project. Subtle changes can have drastic impacts on viewer perceptions of a
                simulation so it’s important to keep the details correct, especially in a dental simulation where
                anatomy matters a lot. Despite being a programmer primarily, I actually learned quite a bit of dental
                anatomy as I had to work closely with integrating the new model with the correct triggers and anatomy.
                The dental project was a mostly finished simulation when I started work on it, so I was able to study it
                and see the process of how to use VR with real life applications and understand the user experience
                needed to make it work well. For example, it’s important to make the user comfortable, which means
                allowing the user to change the height setting, chair angle, right or left handedness, and more
                accessibility options. One other thing about this project was that since it was a short timeframe, I had
                to speed up my workflow while providing good quality and so my coding skills had increased heavily
                during this project. I also had to ensure that the database uploads were correct so that data collection
                would run smoothly for the research.
                <br />
                This project is not available on an online platform publicly, but there are videos on the project,
                albeit outdated.
              </p>
            </div>
          </div>
          <img className="rectangle-8" alt="Rectangle" src="/img-dental/rectangle-8-1.png" />
        </div>
        </Fade>
      </div>
    </div>
  );
};
