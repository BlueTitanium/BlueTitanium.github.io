import React from "react";
import "./style.css";
import Fade from 'react-reveal/Fade';
export const CondemnedPage = () => {
  return (
    <div className="CONDEMNED-PAGE">
      <div className="group-wrapper">
        <div className="group">
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
            <img loading="lazy" className="rectangle" alt="Rectangle" src="/img-condemned/rectangle-8.png" />
            <div className="overlap-group-wrapper">
              <div className="overlap-group">
                <div className="text-wrapper">CONDEMNED</div>
              </div>
            </div>
          </header>
          </Fade>
          <div className="ABOUT">
            <Fade left>
            <img loading="lazy" className="img" alt="Rectangle" src="/img-condemned/rectangle-18.png" />
            <img loading="lazy" className="rectangle-2" alt="Rectangle" src="/img-condemned/rectangle-19-21.png" />
            </Fade>
            <Fade right>
            <div className="div-wrapper">
              <div className="div">
                <div className="text-wrapper-2">ABOUT</div>
                <p className="p">
                  Condemned is a narrative metroidvania game with momentum grapple-based movement and fun combat. This
                  game was made in 6 weeks by a group of students led by me for a game design final. We created all
                  assets, beside audio, by ourselves including all art and animations. The narrative is based on Dante’s
                  inferno and about a prisoner who tries to travel deeper into hell.
                </p>
              </div>
            </div>
            </Fade>
          </div>
          <div className="ROLES">
            <Fade left>
            <div className="rectangle-3" />
            </Fade>
            <div className="group-2">
              <Fade right>
              <div className="overlap-group-2">
                <div className="text-wrapper-3">ROLES AND FOCUS</div>
              </div>
              </Fade>
            </div>
            <div className="overlap-wrapper">
              <Fade right>
              <div className="overlap">
                <div className="text-wrapper-4">DEVELOPER</div>
              </div>
              </Fade>
            </div>
            <div className="group-3">
            <Fade left>
              <div className="overlap-2">
                <div className="text-wrapper-5">LEADER</div>
              </div>
              </Fade>
            </div>
            <div className="group-4">
            <Fade right>
              <div className="overlap-3">
                <div className="text-wrapper-6">SCRUM MASTER</div>
              </div>
              </Fade>
            </div>
            <div className="group-5">
            <Fade right>
              <div className="overlap-3">
                <div className="text-wrapper-6">GAME DESIGNER</div>
              </div>
              </Fade>
            </div>
            <div className="group-6">
            <Fade right>
              <div className="overlap-4">
                
                <div className="text-wrapper-7">QUALITY ASSURANCE SPECIALIST</div>
              </div>
              </Fade>
            </div>
            <div className="group-7">
              <Fade left>
              <div className="overlap-5">
                <div className="text-wrapper-8">UNITY ENGINE</div>
              </div></Fade>
            </div>
            <div className="group-8">
            <Fade left>
              <div className="overlap-6">
                <div className="text-wrapper-9">ARTIST</div>
              </div></Fade>
            </div>
          </div>
          <div className="PLATFORMS">
            <Fade left>
            <div className="group-9">
              <div className="overlap-group-2">
                <div className="text-wrapper-10">PLATFORMS</div>
              </div>
            </div>
            </Fade>
            <Fade left>
            <a
              className="group-10"
              href="https://bluetitanium.itch.io/condemned"
            >
              <div className="overlap-7">
                <div className="text-wrapper-11">ITCH.IO</div>
              </div>
            </a>
            </Fade>
            <Fade right>
            <div className="group-11">
              <div className="overlap-8">
                <div className="text-wrapper-12">WEB GL</div>
              </div>
            </div>
            </Fade>
            <Fade right>
            <div className="group-12">
              <div className="overlap-9">
                <div className="text-wrapper-13">launched</div>
                <div className="text-wrapper-14">2023</div>
              </div>
            </div>
            </Fade>
          </div>
          <Fade up>
          <div className="CONCLUSION">
            <div className="group-13">
              <div className="overlap-group-3">
                <div className="design-process">what we learned</div>
                <div className="text-wrapper-15">CONCLUSION</div>
              </div>
            </div>
            <div className="group-14">
              <div className="overall-this-was-a-wrapper">
                <p className="overall-this-was-a">
                  Overall, this was a great game to work on. We had a clear goal in mind and my team did a great job of
                  completing their tasks on schedule and in many cases, going above and beyond. Teamwork-wise we had a
                  lot of chemistry so we were able to do very well. <br />
                  In terms of the game itself, we didn’t have many challenges other than tweaking balance and
                  optimization. We had to undergo many rounds of playtesting to get the game feel and difficulty of the
                  game just right to how we had wanted it to be. The optimization was a little tougher because we needed
                  to export the game onto a WebGL format while being smooth but we had lots of VFX and particles, so we
                  had to cut some of it out and reduce a little of the visual polish our game had. This drilled into my
                  head how important optimization truly was.
                  <br />
                  On a personal level, I was really proud of this game because of how much time and effort I personally
                  put into this project. I really wanted it to succeed and I believe I became a better programmer and
                  designer through this process.
                </p>
              </div>
            </div>
            <img loading="lazy" className="rectangle-4" alt="Rectangle" src="/img-condemned/rectangle-61.png" />
          </div>
          </Fade>
          <Fade up>
          <div className="GAMEPLAY-VIDEO">
            <div className="group-15">
              <div className="overlap-group-3">
                <div className="text-wrapper-15">GAMEPLAY VIDEO</div>
              </div>
            </div>
            <iframe className="rectangle-5" controls src="https://www.youtube.com/embed/yCUGu-wusuQ"></iframe>
          </div>
          </Fade>
          <div className="FINAL-FEATURES">
            <Fade right>
            <div className="group-13">
              <div className="overlap-group-3">
                <p className="design-process">what we ended up with</p>
                <div className="text-wrapper-15">FINAL FEATURES</div>
              </div>
            </div>
            </Fade>
            <Fade left>
            <div className="group-16">
              <div className="ALL-ART-HANDCRAFTED-wrapper">
                <p className="text-wrapper-16">
                  <ul>
                    <li>
                      ALL ART HANDCRAFTED BY US
                    </li>
                    <ul>
                      <li>
                        Player and Enemy animations
                      </li>
                      <li>
                        Tile sets for each map
                      </li>
                      <li>
                        Backgrounds for each map
                      </li>
                      <li>
                        Obstacles
                      </li><li>
                        NPCs
                      </li><li>
                        UI art and animations
                      </li>
                    </ul>
                    <li>
                      Player mechanics
                    </li>
                    <ul>
                      <li>
                        Physics-based Movement (w/ lots of control to player)
                      </li><li>
                        ziplining/grappling
                      </li><li>
                        picking up and throwing objects
                      </li><li>
                        straight throws
                      </li><li>
                        heavy throws (gravity)
                      </li><li>
                        Molotov throw (Fire on ground)
                      </li></ul>
                  </ul>
                </p>
              </div>
            </div>
            </Fade>
            <Fade right>
            <div className="group-17">
              <div className="mechanic-progression-wrapper">
                <p className="text-wrapper-17">
                  <ul>
                    <li>
                      Mechanic Progression
                    </li>
                    <ul>
                      <li>
                        in the form of upgrade objects
                      </li>
                      <ul>
                        <li>
                          Chain hook upgrade
                        </li>
                        <li>
                          wall jump upgrade
                        </li>
                        <li>
                          damage increase upgrade
                        </li>
                        <li>
                          health increase upgrade
                        </li>
                      </ul>
                    </ul>
                    <li>
                      Level progression
                    </li>
                    <ul>
                    <li>
                      Items are either on the floor of a certain area or given as a reward from a combat zone
                    </li>
                    <li>
                      Doors and keys to get to next area(s) and level
                    </li>
                    <li>
                      Gemstones to unlock boss fight
                    </li>
                    </ul>
                    <li>
                      Enemy AI
                    </li>
                    <ul>
                    <li>4 enemies per chapter
                    </li>
                    <li>
                      Grounded melee
                    </li>
                    <li>
                      Grounded ranged
                    </li>
                    <li>
                      Flying melee
                    </li>
                    <li>
                      Flying Ranged
                    </li>
                    <li>
                      A* algorithm for pathfinding
                    </li>
                    </ul>
                    <li>
                      Obstacles
                    </li>
                    <ul>
                    <li>
                      Lava
                    </li>
                    <li>
                      Spinning spikes
                    </li>
                    <li>
                      crumbling platforms
                    </li>
                    </ul>
                  </ul>
                </p>
              </div>
            </div>
            </Fade>
            <Fade left>
            <div className="group-18">
              <div className="environmental-wrapper">
                <p className="text-wrapper-17">
                  <ul>
                    <li>
                  Environmental mechanics
                    </li>
                    <ul>
                    <li>
                  Anti-grapple zones
                  </li>
                  <li>
                  wind zones
                  </li><li>
                  Midair hook points
                  </li></ul><li>2 full Levels
                  </li><ul><li>
                  Limbo &amp; Lust
                  </li><li>
                  Levels are metroidvania style with the goal of exploring the map to figure out how to proceed
                  </li><li>
                  Have certain parkour sections and certain combat zones
                  </li><li>
                  Parkour gets more difficult throughout the game
                  </li></ul><li>
                  UI
                  </li><ul><li>
                  Pause menu (has sound controls)
                  </li><li>
                  HUD
                  </li><li>
                  Display HP and icons for picked up objects and hook
                  </li><li>
                  Display minimap
                  </li></ul><li>
                  Save system
                  </li><ul> <li>
                  (you can leave the game and come back later)
                  </li></ul><li>
                  Checkpoints (heals player as well)
                  </li>
                  <li>
                  VFX and particle effects
                  </li>
                  </ul>
                </p>
              </div>
            </div>
            </Fade>
            <Fade right>
            <div className="group-19">
              <div className="VFX-and-particle-wrapper">
                <p className="text-wrapper-16">
                  <ul>
                  <li>
                  Music and SFX for every action
                  </li><li>
                  Dialogue system with fully fleshed out lore
                  </li><ul><li>
                  Lore sometimes gives hints in the game if you pay attention
                  </li></ul><li>
                  Boss fight
                  </li><ul><li>
                  Fleshed out AI, playtested and at a difficulty that we like
                  </li></ul><li>
                  Tutorialization for basic mechanics
                  </li><ul><li>
                  Some stuff will be hidden to the user because we want to allow room for the player to explore and have
                  fun!
                  </li></ul><li>
                  Difficulty settings for anybody to be able to play the game
                  </li><ul><li>
                  Easy, Normal, Hard
                  </li></ul></ul>
                </p>
              </div>
            </div></Fade>
            <Fade left>
            <div className="group-20">
              <div className="flexcontainer-wrapper">
                <div className="flexcontainer">
                  <p className="text">
                    <span className="span">
                      We actually ended up going beyond our original expectations and had a ton of extra content and
                      accomplished a lot of great work.
                      <br />
                    </span>
                  </p>
                  <p className="text">
                    <span className="span">FEATURES BELOW:</span>
                  </p>
                </div>
              </div>
            </div>
            </Fade>
            <Fade right>
            <img loading="lazy" className="rectangle-6" alt="Rectangle" src="/img-condemned/rectangle-23.png" />
            <img loading="lazy" className="rectangle-7" alt="Rectangle" src="/img-condemned/rectangle-24.png" />
            </Fade>
            <Fade left>
            <img loading="lazy" className="rectangle-8" alt="Rectangle" src="/img-condemned/rectangle-25.png" />
            <img loading="lazy" className="rectangle-9" alt="Rectangle" src="/img-condemned/rectangle-26.gif" />
            </Fade>
            <Fade right>
            <img loading="lazy" className="rectangle-10" alt="Rectangle" src="/img-condemned/rectangle-27.png" />
            </Fade>
            <Fade left>
            <img loading="lazy" className="rectangle-11" alt="Rectangle" src="/img-condemned/rectangle-29.gif" /></Fade>
            <Fade right>
            <img loading="lazy" className="rectangle-12" alt="Rectangle" src="/img-condemned/rectangle-28.png" /></Fade>
          </div>
          <div className="CONCEPT">
            <Fade left>
            <div className="group-15">
              <div className="overlap-group-3">
                <div className="text-wrapper-15">CONCEPT &amp; ORIGINAL SCOPE</div>
              </div>
            </div>
            </Fade>
            <Fade left>
            <div className="group-21">
              <div className="condemned-is-loosely-wrapper">
                <p className="condemned-is-loosely">
                  Condemned is loosely based on the story, “Dante’s Inferno”.&nbsp;&nbsp;It is about a prisoner in the
                  first circle, Limbo, who tries to get to the center of the nine circles of hell. This prisoner is
                  guided by some mysterious figure who promises them an escape, giving them a renewed purpose in life.
                </p>
              </div>
            </div>
            </Fade>
            <Fade left>
            <div className="group-22">
              <div className="for-the-pitch-we-had-wrapper">
                <p className="for-the-pitch-we-had">
                  <span className="span">
                    For the pitch, we had our original scope as such:
                    <br />
                  </span>
                  <ul className="text-wrapper-18">
                    <li>Main character mechanics</li>
                    <ul>
                      <li>
                        Chain grapple</li>
                      <li>
                        Momentum, wall jump, double jump</li>
                      <li>
                        Items</li>
                    </ul>
                    <li>2 Chapters</li>
                    <ul>
                      <li>
                        Chapter 0: Limbo, Chapter 1: Lust
                      </li>
                      <li>
                        NPCs and unique dialogue in each chapter
                      </li>
                      <li>
                        2-3 enemies per chapter
                      </li>
                      <li>
                        Unique obstacles per level
                      </li>
                      <li>
                        A boss fight in Chapter 1
                      </li>
                    </ul>
                    <li>
                      Art and animations for the character and enemies
                    </li>
                    <li>
                      Fleshed out game feel effects and polish
                    </li>
                    <li>
                      Present a vertical slice of this game
                    </li>
                  </ul>
                </p>
              </div>
            </div>
            </Fade>
            <Fade right>
            <div className="group-23">
              <div className="overlap-10">
                <p className="text-wrapper-19">
                  When designing the scope, we planned on being both ambitious while also being reasonable because we
                  only had 6 in-class weeks to work on this project while having to handle all of our other coursework.
                  This meant that we needed to show a vertical slice of our project, showing all of the mechanics and
                  the general idea of the game and its narrative. So we opted to make a game with 2 “chapters” instead
                  of making a full game, because it would be a disservice to the idea if we tried making the full idea.
                  In the future, we might come back and try to do the rest of the game if we are not all too busy.
                </p>
              </div>
            </div>
            </Fade>
            <Fade right>
            <img loading="lazy" className="rectangle-13" alt="Rectangle" src="/img-condemned/rectangle-21.gif" /></Fade>
            <Fade left><img loading="lazy" className="rectangle-14" alt="Rectangle" src="/img-condemned/rectangle-22.png" /></Fade>
          </div>
          <div className="DEVELOPMENT-PROCESS">
            <Fade right>
            <div className="group-13">
              <div className="overlap-group-3">
                <div className="design-process">mechanics, art, and design</div>
                <div className="text-wrapper-15">DEVELOPMENT PROCESS</div>
              </div>
            </div>
            </Fade>
            <Fade right>
            <img loading="lazy" className="rectangle-15" alt="Rectangle" src="/img-condemned/rectangle-48.svg" />
            <div className="group-24">
              <div className="the-main-mechanic-of-wrapper">
                <p className="text-wrapper-20">
                  <ul>
                    <li>
                  The main mechanic of the game is grappling and item usage
                  </li><li>
                  The grapple mechanic can be used to zip to walls, zip items to yourself, and zip to thrown items
                  </li><li>
                  The grapple mechanic in conjunction with our momentum based movement leads to smooth movement (you can
                  see it in the full gameplay video)
                  </li><li>
                  There are different types of throwable items but all of them have the same base mechanics
                  </li><ul><li>
                  They can be thrown to deal damage
                  </li><li>
                  They can be grabbed while on the ground using the chain grapple
                  </li><li>
                  They can be grappled to in mid-air, requires lots of skill
                  </li></ul><li>
                  The combat is skill based in that you can string together combos using the melee attack, the chain
                  hook, and the items.
                  </li>
                  </ul>
                </p>
              </div>
            </div>
            </Fade>
            <Fade left>
            <img loading="lazy" className="rectangle-16" alt="Rectangle" src="/img-condemned/rectangle-44.gif" />
            </Fade>
            <Fade right>
            <img loading="lazy" className="rectangle-17" alt="Rectangle" src="/img-condemned/rectangle-49.gif" />
            <img loading="lazy" className="rectangle-18" alt="Rectangle" src="/img-condemned/rectangle-50.gif" />
            <img loading="lazy" className="rectangle-19" alt="Rectangle" src="/img-condemned/rectangle-51.gif" />
            </Fade>
            <Fade left>
            <img loading="lazy" className="rectangle-20" alt="Rectangle" src="/img-condemned/rectangle-45.gif" />
            <img loading="lazy" className="rectangle-21" alt="Rectangle" src="/img-condemned/rectangle-46.gif" />
            </Fade>
            <Fade right>
            <img loading="lazy" className="rectangle-22" alt="Rectangle" src="/img-condemned/rectangle-52.svg" />
            </Fade>
            <Fade right>
            <div className="group-25">
              <div className="we-had-UI-icons-and-wrapper">
                <p className="text-wrapper-20">
                  <ul>
                    <li>
                  We had UI icons and text for all of the necessary information displayed on screen
                  </li><li>I personally designed all of the UI myself for this game and drew all of the sprites necessary
                  for it. </li><li>
                  The dialogue system shows both characters while minimizing the screen space to give a “cinematic”
                  feel.
                  </li><li>
                  The checkpoint system isn’t explicit at being a checkpoint, but if you pay attention when you “rift
                  attune” you will see your health healing and you will respawn at the attuned rift. </li><li>
                  There is a mini-map for the player to know where they are at all times and to help them grapple around
                  </li><li>
                  The pause menu has a stylized animation and has audio options as we decided not to implement other
                  types of settings into the game.
                  </li>
                  </ul>
                </p>
              </div>
            </div>
            </Fade>
            <Fade left>
            <img loading="lazy" className="rectangle-23" alt="Rectangle" src="/img-condemned/rectangle-53.gif" />
            <img loading="lazy" className="rectangle-24" alt="Rectangle" src="/img-condemned/rectangle-54.gif" />
            <img loading="lazy" className="rectangle-25" alt="Rectangle" src="/img-condemned/rectangle-55.gif" />
            </Fade>
            <Fade up>
            <img loading="lazy" className="rectangle-26" alt="Rectangle" src="/img-condemned/rectangle-56.png" />
            <div className="overlap-11">
              <img loading="lazy" className="image" alt="Image" src="/img-condemned/image65-1.gif" />
              <img loading="lazy" className="image-2" alt="Image" src="/img-condemned/image36-1.gif" />
              <img loading="lazy" className="image-3" alt="Image" src="/img-condemned/image63-1.gif" />
              <img loading="lazy" className="image-4" alt="Image" src="/img-condemned/image49-1.gif" />
              <img loading="lazy" className="image-5" alt="Image" src="/img-condemned/image50-1.gif" />
            </div>
            
            <img loading="lazy" className="rectangle-27" alt="Rectangle" src="/img-condemned/rectangle-59.png" />
            </Fade>
            <Fade left>
            <div className="group-26">
              <div className="we-had-complex-AI-wrapper">
                <p className="we-had-complex-AI">
                <ul>
                  <li>
                  We had complex AI for the enemies
                  </li><ul><li>
                  2D pathfinding based on terrain and what type of enemy it is
                  </li></ul><li>
                  All enemies have 4 states
                  </li><ul><li>
                  Idle/patrol
                  </li><li>
                  Chasing
                  </li><li>
                  Attacking
                  </li><li>
                  Stunned/hit
                  </li><ul><li>
                  enemies get stunned whenever hit by a projectile, so there is importance in picking up and throwing
                  projectiles
                  </li></ul></ul><li>
                  There are 4 types of enemies
                  </li><ul><li>
                  Ground melee
                  </li><li>
                  Ground ranged
                  </li><li>
                  Flying melee
                  </li><li>
                  Flying ranged
                  </li></ul><li>
                  The ones shown in the gifs are flying melee enemies
                  </li><li>
                  There are 4 enemies for each level, so 8 enemies total, excluding the boss. </li><ul><li>
                  The enemies are drawn and themed based on the level.
                  </li></ul>
                  </ul>
                </p>
              </div>
            </div>
            </Fade>
            <Fade left>
            <div className="group-27">
              <div className="we-decided-that-the-wrapper">
                <p className="we-decided-that-the">
                  <ul>
                    <li>
                  We decided that the final boss of this game would be Cleopatra
                  </li><ul><li>
                  Cleopatra is the queen of Egypt while also the canonical queen of Lust in Dante’s Inferno
                  </li></ul><li>
                  We spent quite a bit of effort in trying to make a fun and unique boss fight while making it fair for
                  the player
                  </li><li>
                  The boss fight is really easy if the player gets all of the stat upgrades while being fairly difficult
                  if the player doesn’t get the stat upgrades.
                  </li><ul><li>
                  However, it is possible to beat the boss without taking damage and with zero stat upgrades, because
                  this is a skill heavy game and each of Cleopatra’s attacks have a “weakness”
                  </li></ul><li>
                  We implemented 2 different “forms” for the boss that she alternates between, which switches her AI
                  movement pattern and her attack move set.
                  </li><ul><li>
                  Upright form
                  </li><li>
                  Floating form
                  </li></ul><li>
                  We decided that the boss would have 6 total attacks in her move set based on which form she’s in and
                  how much health she has left
                  </li><ul><li>
                  Sand Throw, Sand Throw (quick ver), Sand Cat Pillar Raise, Multi-Pillar Raise, MeeMoos’ Gazes,
                  Circular Sand Throw
                  </li></ul><li>
                  The sand that Cleopatra throws can be grabbed midair&nbsp;&nbsp;and thrown back to deal double damage
                  back to her
                  </li><li>
                  There is a unique UI for this boss fight
                  </li><li>
                  There is a narrative cutscene for the boss fight
                  </li>
                  </ul>
                </p>
              </div>
            </div>
            </Fade>
            <Fade up>
            <div className="group-28">
              <div className="regarding-art-our-wrapper">
                <p className="regarding-art-our">
                  Regarding art, our entire team was comprised of people who are skilled at art so we were able to make
                  many sprites for the game. <br />I mainly made just the UI sprites as well as a couple of other
                  sprites because I was more focused on developing core aspects of the game.
                  <br />
                  Showcase of many, but not all, of the game’s sprites below:
                </p>
              </div>
            </div>
            
            <div className="group-29">
              <div className="overlap-12">
                <img loading="lazy" className="image-6" alt="Image" src="/img-condemned/image75-1.gif" />
                <img loading="lazy" className="image-7" alt="Image" src="/img-condemned/image70-1.gif" />
              </div>
              <img loading="lazy" className="image-8" alt="Image" src="/img-condemned/image70-2.gif" />
              <img loading="lazy" className="image-9" alt="Image" src="/img-condemned/image70-3.gif" />
              <img loading="lazy" className="image-10" alt="Image" src="/img-condemned/image70-4.gif" />
              <img loading="lazy" className="image-11" alt="Image" src="/img-condemned/image70-5.gif" />
            </div>
            <div className="group-30">
              <div className="overlap-13">
                <p className="text-wrapper-21">Animations for these enemies not shown here, but they are animated</p>
                <div className="text-wrapper-22">LIMBO</div>
                <div className="text-wrapper-23">LUST</div>
              </div>
            </div>
            </Fade>
            <Fade right>
            <img loading="lazy" className="image-12" alt="Image" src="/img-condemned/image88-1.gif" />
            <img loading="lazy" className="image-13" alt="Image" src="/img-condemned/image95-1.gif" />
            <img loading="lazy" className="image-14" alt="Image" src="/img-condemned/image92-1.gif" />
            </Fade>
          </div>
          <div className="LEVEL-DESIGN">
            <Fade left>
            <div className="group-13">
              <div className="overlap-group-3">
                <div className="design-process">sketches, art, &amp; outcomes</div>
                <div className="text-wrapper-15">LEVEL DESIGN PROCESS</div>
              </div>
            </div>
            </Fade>
            <Fade right>
            <div className="group-31">
              <div className="concept-art-initial-wrapper">
                <p className="concept-art-initial">
                  <ul>
                    <li>
                  Concept art &amp; initial sketches for the game and title screen </li>
                  <li>
                  Limbo is the first circle and we designed it to be an engaging tutorial</li>
                  <li>
                  The player would talk to various NPCs while learning about the realm and gaining more movement
                  abilities
                  </li><li>
                  There would be various parkour spots and combat zones for the player.
                  </li>
                  <ul>
                  <li>
                  combat zones would give health and damage upgrades
                  </li>
                  </ul>
                  </ul>
                </p>
              </div>
            </div>
            </Fade>
            <Fade right>
            <img loading="lazy" className="rectangle-28" alt="Rectangle" src="/img-condemned/rectangle-20.svg" />
            </Fade>
            <Fade left>
            <img loading="lazy" className="rectangle-29" alt="Rectangle" src="/img-condemned/rectangle-63.png" />
            </Fade>
            <Fade right>
            <img loading="lazy" className="rectangle-30" alt="Rectangle" src="/img-condemned/rectangle-62.png" />
            </Fade>
            <Fade left>
            <div className="group-32">
              <div className="initial-sketches-for-wrapper">
                <p className="text-wrapper-24">
                  <ul>
                    <li>
                  Initial sketches for the Lust circle of hell
                  </li><li>
                  We wanted this level to be movement heavy </li><li>
                  There would be wind-effects and and obstacles and parkour elements
                  </li><li>
                  In the initial sketch it was very barren and we were unsure of where the boss would be, so we left
                  that design for later.
                  </li>
                  </ul>
                </p>
              </div>
            </div>
            </Fade>
            <Fade right>
            <div className="group-33">
              <div className="development-process-wrapper">
                <p className="development-process">
                <ul>
                  <li>
                  Development process for the Limbo level design
                  </li><li>
                  The bottom most picture is the final design for the castle.
                  </li><li>
                  There were many small tweaks based on player feedback
                  </li><li>
                  We learned that having less open spaces actually allowed the player to move more
                  </li><li>
                  We also cut down on the amount of places to go because players got lost more often that we had liked.{" "}
                  </li><li>
                  The final result is a more smooth and fitting level for our mechanics.
                  </li><li>
                  Limbo contains progression powerups (the chain and wall jump powerups), checkpoints, NPCs, combat
                  zones, throwable items, parkour, ungrappleable points, keys and doors, and obstacles.
                  </li>
                  </ul>
                </p>
              </div>
            </div>
            </Fade>
            <Fade right>
            <img loading="lazy" className="rectangle-31" alt="Rectangle" src="/img-condemned/rectangle-33.svg" />
            <img loading="lazy" className="rectangle-32" alt="Rectangle" src="/img-condemned/rectangle-47.svg" />
            </Fade>
            <Fade left>
            <img loading="lazy" className="rectangle-33" alt="Rectangle" src="/img-condemned/rectangle-30.png" />
            <img loading="lazy" className="rectangle-34" alt="Rectangle" src="/img-condemned/rectangle-34.png" />
            <img loading="lazy" className="rectangle-35" alt="Rectangle" src="/img-condemned/rectangle-35.png" />
            <img loading="lazy" className="rectangle-36" alt="Rectangle" src="/img-condemned/rectangle-36.png" />
            </Fade>
            <Fade right>
            <div className="group-34">
              <div className="final-design-of-the-wrapper">
                <p className="final-design-of-the">
                  <ul>
                    <li>
                  Final design of the Lust level
                  </li><li>
                  We decided to make the entire island floating.
                  </li><li>
                  The player spawns close to the pyramid and must explore to find all of the gems
                  </li><li>
                  The villages have largely platform-based parkour
                  </li><li>
                  The desert parkour is based on wind mechanics
                  </li><li>
                  The labyrinth is an obstacle course with 3 diverging paths to get a gem.
                  </li>
                  </ul>
                </p>
              </div>
            </div>
            </Fade>
            <Fade left>
            <img loading="lazy" className="rectangle-37" alt="Rectangle" src="/img-condemned/rectangle-40.png" />
            <img loading="lazy" className="rectangle-38" alt="Rectangle" src="/img-condemned/rectangle-41.png" />
            <img loading="lazy" className="rectangle-39" alt="Rectangle" src="/img-condemned/rectangle-32.png" />
            </Fade>
            <Fade left>
            <div className="group-35">
              <div className="second-sketch-for-wrapper">
                <p className="text-wrapper-24">
                  <ul>
                    <li>
                  Second sketch for Lust’s level design
                  </li><li>
                  Decided to have 3 paths and 3 gems necessary to get to pyramid.
                  </li><ul><li>
                  Village, desert, &amp; catacombs
                  </li><li>
                  each path would have its own unique obstacles
                  </li><li>3 paths have varying difficulty
                  </li></ul><li>
                  Pyramid contains boss fight
                  </li><li>
                  Initial design would be a ground based design.
                  </li>
                  </ul>
                </p>
              </div>
            </div>
            </Fade>
            <Fade right>
            <img loading="lazy" className="rectangle-40" alt="Rectangle" src="/img-condemned/rectangle-38.png" /></Fade>
            <Fade left>
            <div className="group-36">
              <div className="the-boss-room-was-wrapper">
                <p className="the-boss-room-was">
                  <ul>
                    <li>
                  The boss room was designed to be simple
                  </li><li>
                  The combat room itself is a rectangle so the player can space themselves properly
                  </li><li>
                  At the entrance there is a powerup
                  </li><li>
                  In the boss room, there are throwable objects
                  </li><li>
                  At the end of the boss fight, it takes you to the final rift.
                  </li>
                  </ul>
                </p>
              </div>
            </div>
            </Fade>
            <Fade right>
            <img loading="lazy" className="rectangle-41" alt="Rectangle" src="/img-condemned/rectangle-42.png" />
            </Fade>
            <Fade left>
            <img loading="lazy" className="image-15" alt="Image" src="/img-condemned/image-98.png" />
            <img loading="lazy" className="image-16" alt="Image" src="/img-condemned/image-97.png" />
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
};
