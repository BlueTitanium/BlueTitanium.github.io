import React from "react";
import "./style.css";
import Fade from 'react-reveal/Fade';

export const LicvrPage = () => {
  return (
    <div className="LICVR-page">
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
          <img loading="lazy" className="rectangle" alt="Rectangle" src="/img-lic/rectangle-8.png" />
          <div className="group">
            <div className="overlap-group">
              <div className="text-wrapper">LOOKING INSIDE CELLS: VR</div>
            </div>
          </div>
        </header>
        </Fade>
        <div className="ABOUT">
          <Fade left>
          <img loading="lazy" className="img" alt="Rectangle" src="/img-lic/rectangle-18.png" />
          </Fade>
          <Fade left>
          <div className="overlap">
            <img loading="lazy" className="rectangle-2" alt="Rectangle" src="/img-lic/rectangle-34.png" />
            
          </div>
          </Fade>
          <Fade right>
          <div className="overlap-group-wrapper">
            <div className="overlap-group-2">
              <div className="text-wrapper-2">ABOUT</div>
              <p className="p">
                Looking Inside Cells, by NYU’s CREATE Lab, is a collection of VR simulations with 3D interactive cells.
                There are simulations that include building cells from scratch, to specialized cells, to processes like
                mitosis. This virtual reality experience is designed to engage and excite students on STEM subjects like
                Biology, while improving their knowledge.
              </p>
            </div>
          </div>
          </Fade>
        </div>
        <div className="GOALS">
          <Fade right>
          <img loading="lazy" className="rectangle-3" alt="Rectangle" src="/img-lic/rectangle-20.png" />
          </Fade>
          <div className="div-wrapper">
            <Fade left>
            <div className="overlap-group-3">
              <div className="GOALS-CONTEXT">GOALS &amp; CONTEXT</div>
            </div>
            </Fade>
          </div>
          <div className="overlap-wrapper">
          <Fade left>
            <div className="overlap-2">
              <p className="text-wrapper-3">
                Looking Inside Cells was designed to facilitate collaboration and learning amongst students through the
                use of interactive VR simulations. When I joined the team, much of the core interactions and simulations
                were completed, so my role was to add new simulations, add required features for research studies,
                implement new quality of life features, and adjust user experience within the app. I was also tasked
                with integrating data collection methods for research and for our sponsors.
              </p>
            </div>
            </Fade>
          </div>
        </div>
        <div className="TUTORIAL">
          <Fade left>
          <img loading="lazy" className="rectangle-4" alt="Rectangle" src="/img-lic/rectangle-21.png" />
          </Fade>
          <Fade left>
          <img loading="lazy" className="rectangle-5" alt="Rectangle" src="/img-lic/rectangle-22.png" />
          </Fade>
          <Fade left>
          <img loading="lazy" className="rectangle-6" alt="Rectangle" src="/img-lic/rectangle-23.png" />
          </Fade>
          <Fade left>
          <img loading="lazy" className="rectangle-7" alt="Rectangle" src="/img-lic/rectangle-26.png" />
          </Fade>
          <Fade right>
          <div className="group-2">
            <div className="overlap-group-4">
              <div className="text-wrapper-4">design process</div>
              <div className="text-wrapper-5">THE TUTORIAL</div>
            </div>
          </div>
          </Fade>
          <div className="group-3">
            <Fade left>
            <div className="overlap-3">
              <p className="text-wrapper-6">
                A big challenge was designing an intuitive tutorial that would introduce the players to every mechanic.
              </p>
            </div>
            </Fade>
          </div>
          <Fade right>
          <div className="group-4">
            <div className="flexcontainer-wrapper">
              <div className="flexcontainer">
                <p className="text">
                  <span className="span">
                    Show how to:
                    <br />
                  </span>
                </p>
                <ul className="list">
                <li className="text">
                  <span className="text-wrapper-7">
                    PLACE OBJECTS
                    <br />
                  </span>
                </li>
                <li className="text">
                  <span className="text-wrapper-7">
                    USE THE BAR SLIDER
                    <br />
                  </span>
                </li>
                <li className="text">
                  <span className="text-wrapper-7">
                    EXTEND OBJECTS
                    <br />
                  </span>
                </li>
                <li className="text">
                  <span className="text-wrapper-7">
                    DUPLICATE OBJECT
                    <br />
                  </span>
                </li>
                <li className="text">
                  <span className="text-wrapper-7">
                    SPRAY OBJECT
                    <br />
                  </span>
                </li>
                <li className="text">
                  <span className="text-wrapper-7">
                    DELETE OBJECTS
                    <br />
                  </span>
                </li>
                <li className="text">
                  <span className="text-wrapper-7">
                    ROTATE OBJECTS
                    <br />
                  </span>
                </li>
                <li className="text">
                  <span className="text-wrapper-7">TAKE A PICTURE</span>
                </li>
                </ul>
              </div>
            </div>
          </div>
          </Fade>
          <Fade left>
          <div className="group-5">
            <div className="the-tutorial-was-wrapper">
              <p className="the-tutorial-was">
                The tutorial was initially treated as a new simulation that attempted&nbsp;&nbsp;to teach all of the
                existing mechanics by making the player construct the lab, or the future playing area, by using every
                mechanic. Despite this being a fun idea and a fun simulation on its own, it was a long tutorial. After
                researching player feedback from this design, we noticed that this version of the tutorial was taking
                over 10 minutes on average. We planned on using this tutorial for research purposes and to introduce
                them to the mechanics so they can do the other, more educational, sims. However, since it takes so long,
                it adds to the overall time that the user is inside of VR, and it is not recommended to be in VR for a
                long time, so it was a major issue. There were two main reasons why the tutorial was taking so long to
                complete: the instructions were not specific enough making users lost at certain times and there was too
                many things to do in the tutorial.
              </p>
            </div>
          </div>
          </Fade>
          <Fade right>
          <div className="group-6">
            <div className="overlap-4">
              <p className="text-wrapper-8">
                We had to solve the problems of why the tutorial was taking so long to complete: the instructions were
                not specific enough making users lost at certain times and there was too many things to do in the
                tutorial. To solve the specificity of the instructions, we revised the text-based instructions greatly,
                and made each individual phase more straight-forward. We also removed the idea of “building the lab” and
                just made it so we just showed how to do the needed actions. This also helped in reducing the amount of
                things to do in the tutorial. We also figured that some of the research doesn’t need to use all of the
                “actions”, so I developed a way for each of the phases to be toggle-able so it would not be necessary to
                play through the entire tutorial depending on the build. The pitfall of this redesign was that it was
                less “creative” than our original design, but the changes we made were necessary in order to complete
                the goal of a concise tutorial. Beyond the major changes, we did lots of other minor revisions on the
                tutorial based on user experience research in order to keep fine tuning the simulations. The most recent
                versions of the tutorial ended up cutting the average time for it to around 5 minutes which also led to decreased times for the other simulations. The tutorial seems
                to still be somewhat difficult for first-time VR users, if they were unfamiliar with the controllers,
                but after a couple of minutes, users seem to get used to it. After all of the revisions, the tutorial
                functions well as a short introduction to the elements and mechanics that are present in all of the
                simulations.
              </p>
            </div>
          </div>
          </Fade>
          <Fade right>
          <div className="group-7">
            <div className="overlap-5">
              <div className="flexcontainer-2">
                <p className="text">
                  <span className="span">
                    Plan:
                    <br />
                  </span>
                </p>
                <p className="text">
                  <span className="text-wrapper-7">
                    The tutorial will be the player constructing the lab that they do the rest of the simulations in.
                    <br />
                  </span>
                </p>
                <p className="text">
                  <span className="text-wrapper-7">
                    The tutorial would be conducted in phases, showing how to do each type of action in each phase
                    <br />
                  </span>
                </p>
                <p className="text">
                  <span className="text-wrapper-7">
                    At the end of the tutorial, there would be a cool effect where they put on a VR headset and
                    virtually enter the lab from the robot character’s perspective
                  </span>
                </p>
              </div>
            </div>
          </div>
          </Fade>
          <Fade right>
          <div className="group-8">
            <div className="overlap-6">
              <div className="text-wrapper-9">INITIAL IDEA</div>
            </div>
          </div>
          </Fade>
          <Fade left>
          <div className="group-9">
            <div className="overlap-7">
              <div className="text-wrapper-10">w/ Initial Idea</div>
              <div className="text-wrapper-11">PROBLEMS</div>
            </div>
          </div>
          </Fade>
          <Fade right>
          <div className="group-10">
            <div className="overlap-8">
              <div className="text-wrapper-10">Revised Tutorial</div>
              <div className="text-wrapper-11">SOLUTIONS</div>
            </div>
          </div>
          </Fade>
          <Fade right>
          <div className="rectangle-8" />
          </Fade>
          <Fade left>
          <div className="rectangle-9" />
          </Fade>
        </div>
        <div className="ROLES">
          <Fade right>
          <div className="group-11">
            <div className="overlap-group-4">
              <div className="text-wrapper-5">ROLES AND FOCUS</div>
            </div>
          </div>
          </Fade>
          <Fade right>
          <div className="group-12">
            <div className="overlap-9">
              <div className="text-wrapper-12">DEVELOPER</div>
            </div>
          </div>
          </Fade>
          <Fade left>
          <div className="group-13">
            <div className="overlap-10">
              <div className="text-wrapper-13">UX DESIGN</div>
            </div>
          </div>
          </Fade>
          <Fade right>
          <div className="group-14">
            <div className="overlap-11">
              <div className="text-wrapper-14">NETWORK DEV.</div>
            </div>
          </div>
          </Fade>
          <Fade left>
          <div className="group-15">
            <div className="overlap-12">
              <div className="text-wrapper-15">UNREAL ENGINE</div>
            </div>
          </div>
          </Fade>
          <Fade right>
          <div className="group-16">
            <div className="overlap-13">
              <div className="text-wrapper-16">EDUCATIONAL RESEARCH</div>
            </div>
          </div>
          </Fade>
        </div>
        
        <div className="PLATFORMS">
          <Fade left>
          <div className="div-wrapper">
            <div className="overlap-group-3">
              <div className="text-wrapper-17">PLATFORMS</div>
            </div>
          </div>
          </Fade>
          <Fade left>
          <a className="group-17" href="https://www.verizon.com/learning/ar-vr-apps/Looking-Inside-Cells/23">
            <div className="overlap-14">
              <div className="text-wrapper-18">VERIZON VILS</div>
            </div>
          </a>
          </Fade>
          <Fade left>
          <div className="group-18">
            <div className="overlap-15">
              <p className="text-wrapper-16">HTC VIVE, HTC PRO, HTC FOCUS</p>
            </div>
          </div>
          </Fade>
          <Fade right>
          <div className="group-19">
            <div className="overlap-16">
              <div className="text-wrapper-19">META QUEST 1, 2</div>
            </div>
          </div>
          </Fade>
          <Fade right>
          <div className="group-20">
            <div className="overlap-17">
              <div className="text-wrapper-20">VALVE INDEX</div>
            </div>
          </div>
          </Fade>
          <Fade left>
          <div className="group-21">
            <div className="overlap-18">
              <p className="text-wrapper-21">PICO NEO 2, 3, PRO</p>
            </div>
          </div>
          </Fade>
          <Fade right>
          <a className="group-22" href="https://store.steampowered.com/app/1889880/Looking_Inside_Cells/">
            <div className="overlap-14">
              <div className="text-wrapper-18">STEAM (demo)</div>
            </div>
          </a>
          </Fade>
          <Fade left>
          <a className="group-23" href="https://abelanavr.com/">
            <div className="overlap-19">
              <div className="text-wrapper-22">ABELANA</div>
            </div>
          </a>
          </Fade>
          <Fade right>
          <div className="group-24">
            <div className="overlap-20">
              <div className="text-wrapper-23">launched</div>
              <div className="text-wrapper-24">2021</div>
            </div>
          </div>
          </Fade>
        </div>
        <div className="CONCLUSION">
          <Fade right>
          <img loading="lazy" className="rectangle-10" alt="Rectangle" src="/img-lic/rectangle-32.png" />
          </Fade>
          <Fade right>
          <div className="group-11">
            <div className="overlap-group-4">
              <div className="CONCLUSIONTEXT">CONCLUSION</div>
            </div>
          </div>
          </Fade>
          <Fade left>
          <div className="group-25">
            <div className="overall-i-learned-a-wrapper">
              <p className="overall-i-learned-a">
                Overall, I learned a lot from this project. Working with VR was extremely fun. Before working with the
                CREATE Lab at NYU, I hadn’t worked with XR technologies, but I did have game development experience.
                That experience allowed me to have a good start on working with XR and by this point, I consider myself
                to be fairly knowledgeable about VR development. Working in this type of environment allowed me to learn
                more in depth about all types of aspects of software development while having fun with the simulations.
                <br />
                If you’d like to check out this project, a couple of links to the simulation’s pages are at the top of this
                page.
              </p>
            </div>
          </div>
          </Fade>
        </div>
        <div className="RESEARCH">
          <Fade left>
          <img loading="lazy" className="rectangle-11" alt="Rectangle" src="/img-lic/rectangle-29.png" />
          </Fade>
          <Fade right>
          <img loading="lazy" className="rectangle-12" alt="Rectangle" src="/img-lic/rectangle-30.png" />
          </Fade>
          <Fade left>
          <img loading="lazy" className="rectangle-13" alt="Rectangle" src="/img-lic/rectangle-31.png" />
          </Fade>
          <div className="group-2">
            <Fade left>
            <div className="overlap-group-4">
              <div className="text-wrapper-4">what I learned</div>
              <div className="text-wrapper-5">RESEARCH</div>
            </div>
            </Fade>
          </div>
          <div className="group-26">
            <Fade right>
            <div className="overlap-21">
              <p className="text-wrapper-25">
                Despite not being a researcher myself, I was involved in various research studies as I aided in the
                development of the simulations and integrated data collection for their studies.
              </p>
            </div>
            </Fade>
          </div>
          <div className="group-27">
            <Fade left>
            <div className="some-of-the-wrapper">
              <p className="some-of-the">
                Some of the highlights of the development was trying to figure out the most efficient ways to implement
                certain things like haptics, sound design, help information, and role switching.
                <br />I learned a lot about network development while working on this project. For context, NYU has a
                high-speed research network and has it’s own networking framework and our lab was trying to implement
                the networking into this VR simulation so that there could be real-time collaboration. I was tasked with
                integrating their networking framework with the Looking Inside Cells simulations.
              </p>
            </div>
            </Fade>
          </div>
          <div className="group-28">
            <Fade right>
            <div className="overlap-22">
              <p className="text-wrapper-26">
                Throughout my process of helping with the design and development of these research projects, I learned a
                lot about research and project-based development as a whole. I made many revisions to the projects based
                on playtesting feedback and changes to the design of research. Not only was it informative, it made my
                rapid prototyping skills a lot stronger in addition to overall development skills.
              </p>
            </div>
            </Fade>
          </div>
        </div>
        <div className="HAPTICS">
          <Fade left>
          <img loading="lazy" className="rectangle-14" alt="Rectangle" src="/img-lic/rectangle-27.png" />
          </Fade>
          <Fade left>
          <img loading="lazy" className="rectangle-15" alt="Rectangle" src="/img-lic/rectangle-28.png" />
          </Fade>
          <div className="group-2">
            <Fade right>
            <div className="overlap-group-4">
              <div className="text-wrapper-4">design process</div>
              <div className="text-wrapper-5">HAPTIC FEEDBACK</div>
            </div>
            </Fade>
          </div>
          <Fade right>
          <div className="group-29">
            <div className="overlap-23">
              <p className="text-wrapper-27">
                Haptic feedback was an important part of a research study in our lab, but we realized that it is such a
                nice quality of life feature that adds to the “game” feel so we integrated it into our store build and
                all future builds.
              </p>
            </div>
          </div>
          </Fade>
          <Fade left>
          <div className="group-30">
            <div className="overlap-24">
              <p className="text-wrapper-28">
                The research study that was about haptics had many requirements for how the controllers would respond to
                the environment. Without going into detail about the research itself, each part of the simulations
                should try to respond to haptics. This included the various different actions, hovering over organelles,
                touching organelles, dragging interactive sliders, and hovering over UI elements. To tackle this in the
                most efficient manner, I implemented a singular “haptics controller” where any haptics function call
                would go to the controller and the controller would hand the “behind the scenes” code.
              </p>
            </div>
          </div>
          </Fade>
          <Fade right>
          <div className="group-31">
            <div className="the-next-part-of-the-wrapper">
              <p className="the-next-part-of-the">
                The next part of the study used VR haptic vest technology. We used a bHaptics vest and a specialized
                plugin for the vest and designed the patterns for the haptics ourselves. The idea is that the vest would
                respond to the events in the simulations. For example, if there was a swipe upwards, there should be a
                haptic feeling upwards. <br />
                <br />
                The purpose of these haptic integrations was that having the haptic sensation makes it feel more
                immersive and, subsequently, easier to learn with.
              </p>
            </div>
          </div>
          </Fade>
          <Fade right>
          <img loading="lazy" className="group-32" alt="Group" src="/img-lic/group-51.png" />
          </Fade>
          <Fade left>
          <img loading="lazy" className="group-33" alt="Group" src="/img-lic/group-53.png" />
          </Fade>
        </div>
      </div>
    </div>
  );
};
