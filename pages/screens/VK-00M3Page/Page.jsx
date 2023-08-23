import React from "react";
import "./style.css";
import Fade from 'react-reveal/Fade';
export const Page = () => {
  return (
    <div className="PAGE">
      <div className="vkm-PAGE">
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
          <img className="rectangle" alt="Rectangle" src="/img-vk00m3/rectangle-9.png" />
          <div className="group">
            <div className="overlap-group">
              <div className="vk">VK-00M3</div>
            </div>
          </div>
        </header>
        </Fade>
        <div className="ABOUT">
          <Fade left>
          <img className="img" alt="Rectangle" src="/img-vk00m3/rectangle-18.png" />
          <div className="overlap" />
          </Fade>
          <Fade right>
          <div className="overlap-group-wrapper">
            <div className="div">
              <div className="text-wrapper">ABOUT</div>
              <p className="p">
                VK-00M3 is an action heavy real-time card-based mobile game with roguelike elements. This game was
                created for the final project of my Game Engineering Class. We created all assets of the game ourselves
                beside some audio. My group and I decided to make a unique type of game that combines the randomness and
                strategy aspects of card games with the physical skill of action games.
              </p>
            </div>
          </div>
          </Fade>
        </div>
        <div className="ROLES">
          <Fade left>
          <div className="rectangle-2" />
          </Fade>
          <Fade right>
          <div className="div-wrapper">
            <div className="overlap-group-2">
              <div className="text-wrapper-2">ROLES AND FOCUS</div>
            </div>
            
          </div>
          </Fade>
          <Fade right>
          <div className="overlap-2">
            <div className="overlap-wrapper">
              <div className="overlap-3">
                <div className="text-wrapper-3">DEVELOPER</div>
              </div>
            </div>
          </div>
          </Fade>
          <Fade left>
          <div className="group-2">
            <div className="overlap-4">
              <div className="text-wrapper-4">LEADER</div>
            </div>
          </div>
          </Fade>
          <Fade right>
          <div className="group-3">
            <div className="overlap-5">
              <div className="text-wrapper-5">SCRUM MASTER</div>
            </div>
          </div>
          </Fade>
          <Fade right>
          <div className="group-4">
            <div className="overlap-5">
              <div className="text-wrapper-5">GAME DESIGNER</div>
            </div>
          </div>
          </Fade>
          <Fade left>
          <div className="group-5">
            <div className="overlap-6">
              <div className="text-wrapper-6">UNITY ENGINE</div>
            </div>
          </div>
          </Fade>
          <Fade left>
          <div className="group-6">
            <div className="overlap-7">
              <div className="text-wrapper-7">ARTIST</div>
            </div>
          </div>
          </Fade>
        </div>
        <div className="PLATFORMS">
          <Fade left>
          <div className="group-7">
            <div className="overlap-group-2">
              <div className="text-wrapper-8">PLATFORMS</div>
            </div>
          </div>
          </Fade>
          <Fade right>
          <div className="group-8">
            <div className="overlap-8">
              <div className="text-wrapper-9">ANDROID</div>
            </div>
          </div>
          </Fade>
          <Fade left>
          <a className="group-9" href="https://bluetitanium.itch.io/vk-00m3">
            <div className="overlap-9">
              <div className="text-wrapper-10">ITCH.IO</div>
            </div>
          </a>
          </Fade>
          <Fade right>
          <div className="group-10">
            <div className="overlap-10">
              <div className="text-wrapper-11">launched</div>
              <div className="text-wrapper-12">2020</div>
            </div>
          </div>
          </Fade>
        </div>
        <div className="GOALS">
          <Fade right>
          <img className="rectangle-3" alt="Rectangle" src="/img-vk00m3/rectangle-20.gif" />
          <img className="rectangle-4" alt="Rectangle" src="/img-vk00m3/rectangle-21.gif" />
          </Fade>
          <Fade left>
          <div className="group-11">
            <div className="overlap-group-3">
              <p className="text-wrapper-13">Concept art I drew for the main character</p>
              <img className="rectangle-5" alt="Rectangle" src="/img-vk00m3/rectangle-22-1.png" />
            </div>
          </div>
          
          <div className="group-12">
            <div className="overlap-group-4">
              <div className="text-wrapper-14">GOALS &amp; CONTEXT</div>
            </div>
          </div>
          <div className="group-13">
            <div className="overlap-11">
              <p className="text-wrapper-15">
                VK-00M3 is inspired by games like MegaMan Battle Network and Slay the Spire. The narrative is about a
                cyborg experiment, “VK-00M3”, who has been thrown into the lower streets and tries to rise back up and
                get revenge on her enemies. Our goal while designing was to design a smooth mobile interface that would
                work well with the idea of a card game and real-time gameplay. The reason we chose a card game and
                real-time combat was that it is fairly unique and contrasts the classical turn-based combat system of
                card games. We also decided to add some roguelike elements because we
                thought it would complement the card game style the best.
              </p>
            </div>
          </div>
          </Fade>
        </div>
        <div className="development">
          <Fade right>
          <div className="group-12">
            <div className="overlap-group-4">
              <div className="text-wrapper-14">DEVELOPMENT</div>
            </div>
          </div>
          </Fade>
          <Fade right>
          <div className="group-14">
            <div className="for-the-development-wrapper">
              <p className="for-the-development">
                For the development of this game we drew all of the sprites ourselves and everybody on the team
                participated in drawing. <br />
                For the design of the cards and combat system we decided on:
                <ul>
                  <li>
                Alternating between the planning phase and battle phase
                </li><li>
                Planning
                </li><ul><li>
                There are 10 cards starting off
                </li><li>
                Special cards get used up and are unique per battle (can have duplicates in deck)
                </li><li>
                Select cards to play IN ORDER
                </li></ul><li>
                Battle
                </li><ul><li>
                After using all cards, go to planning phase
                </li><li>
                Have to use cards in correct timing against enemies (enemy animations are telegraphed)
                </li><li>
                Each turn gives the enemies a reset of abilities to use as well
                </li></ul><li>
                Cards are unique
                </li><ul><li>
                Cards have their own stats and animations
                </li><li>
                card type (attack/defense), accuracy, damage, special effect
                </li><li>
                Enemies can use the same cards the player has, so the player has to think about the move sets and use
                strategy to defeat the enemies.
                </li></ul>
                </ul>
                My main role was a bit of everything as I worked on parts of the combat system, UI, and AI. 
                Since we planned this game really well, we actually ended up having enough time to implement a whole
                extra game mode that was the endless mode in addition to the story mode. We were able to make a
                reasonably polished game within 4 weeks.
                
              </p>
            </div>
          </div>
          </Fade>
          <Fade left>
          <img className="rectangle-6" alt="Rectangle" src="/img-vk00m3/rectangle-22.png" />
          <img className="rectangle-7" alt="Rectangle" src="/img-vk00m3/rectangle-23.png" />
          <img className="rectangle-8" alt="Rectangle" src="/img-vk00m3/rectangle-24.png" />
          <img className="rectangle-9" alt="Rectangle" src="/img-vk00m3/rectangle-25.png" />
          <img className="rectangle-10" alt="Rectangle" src="/img-vk00m3/rectangle-26.png" />
          <img className="rectangle-11" alt="Rectangle" src="/img-vk00m3/rectangle-27.png" />
          <img className="rectangle-12" alt="Rectangle" src="/img-vk00m3/rectangle-28.png" />
          </Fade>
          <Fade right>
          <img className="rectangle-13" alt="Rectangle" src="/img-vk00m3/rectangle-29.png" />
          </Fade>
        </div>
        <Fade up>
        <div className="conclusion">
          <div className="group-12">
            <div className="overlap-group-4">
              <div className="text-wrapper-14">CONCLUSION</div>
            </div>
          </div>
          <div className="group-15">
            <div className="overlap-12">
              <p className="text-wrapper-16">
                This project was a lot of fun to work on. I love playing card games so designing a unique card game was
                a rewarding experience. It was definitely challenging to get timings and balance correct, especially
                with our concept, but it’s at a level that we personally like. It is intended to be a very difficult and
                skill heavy game, and it very much is. This is a type of game that I would definitely like to expand
                more on in the future if I had the opportunity to do so, as we can add more of everything and flesh out
                the story a lot more. I learned a lot about systems and mobile game development through this project.
                Overall, it was a very rewarding experience.
              </p>
            </div>
          </div>
          <img className="rectangle-14" alt="Rectangle" src="/img-vk00m3/rectangle-8.png" />
        </div>
        </Fade>
      </div>
    </div>
  );
};
