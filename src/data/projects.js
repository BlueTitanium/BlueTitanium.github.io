// Edit this file to add, remove, or update projects.
// Every home page card and project detail page is rendered from this array.
//
// `thumbnail` is the card image / detail page hero image.
// `subtitle` is the short summary shown next to it on the detail page.
// `year` is the project's year; add an optional `endYear` for multi-year
// projects. For now only the end year is displayed when one is set (see
// utils/formatYear.js if you want to show a range like "2021–2024" instead).
// `pageLayout` is an ordered array of content blocks rendered below the
// header — each block has a `layoutType` deciding how it renders:
//
//   - "imageDescriptionPair": { image, description } — image + paragraph
//     side by side.
//   - "headerDescriptionPair": { header, description } — a small section
//     heading + paragraph side by side (no image).
//   - "fullWidthImage": { image } — a single image spanning the full width.
//   - "imageRow": { items: [{ image, caption }, ...] } — images side by side,
//     each with an optional caption underneath (e.g. before/after).
//   - "description": { description } — a plain full-width paragraph.
//   - "video": { url } — an embedded video (YouTube/Vimeo embed URL).
//   - "whitespace": { size } — an empty vertical spacer, size is "small",
//     "medium", or "large". There's no automatic gap between blocks
//     anymore — add one of these between blocks wherever you want spacing.
//
// Each image needs an `alt` — it's shown to screen readers and used as the
// lightbox's accessible label when the image is clicked to zoom in.

function img(src, alt) {
  return { src, alt };
}

function ws(size = "medium") {
  return { layoutType: "whitespace", size };
}

export const projects = [
  {
    id: "condemned",
    title: "Condemned",
    subtitle:
      "A narrative metroidvania game with momentum grapple-based movement and fun combat.",
    thumbnail: img(
      "/assets/projects/condemned-thumb.png",
      "Pixel art character suspended by glowing chains"
    ),
    tags: ["Game", "Unity", "C#", "Game Design", "Art", "Animation", "UI/UX"],
    link: "https://bluetitanium.itch.io/condemned",
    year: 2023,
    pageLayout: [
      {
        layoutType: "headerDescriptionPair",
        header: "The Game",
        description:
          "Condemned is a narrative metroidvania game with momentum grapple-based movement and fun combat. This game was made in 6 weeks by a group of students led by me for a game design final. We created all assets, beside audio, by ourselves including all art and animations. I played several roles in this project, as I led the team and handled most of the development. Regarding game design, it was a collaborative effort where everyone played a role. I also helped with the art and UI design in many parts of the game.",
      },
      ws("small"),
      {
        layoutType: "fullWidthImage",
        image: img(
          "/assets/projects/condemned-firstlayer.png",
          "Condemned screenshot 1"
        ),
      },
      ws(),
      {
        layoutType: "imageDescriptionPair",
        image: img("/assets/projects/condemned-chars.png", "Condemned screenshot 2"),
        description:
          "Condemned is loosely based on the story, “Dante’s Inferno”.  It is about a prisoner in the first circle, Limbo, who tries to get to the center of the nine circles of hell. This prisoner is guided by some mysterious figure who promises them an escape, giving them a renewed purpose in life.",
      },
      ws("small"),
      {
        layoutType: "imageDescriptionPair",
        image: img("/assets/projects/condemned-sprites.png", "Condemned screenshot 2"),
        description:
          "When designing the scope, we planned on being both ambitious while also being reasonable because we only had 6 in-class weeks to work on this project while having to handle all of our other coursework. This meant that we needed to show a vertical slice of our project, showing all of the mechanics and the general idea of the game and its narrative. So we opted to make a game with 2 “chapters” instead of making a full game, because it would be a disservice to the idea if we tried making the full idea. In the future, we might come back and try to do the rest of the game if we are not all too busy.\n\nWe actually ended up going beyond our original expectations and had a ton of extra content and accomplished a lot of great work.",
      },
      ws(),
      {
        layoutType: "headerDescriptionPair",
        header: "Conclusion",
        description:
          "Overall, this was a great game to work on. We had a clear goal in mind and my team did a great job of completing their tasks on schedule and in many cases, going above and beyond. Teamwork-wise we had a lot of chemistry so we were able to do very well.\n\nIn terms of the game itself, we didn’t have many challenges other than tweaking balance and optimization. We had to undergo many rounds of playtesting to get the game feel and difficulty of the game just right to how we had wanted it to be. The optimization was a little tougher because we needed to export the game onto a WebGL format while being smooth but we had lots of VFX and particles, so we had to cut some of it out and reduce a little of the visual polish our game had. This drilled into my head how important optimization truly was.\n\nOn a personal level, I was really proud of this game because of how much time and effort I personally put into this project. I really wanted it to succeed and I believe I became a better programmer and designer through this process.",
      },
      ws(),
      { layoutType: "video", url: "https://www.youtube.com/embed/yCUGu-wusuQ" },
    ],
  },
  {
    id: "vr-counselor",
    title: "VR Counselor @ NYU",
    subtitle: "A VR counseling experience for social workers in training, made in collaboration with NYU's Silver School of Social Work, utilizing AI-driven avatars to simulate counseling sessions.",
    thumbnail: img(
      "/assets/projects/vr-counselor-thumb.webp",
      "3D-rendered woman seated in a living room, part of a VR counseling training simulation"
    ),
    tags: ["Simulation", "Virtual Reality", "Unity", "C#", "AI", "Research", "UI/UX"],
    link: "https://steinhardt.nyu.edu/news/how-ai-avatar-will-help-social-work-students-practice-their-counseling-skills",
    year: 2025,
    pageLayout: [
      {layoutType: "headerDescriptionPair", header: "The Goal", description: "This project was a joint effort between the CREATE Lab, which I was the lead VR developer for at the time, and NYU's Silver School of Social Work. The goal was to create a VR counseling experience for social workers in training, allowing them to practice their counseling skills in a safe and controlled environment."},
      ws(),
      {layoutType: "imageDescriptionPair", image: img("/assets/projects/vr-counselor-1.png", "VR Counselor screenshot 1"), description: "The simulation features a virtual client, who is an AI-driven avatar that responds to the user's counseling techniques. The user can practice various counseling methods and receive feedback on their performance. The main tricky aspects of this were the AI-driven avatar and making sure that it ran both smoothly in VR and portray it's emotions properly. \n\nWe collaborated with an artist to create the avatar, and I worked on the AI and VR implementation.\n\n It took many iterations to get the avatar's responses and emotions to feel natural and realistic, and even still I see much room for improvement. As AI continues to progress, I hope we continue improving this project and make it a more effective tool for social work training!"},
      ws(),
      {layoutType: "fullWidthImage", image: img("/assets/projects/avatar-ai-logic-themed-1920.webp", "VR Counselor screenshot 2")},
      {layoutType: "description", description: "Credit: Ci Song, The main artist I worked with on this project who created the avatar and the concept designs shown above."},
      ws(),
      {layoutType: "description", description: "I make a cameo in this video :D!"},
      { layoutType: "video", url: "https://www.youtube.com/embed/aUaFP7gLBzg" },
    ],
  },
  {
    id: "dental-injection-vr",
    title: "Dental Injection VR",
    subtitle: "A VR simulation for training the Inferior Alveolar Nerve Block injection, created by the NYU College of Dentistry and used by all of its second-year students.",
    thumbnail: img(
      "/assets/projects/dental-8.png",
      "In-simulation view of a patient's head with transparent skin showing facial anatomy, and a gloved hand holding a dental syringe near the jaw"
    ),
    tags: ["Simulation", "Virtual Reality", "Unity", "C#", "Research"],
    link: "https://sites.google.com/nyu.edu/nyuusabilitylab/usability-services/case-studies/dentistry-vr-instructional-modules",
    year: 2024,
    pageLayout: [
      {layoutType: "headerDescriptionPair", header: "Goals & Context", description: "Local Anesthesia VR simulation: Inferior Alveolar Nerve Block is a dental injection VR simulation created and designed by the NYU College of Dentistry. All second-year students at the College of Dentistry use this simulation for preclinical training. This aids students with gaining experience in this field as it is hard to practice this particular type of anesthesia injection in dentistry.\n\nIt is important for all dentistry students to accurately learn how to do this injection. This is why there are many research studies on how to optimize and teach the material better.\n\nIn the research study I was involved with, it was a collaboration between the College of Dentistry and the CREATE Lab to see if adding animations and a more realistic 3D model would help students better learn the injection or if the realism goes towards the creepy uncanny valley territory. My job was to integrate the 3D model and animations properly with the pre-existing system as well as integrate data collection into Firebase and NYU’s Corelink system."},
      ws(),
      {layoutType: "fullWidthImage", image: img("/assets/projects/dental-1.png", "VR view of a dental instrument tray with forceps, gauze, and a cotton swab, with a gloved hand reaching in")},
      ws(),
      {layoutType: "headerDescriptionPair", header: "Development", description: "I was tasked with working on:\n• Adjusting the VR UI to be more fit for a research study (add a participant ID field to send to the database for better data collection)\n• Replacing the old human head model with a new, more realistic, human head model\n• Programmatically adjusting breathing and blink animations for the new model\n• Add baseline measurements so that researchers can track the physical state of the participant before and after the study\n• Connect the simulation to the NYU Corelink database\n• Connect the simulation to a Firebase database for the researcher to collect her data\n• Optimize settings to look good in a standalone Quest build"},
      ws(),
      {layoutType: "imageRow", items: [
        {image: img("/assets/projects/dental-6.png", "Original bald patient head model with its mouth open, before the update"), caption: "Before"},
        {image: img("/assets/projects/dental-7.png", "New, more realistic patient head model with hair and its mouth open, after the update"), caption: "After"},
      ]},
      ws(),
      {layoutType: "headerDescriptionPair", header: "Conclusion", description: "I learned a lot from this project. Subtle changes can have drastic impacts on viewer perceptions of a simulation so it’s important to keep the details correct, especially in a dental simulation where anatomy matters a lot. Despite being a programmer primarily, I actually learned quite a bit of dental anatomy as I had to work closely with integrating the new model with the correct triggers and anatomy.\n\nThe dental project was a mostly finished simulation when I started work on it, so I was able to study it and see the process of how to use VR with real life applications and understand the user experience needed to make it work well. For example, it’s important to make the user comfortable, which means allowing the user to change the height setting, chair angle, right or left handedness, and more accessibility options.\n\nOne other thing about this project was that since it was a short timeframe, I had to speed up my workflow while providing good quality and so my coding skills had increased heavily during this project. I also had to ensure that the database uploads were correct so that data collection would run smoothly for the research.\n\nThis project is not available on an online platform publicly, but there are videos on the project, albeit outdated."},
    ],
  },
  {
    id: "looking-inside-cells",
    title: "Looking Inside Cells",
    subtitle: "A collection of VR simulations with interactive 3D cells, built by NYU's CREATE Lab to make STEM subjects like Biology more engaging for students.",
    thumbnail: img(
      "/assets/projects/lic-9.png",
      "Looking Inside Cells key art: a cutaway 3D animal cell above the game's title and app icon"
    ),
    tags: ["Simulation", "Virtual Reality", "Game", "Unreal", "C++", "JavaScript", "Education", "Research", "Networking", "UI/UX"],
    link: "https://steinhardt.nyu.edu/create/research/looking-inside",
    year: 2021,
    endYear: 2024,
    pageLayout: [
      {layoutType: "headerDescriptionPair", header: "Goals & Context", description: "Looking Inside Cells, by NYU’s CREATE Lab, is a collection of VR simulations with 3D interactive cells. The simulations range from building cells from scratch, to specialized cells, to processes like mitosis. This virtual reality experience is designed to engage and excite students on STEM subjects like Biology, while improving their knowledge. It is meant for small groups of students, and is a 5G-enabled learning experience aimed especially at students in underserved communities, funded by the Verizon Foundation. It is available on Steam, PICO, and VIVEPORT.\n\nLooking Inside Cells was designed to facilitate collaboration and learning amongst students through the use of interactive VR simulations. When I joined the team, much of the core interactions and simulations were completed, so my role was to add new simulations, add required features for research studies, implement new quality of life features, and adjust user experience within the app. I was also tasked with integrating data collection methods for research and for our sponsors."},
      ws(),
      {layoutType: "fullWidthImage", image: img("/assets/projects/lic-1.png", "Four colorful robot avatars in yellow, magenta, cyan, and green floating around a circular lab in VR")},
      ws(),
      {layoutType: "video", url: "https://www.youtube.com/embed/l7Q-FR4wv8w"},
      {layoutType: "description", description: "Feature walkthrough of the simulations, from NYU CREATE."},
      ws(),
      {layoutType: "headerDescriptionPair", header: "Multiplayer Networking", description: "Looking Inside Cells is designed for small groups of students working together, so the simulations needed real-time multiplayer. For this, I invented a networking solution from scratch, built with Node.js and Unreal’s networking logic. I designed and implemented my own server infrastructure and logic.\n\nThis was a big challenge for me, because I hadn’t made any practical implementation of a networked application before this, besides what I had done in class. On top of building the networking logic itself, I also had to handle using Microsoft Azure for the server.\n\nMultiplayer also wasn’t a proper part of the project before I started working on it, so I had to figure out how to turn the existing singleplayer simulations into multiplayer.\n\nA major goal was ensuring low latency and a high speed connection. Multiplayer gameplay that isn’t smooth is a problem in any game, but in VR it can even cause motion sickness, so I had the game use a 128 tick server to make it feel as smooth as possible.\n\nThe final challenge was the budget. I was able to accomplish my goal of creating smooth multiplayer that worked completely correctly, but we didn’t have the budget to maintain the servers in the long term, so we had to disable the servers for the Steam release."},
      ws(),
      {layoutType: "fullWidthImage", image: img("/assets/projects/lic-10.png", "VR view of the lab with a yellow and a green robot avatar and a Build a Cell panel listing organelles")},
      ws("small"),
      {layoutType: "headerDescriptionPair", header: "The Tutorial", description: "A big challenge was designing an intuitive tutorial that would introduce the players to every mechanic. It needed to show how to:\n• Place objects\n• Use the bar slider\n• Extend objects\n• Duplicate objects\n• Spray objects\n• Delete objects\n• Rotate objects\n• Take a picture"},
      ws(),
      {layoutType: "headerDescriptionPair", header: "The Initial Idea", description: "The tutorial was initially treated as a new simulation that attempted to teach all of the existing mechanics by making the player construct the lab, or the future playing area, by using every mechanic. The plan:\n• The tutorial would be the player constructing the lab that they do the rest of the simulations in\n• It would be conducted in phases, showing how to do each type of action in each phase\n• At the end, there would be a cool effect where they put on a VR headset and virtually enter the lab from the robot character’s perspective\n\nDespite this being a fun idea and a fun simulation on its own, it was a long tutorial. After researching player feedback from this design, we noticed that this version of the tutorial was taking over 10 minutes on average. We planned on using this tutorial for research purposes and to introduce them to the mechanics so they can do the other, more educational, sims. However, since it takes so long, it adds to the overall time that the user is inside of VR, and it is not recommended to be in VR for a long time, so it was a major issue. There were two main reasons why the tutorial was taking so long to complete: the instructions were not specific enough making users lost at certain times and there was too many things to do in the tutorial."},
      ws("small"),
      {layoutType: "imageRow", items: [
        {image: img("/assets/projects/lic-5.png", "Overhead view of the geodesic dome lab with a circular platform inside, against a purple and red sky")},
        {image: img("/assets/projects/lic-7.png", "3D model of a VR headset with a teal accent stripe, shown on a dark grid")},
      ]},
      ws(),
      {layoutType: "headerDescriptionPair", header: "The Revised Tutorial", description: "To solve the specificity of the instructions, we revised the text-based instructions greatly, and made each individual phase more straight-forward. We also removed the idea of “building the lab” and just made it so we just showed how to do the needed actions. This also helped in reducing the amount of things to do in the tutorial. We also figured that some of the research doesn’t need to use all of the “actions”, so I developed a way for each of the phases to be toggle-able so it would not be necessary to play through the entire tutorial depending on the build.\n\nThe pitfall of this redesign was that it was less “creative” than our original design, but the changes we made were necessary in order to complete the goal of a concise tutorial. Beyond the major changes, we did lots of other minor revisions on the tutorial based on user experience research in order to keep fine tuning the simulations. The most recent versions of the tutorial ended up cutting the average time for it to around 5 minutes which also led to decreased times for the other simulations. The tutorial seems to still be somewhat difficult for first-time VR users, if they were unfamiliar with the controllers, but after a couple of minutes, users seem to get used to it. After all of the revisions, the tutorial functions well as a short introduction to the elements and mechanics that are present in all of the simulations."},
      ws("small"),
      {layoutType: "fullWidthImage", image: img("/assets/projects/lic-8.png", "In-simulation Tool Box and tutorial instruction panels showing organelle icons, a help button, and a Next Phase button")},
      ws(),
      {layoutType: "headerDescriptionPair", header: "Haptic Feedback", description: "Haptic feedback was an important part of a research study in our lab, but we realized that it is such a nice quality of life feature that adds to the “game” feel so we integrated it into our store build and all future builds.\n\nThe research study that was about haptics had many requirements for how the controllers would respond to the environment. Without going into detail about the research itself, each part of the simulations should try to respond to haptics. This included the various different actions, hovering over organelles, touching organelles, dragging interactive sliders, and hovering over UI elements. To tackle this in the most efficient manner, I implemented a singular “haptics controller” where any haptics function call would go to the controller and the controller would hand the “behind the scenes” code.\n\nThe next part of the study used VR haptic vest technology. We used a bHaptics vest and a specialized plugin for the vest and designed the patterns for the haptics ourselves. The idea is that the vest would respond to the events in the simulations. For example, if there was a swipe upwards, there should be a haptic feeling upwards.\n\nThe purpose of these haptic integrations was that having the haptic sensation makes it feel more immersive and, subsequently, easier to learn with."},
      ws("small"),
      {layoutType: "imageRow", items: [
        {image: img("/assets/projects/lic-13.png", "A pair of white VR controllers"), caption: "VR controllers"},
        {image: img("/assets/projects/lic-14.png", "A black bHaptics haptic vest with a zipper and a circular logo on the chest"), caption: "bHaptics vest"},
      ]},
      ws(),
      {layoutType: "headerDescriptionPair", header: "What I Learned", description: "Despite not being a researcher myself, I was involved in various research studies as I aided in the development of the simulations and integrated data collection for their studies.\n\nSome of the highlights of the development was trying to figure out the most efficient ways to implement certain things like haptics, sound design, help information, and role switching.\n\nI learned a lot about network development while working on this project, and I worked with networking in two different ways. For context, NYU has a high-speed research network and its own networking framework, which was mostly used for data collection, so I was tasked with integrating that framework with the Looking Inside Cells simulations. The real-time multiplayer gameplay, on the other hand, ran on the networking solution I built myself, described in the Multiplayer Networking section above.\n\nThroughout my process of helping with the design and development of these research projects, I learned a lot about research and project-based development as a whole. I made many revisions to the projects based on playtesting feedback and changes to the design of research. Not only was it informative, it made my rapid prototyping skills a lot stronger in addition to overall development skills."},
      ws(),
      {layoutType: "headerDescriptionPair", header: "Conclusion", description: "Overall, I learned a lot from this project. Working with VR was extremely fun. Before working with the CREATE Lab at NYU, I hadn’t worked with XR technologies, but I did have game development experience. That experience allowed me to have a good start on working with XR and by this point, I consider myself to be fairly knowledgeable about VR development. Working in this type of environment allowed me to learn more in depth about all types of aspects of software development while having fun with the simulations."},
    ],
  },
  {
    id: "looking-inside-cosmos",
    title: "Looking Inside Cosmos VR",
    subtitle: "A VR simulation built by NYU's CREATE Lab intended to teach students astronomy in a more immersive way.",
    thumbnail: img(
      "/assets/projects/cosmos-thumb.png",
      "Looking Inside Cosmos logo over a dark, blurred background with soft purple glows"
    ),
    tags: ["Simulation", "Virtual Reality", "Game", "Game Design", "Unity", "C#", "Education", "UI/UX", "Research"],
    year: 2024,
    endYear: 2026,
    pageLayout: [
      {layoutType: "headerDescriptionPair", header: "Goals & Context", description: "Looking Inside Cosmos VR is a VR Simulation built by NYU's CREATE Lab that teaches astronomy in a virtual environment by using the approach of multiple perspectives. We started this project in early 2024 and continue development on it to this day.\n\nThe goals of this project were to prepare for research studies and a more fun learning environment. The primary thing we wanted to learn from this project was to see if using an immersive approach to learning the moon phases might make that easier to learn, since traditionally it is a difficult concept for students to grasp. There were other research objectives, like seeing if multiple perspectives would help students learn better, or seeing which kind of teaching style could produce better results. \n\nSince this was a research project, we had to make sure that the simulations were designed in a way that would allow us to collect data and analyze it. Our primary goal was to make a simulation suitable for research, not necessarily to make a game, but we still tried to make it fun and engaging for students."},
      ws(),
      {layoutType: "video", url: "https://player.vimeo.com/video/1014379680"},
      {layoutType: "description", description: "Lunar Phases trailer for Looking Inside Cosmos VR."},
      ws(),
      {layoutType: "headerDescriptionPair", header: "Design", description: "The design of the simulation could be segmented in to two sides. One aspect was the research design, which I was involved in as a team member, and the other aspect was the design of the simulation itself, which I was the leader of. \n\nI was the main UI/UX and game designer of the project, and I was essentially tasked with figuring out how to translate the necessary functions the researchers were looking for into a playable VR simulation. I also had to design the simulation in a way that it was fairly realistic to physics while making sure that the computation wasn't too heavy on the system for Virtual Reality. I ended up having to write a lot of complex math to ensure that the simulation made since with the functionality we wanted to include. \n\nUI/UX design was a tough challenge for a VR game meant to teach astronomy to students who may not have ever used VR before. There were a ton of features that I had to scrap after lots of rounds of playtesting, due to our desires to keep things simple as possible. We also ended up limiting the flow of the simulation, opting to move away from a sandbox-style simulation. At the end of the many rounds of user research and iteration, we're finally at a point where it's usable for various studies. "},
      ws("small"),
      {layoutType: "fullWidthImage", image: img("/assets/projects/cosmos-1.png", "In-simulation Camera panel floating in space, framing a night view of the Earth with a Capture button below it and a small spaceship nearby")},
      ws(),
      {layoutType: "headerDescriptionPair", header: "Development", description: "I was the lead developer in charge of Looking Inside Cosmos VR. \n\nAs such, I had to coordinate the needs of the research team in a way that was feasible for a VR environment. I ended up managing the project using Trello boards to make things simple, and I made sure to communicate the development side of things to the researchers a lot. This was incredibly important as researchers often feel segmented from the development side a lot, so this bridge that I built between us, helped make the project's design and development process feel incredibly smooth.\n\nThis project was the mark of the shift away from Unreal Engine for the lab, so we shifted to Unity Engine. Luckily I was already quite experienced in Unity from past non-VR projects, so moving engines and creating a VR experience for Unity was quite simple, especially with all of the experience in Unreal VR I had. This moment made me realize the fact that the tool doesn't really matter, as long as you understand the fundamentals, the experience can carry over to anything relatively smoothly."},
      ws("small"),
      {layoutType: "fullWidthImage", image: img("/assets/projects/cosmos-3.webp", "VR view of the Earth and moon beside the Lunar Phase Diagram panel, which shows question marks for undiscovered phases, with a controller pointing a laser at the panel")},
      ws(),
      {layoutType: "headerDescriptionPair", header: "Conclusion", description: "Looking Inside Cosmos VR marked the first time I was tasked with leading a project at work. This was a really fun experience for me, and I really enjoyed having the ability to exercise my creative vision and apply it to a project that really matters. I really enjoyed both aspects of leading the UI/UX design and the technical development, despite it being a lot of work."},
    ],
  },
  {
    id: "airline-flights-manager",
    title: "Airline Flights Manager",
    subtitle: "A database-driven airline website with login authentication, flight search, and ticket purchasing, made with my team for NYU's database class.",
    thumbnail: img(
      "/assets/projects/airline-3.png",
      "Airline Reservation System search page with source, destination, and date fields and a Search button"
    ),
    tags: ["Website", "Database", "MySQL", "Python", "Bootstrap"],
    link: "https://github.com/BlueTitanium/DatabaseFinalProject",
    year: 2022,
    pageLayout: [
      {layoutType: "headerDescriptionPair", header: "Goals & Context", description: "The airline flights management system is a website that me and my team created for the NYU database class. The goal of the project was to use what we learned in class to develop a software with login authentications, information handling, and ticket purchasing methods for a potential airline. It is intended to be a practical database management software."},
      ws(),
      {layoutType: "fullWidthImage", image: img("/assets/projects/airline-1.png", "Departures and Arrivals tables with columns for times, price, flight number, and airports")},
      ws("small"),
      {layoutType: "headerDescriptionPair", header: "Development", description: "I was tasked with working on primarily the frontend and making sure the backend works well with the frontend design of the website and that it integrates well with the database.\n\nI went for a clean bootstrap-based look for my interface. It was important to both keep things simple while also conveying all of the relevant information.\n\nThe page was created for a class and we didn’t end up publishing the website, but I’ll share some pictures below and the GitHub repository is public."},
      ws("small"),
      {layoutType: "fullWidthImage", image: img("/assets/projects/airline-5.png", "Main menu of the airline website: a stack of blue buttons for viewing flights, searching, flight status, purchasing tickets, canceling a trip, rating flights, and spending history")},
      
      ws(),
      {layoutType: "headerDescriptionPair", header: "Conclusion", description: "I learned a lot from this project. This was the first class I took in college about databases, so formally learning about how to integrate databases into websites was a great experience. I also liked using bootstrap to quickly prototype a website without manually writing every aspect of the website design. Although, I personally like designing my own websites to be more unique, I think it was a good experience to create a basic formal design for a project like this.\n\nIn addition to the development work I had to do with the HTML and styling of the website, I also had to write documentation for many of the use case files in the project. I also had to fully review the website to make sure all of the functionality worked once all of the components were merged together by my team. Overall this was a great experience to have learned from."},
      ws("small"),
      {layoutType: "fullWidthImage", image: img("/assets/projects/airline-4.png", "Purchase ticket form with flight number and price, credit or debit card type, card number, name on card, and expiration date fields")},
    ],
  },
  {
    id: "stemai",
    title: "STEMAI",
    subtitle: "An AI platform for teachers to help conduct experiments with students in a low-cost and equitable way by utilizing AI tools.",
    thumbnail: img(
      "/assets/projects/stemai-thumb.png",
      "STEMAI upload screen: a cartoon avatar leaning on an \"Upload your file here\" box with a Browse Files button, accepting MP4 and CSV files"
    ),
    tags: ["Website", "AI", "Education", "Next.js", "Node.js", "Python", "Kubernetes"],
    year: 2026,
    pageLayout: [
      {layoutType: "headerDescriptionPair", header: "Mission & Approach", description: "STEMAI, designed and developed by the CREATE Lab, takes an inquiry-based learning approach to teaching students. I helped with the design and ideation of this project, along with being the project manager.\n\n• STEM-AI enables Active Learning through Exploration and Inquiry.\n    ◦ Mixed Reality: Combining real-life objects with digital data overlays.\n    ◦ Accessibility: Runs on lower-end devices like tablets and phones via WebXR.\n    ◦ Equity: Culturally relevant experiences for diverse student backgrounds."},
      ws(),
      {layoutType: "fullWidthImage", image: img("/assets/projects/stemai-1.png", "Visualization Graph panel showing a smooth green line graph with a marked point labeled 10, crossed by a faint pink line")},
      ws(),
      {layoutType: "headerDescriptionPair", header: "Design", description: "I was a part of the design team that determined what features we wanted. Our focus as designers here in the beginning stages of this project was to design something suitable for an MVP for teachers and students, but also for our lab. We went through a lot of iterations of designing what would be best, in terms of flexibility and also replicability, since we needed reliable data. \n\nFor the MVP study, we decided to isolate one particular kind of experiment, Momentum. This helped us narrow down our design and focus on what matters most. \n\nFor the overarching design, we wanted to make sure the design was very friendly and abstract. We originally had a human avatar, but then we chose to go with a shape-shifting blob avatar, since it is more abstract and approachable. The avatar would be a sort of AI helper. Along with the AI helper, we had to design the system to make it easy to use other AI tools, like AI vision, which is incredibly important for parsing live video.\n\nThe design that we ended up with, and are currently developing, is a lot more free-flowing. We realized that rigidity goes against the principles of experimentation anyway, and in order to use the AI tools to their fullest potential, we can, in fact, be much more open-ended."},
      ws("small"),
      {layoutType: "fullWidthImage", image: img("/assets/projects/stemai-2.png", "STEMAI question screen asking whether a baseball thrown gently by a kid or one thrown at 100 miles per hour by a professional has more momentum, with photos of each throw and two answer choices, A and B, shown with blob avatars")},
      ws(),
      {layoutType: "headerDescriptionPair", header: "Development", description: "For the development, I played the role of project manager and coordinated a group of developers and an artist to make the website according to specs that I architected. \n\nI decided which technologies to use and which ones would be most suitable for this project. I also figured out the best way to architect the project, which was to turn the site into a player of sorts that takes some data file and transforms it into a series of pages suitable for the experiment. The teachers generating the experiment would use a config tool that then generates the player's data file behind the scenes. This method was incredibly simple to use from a front-end perspective, but also incredibly versatile, allowing us to make as many components and features as we desired. \n\nBeing the project manager for this project was a new experience for me, as I had to get used to coordinating a larger team to get the work done properly, especially since I took a backseat role in handling the code myself, besides handling the merge requests for branches and testing the code properly. This type of work felt incredibly gratifying once the whole team worked well, and everything ran smoothly. For each of the tasks I had to outline what had to be done per person, and I made sure to have weekly sprint meetings to handle the task distribution. I also made sure to check in on any requests that my team members would have and handle any issues that may have arisen within the codebase. Along with being the project manager for the development team, I had to convey all the details to and from the research design team properly. This was already something I was used to at the time, thanks to my previous work at the lab."},
      ws("small"),
      {layoutType: "fullWidthImage", image: img("/assets/projects/stemai-3.png", "STEMAI experiment config tool for the Momentum course: an overview with objectives, a 3 hour duration and difficulty stars on the left, and Upload Media, Hypothesis options and Reflection prompts panels on the right with Preview and Save buttons")},
      ws("small"),
      {layoutType: "fullWidthImage", image: img("/assets/projects/stemai-4.png", "STEMAI experiment view: a video of a hand placing a white cue ball near a black eight ball on a blue pool table, next to a data table of time, mass, and distance values for each ball")},
    ],
  },
  {
    id: "smartsuite",
    title: "Smart Suite",
    subtitle: "A collection of cognitive skills training apps, training task switching, inhibitory control and update, subskills of executive functions.",
    thumbnail: img("/assets/projects/smartsuite-gwakk.png", "Gwakkamole splash screen showing four cartoon avocado characters in a guacamole bowl"),
    tags: ["App", "Game", "Unity", "C#", "Education", "Research"],
    link: "https://create.nyu.edu/projects/smartsuite/",
    year: 2025,
    pageLayout: [
      {layoutType: "headerDescriptionPair", header: "Contributions", description: "I contributed to this project as a developer that mainly fixed a lot of bugs, updated many features, and generally maintained the apps for the future. I also contributed by helping add features for various research projects that used these apps, which were conducted by NYU, CUNY, and even international colleges like NTU in Singapore."},
      ws(),
      {layoutType: "imageRow", items: [
        {image: img("/assets/projects/smartsuite-ayce.png", "All you can E.T. splash screen with cartoon aliens floating above tiered cakes and cupcake stands in space")},
        {image: img("/assets/projects/smartsuite-gwakk.png", "Gwakkamole splash screen showing four cartoon avocado characters in a guacamole bowl")},
        {image: img("/assets/projects/smartsuite-crush.png", "CrushStations splash screen with a cartoon octopus above an underwater scene with a sunken ship")},
      ]},
    ],
  },
  {
    id: "webtoonlens",
    title: "WebtoonLens",
    subtitle: "An Android overlay that lets you tap Korean text in webtoons for instant translations, pronunciation and spaced-repetition vocab review.",
    thumbnail: img("/assets/projects/webtoonlens-thumb.svg", "WebtoonLens placeholder thumbnail: a blue lens icon above the app name"),
    tags: ["App", "Android", "Kotlin", "OCR", "Language Learning", "AI"],
    link: "https://github.com/BlueTitanium/LanguageLearningApp",
    year: 2026,
    pageLayout: [
      {layoutType: "headerDescriptionPair", header: "Design & Development", description: "I built WebtoonLens because reading Korean webtoons is great practice, but the text lives inside images, so you can't copy it into a dictionary. The app runs as a floating bubble over other apps such as Naver Webtoon. One tap captures the screen and runs OCR on it. I made the recognised words tappable, rather than just pasting out a full-page translation, so I can ask about exactly the word I'm stuck on. Tapping a word gives a popup translation. Circling several words with a lasso translates the whole phrase in reading order.\n\nThe lookup pipeline went through the most iteration. Machine translation of a single word was imprecise, so I added an optional offline dictionary (kengdic, downloaded on demand), with on-device translation as the fallback. I also added optional online translation (Papago, DeepL or Google) using the user's own API key, so nothing is bundled. Korean conjugation was a real problem. Naive suffix-stripping can't recover irregular forms like 들어요 -> 듣다, so I switched to the KOMORAN morphological analyzer for dictionary root forms. Testing later showed it mishandled compound verbs: for something like 공부하다, KOMORAN tags only the \"하\" suffix as the predicate, so I was returning \"하다\" and dropping the noun. I fixed that by walking back over the noun that feeds the suffix. I also added a DeepL context-aware mode. While using it I found it skipped the dictionary entirely whenever DeepL succeeded, so the expanded detail view now shows the dictionary senses alongside the DeepL result.\n\nStill this app is very much a work-in-progress, and I plan to continue to refine it as my learning needs grow. However, I think, as of right now, even in its most basic state, it is a great learning tool!"},
      ws(),
      {layoutType: "imageRow", items: [
        {image: img("/assets/projects/webtoonlens-3.png", "WebtoonLens home screen in the dark theme with Home, Vocab and Settings tabs, a Grant overlay permission button and a Start WebtoonLens bubble button")},
        {image: img("/assets/projects/webtoonlens-2.png", "WebtoonLens overlay on the same webtoon panel with a single tapped word, 놀랐어, highlighted yellow and a popup translating it as \"I was surprised...\"; other words are highlighted blue and purple by learning status")},
        {image: img("/assets/projects/webtoonlens-1.png", "WebtoonLens overlay on a webtoon panel: tapping a speech bubble shows a popup with the Korean sentence and its DeepL English translation, with the recognised words highlighted in yellow")},        
      ]},
    ],
  },
  {
    id: "portfolio",
    title: "This Portfolio",
    subtitle: "A site intended to be a little playful, but also a showcase of my work and skills.\n\n Click the project link to visit the github repo!",
    thumbnail: img(
      "/assets/projects/portfolio-thumb2.png",
      "Dotted grid background of this portfolio site, with the footer showing social links"
    ),
    tags: ["Website", "React", "Motion", "Vite"],
    link: "https://github.com/BlueTitanium/BlueTitanium.github.io",
    year: 2026,
    pageLayout: [
     
    ],
  },
];
