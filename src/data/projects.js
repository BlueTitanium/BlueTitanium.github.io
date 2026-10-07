// Edit this file to add, remove, or update projects.
// Every home page card and project detail page is rendered from this array.
//
// `thumbnail` is the card image / detail page hero image.
// `subtitle` is the short summary shown next to it on the detail page.
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
    tags: ["Game", "Unity", "C#", "Game Design"],
    link: "https://bluetitanium.itch.io/condemned",
    year: 2024,
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
    tags: ["Simulation", "Virtual Reality", "Unity", "C#", "AI", "Research"],
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
    year: 2020,
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
    id: "placeholder-three",
    title: "Placeholder Three",
    subtitle: "Sample project used to preview the scattered layout.",
    thumbnail: img("/assets/projects/condemned-thumb.png", "Placeholder Three thumbnail"),
    tags: ["App", "Swift"],
    link: "https://example.com",
    year: 2023,
    pageLayout: [
      {
        layoutType: "imageDescriptionPair",
        image: img("/assets/projects/placeholder-3-a.webp", "Placeholder Three screenshot 1"),
        description:
          "Lorem ipsum dolor sit amet consectetur adipiscing elit. Animi eum qui in mollitia pariatur tempore dolorum do quas. Provident vero praesentium consequat nihil incididunt qui expedita. Velit voluptas mollitia assumenda provident sunt laborum blanditiis incididunt amet dolore.",
      },
      ws(),
      {
        layoutType: "imageDescriptionPair",
        image: img("/assets/projects/placeholder-3-b.webp", "Placeholder Three screenshot 2"),
        description:
          "Lorem ipsum dolor sit amet consectetur adipiscing elit. Animi eum qui in mollitia pariatur tempore dolorum do quas. Provident vero praesentium consequat nihil incididunt qui expedita. Velit voluptas mollitia assumenda provident sunt laborum blanditiis incididunt amet dolore.",
      },
    ],
  },
  {
    id: "placeholder-four",
    title: "Placeholder Four",
    subtitle: "Sample project used to preview the scattered layout.",
    thumbnail: img("/assets/projects/placeholder-4.webp", "Placeholder Four thumbnail"),
    tags: ["Game", "Godot"],
    link: "https://example.com",
    year: 2021,
    pageLayout: [
      {
        layoutType: "imageDescriptionPair",
        image: img("/assets/projects/placeholder-4-a.webp", "Placeholder Four screenshot 1"),
        description:
          "Lorem ipsum dolor sit amet consectetur adipiscing elit. Animi eum qui in mollitia pariatur tempore dolorum do quas. Provident vero praesentium consequat nihil incididunt qui expedita. Velit voluptas mollitia assumenda provident sunt laborum blanditiis incididunt amet dolore.",
      },
      ws(),
      {
        layoutType: "imageDescriptionPair",
        image: img("/assets/projects/placeholder-4-b.webp", "Placeholder Four screenshot 2"),
        description:
          "Lorem ipsum dolor sit amet consectetur adipiscing elit. Animi eum qui in mollitia pariatur tempore dolorum do quas. Provident vero praesentium consequat nihil incididunt qui expedita. Velit voluptas mollitia assumenda provident sunt laborum blanditiis incididunt amet dolore.",
      },
    ],
  },
  {
    id: "placeholder-five",
    title: "Placeholder Five",
    subtitle: "Sample project used to preview the scattered layout.",
    thumbnail: img("/assets/projects/placeholder-5.webp", "Placeholder Five thumbnail"),
    tags: ["Website", "Astro"],
    link: "https://example.com",
    year: 2025,
    pageLayout: [
      {
        layoutType: "imageDescriptionPair",
        image: img("/assets/projects/placeholder-5-a.webp", "Placeholder Five screenshot 1"),
        description:
          "Lorem ipsum dolor sit amet consectetur adipiscing elit. Animi eum qui in mollitia pariatur tempore dolorum do quas. Provident vero praesentium consequat nihil incididunt qui expedita. Velit voluptas mollitia assumenda provident sunt laborum blanditiis incididunt amet dolore.",
      },
      ws(),
      {
        layoutType: "imageDescriptionPair",
        image: img("/assets/projects/placeholder-5-b.webp", "Placeholder Five screenshot 2"),
        description:
          "Lorem ipsum dolor sit amet consectetur adipiscing elit. Animi eum qui in mollitia pariatur tempore dolorum do quas. Provident vero praesentium consequat nihil incididunt qui expedita. Velit voluptas mollitia assumenda provident sunt laborum blanditiis incididunt amet dolore.",
      },
    ],
  },
  {
    id: "placeholder-six",
    title: "Placeholder Six",
    subtitle: "Sample project used to preview the scattered layout.",
    thumbnail: img("/assets/projects/placeholder-6.webp", "Placeholder Six thumbnail"),
    tags: ["App", "Kotlin"],
    link: "https://example.com",
    year: 2020,
    pageLayout: [
      {
        layoutType: "imageDescriptionPair",
        image: img("/assets/projects/placeholder-6-a.webp", "Placeholder Six screenshot 1"),
        description:
          "Lorem ipsum dolor sit amet consectetur adipiscing elit. Animi eum qui in mollitia pariatur tempore dolorum do quas. Provident vero praesentium consequat nihil incididunt qui expedita. Velit voluptas mollitia assumenda provident sunt laborum blanditiis incididunt amet dolore.",
      },
      ws(),
      {
        layoutType: "imageDescriptionPair",
        image: img("/assets/projects/placeholder-6-b.webp", "Placeholder Six screenshot 2"),
        description:
          "Lorem ipsum dolor sit amet consectetur adipiscing elit. Animi eum qui in mollitia pariatur tempore dolorum do quas. Provident vero praesentium consequat nihil incididunt qui expedita. Velit voluptas mollitia assumenda provident sunt laborum blanditiis incididunt amet dolore.",
      },
    ],
  },
  {
    id: "placeholder-seven",
    title: "Placeholder Seven",
    subtitle: "Sample project used to preview the scattered layout.",
    thumbnail: img("/assets/projects/placeholder-7.webp", "Placeholder Seven thumbnail"),
    tags: ["Game", "Unity"],
    link: "https://example.com",
    year: 2024,
    pageLayout: [
      {
        layoutType: "imageDescriptionPair",
        image: img("/assets/projects/placeholder-7-a.webp", "Placeholder Seven screenshot 1"),
        description:
          "Lorem ipsum dolor sit amet consectetur adipiscing elit. Animi eum qui in mollitia pariatur tempore dolorum do quas. Provident vero praesentium consequat nihil incididunt qui expedita. Velit voluptas mollitia assumenda provident sunt laborum blanditiis incididunt amet dolore.",
      },
      ws(),
      {
        layoutType: "imageDescriptionPair",
        image: img("/assets/projects/placeholder-7-b.webp", "Placeholder Seven screenshot 2"),
        description:
          "Lorem ipsum dolor sit amet consectetur adipiscing elit. Animi eum qui in mollitia pariatur tempore dolorum do quas. Provident vero praesentium consequat nihil incididunt qui expedita. Velit voluptas mollitia assumenda provident sunt laborum blanditiis incididunt amet dolore.",
      },
    ],
  },
  {
    id: "placeholder-eight",
    title: "Placeholder Eight",
    subtitle: "Sample project used to preview the scattered layout.",
    thumbnail: img("/assets/projects/placeholder-8.webp", "Placeholder Eight thumbnail"),
    tags: ["Website", "React"],
    link: "https://example.com",
    year: 2022,
    pageLayout: [
      {
        layoutType: "imageDescriptionPair",
        image: img("/assets/projects/placeholder-8-a.webp", "Placeholder Eight screenshot 1"),
        description:
          "Lorem ipsum dolor sit amet consectetur adipiscing elit. Animi eum qui in mollitia pariatur tempore dolorum do quas. Provident vero praesentium consequat nihil incididunt qui expedita. Velit voluptas mollitia assumenda provident sunt laborum blanditiis incididunt amet dolore.",
      },
      ws(),
      {
        layoutType: "imageDescriptionPair",
        image: img("/assets/projects/placeholder-8-b.webp", "Placeholder Eight screenshot 2"),
        description:
          "Lorem ipsum dolor sit amet consectetur adipiscing elit. Animi eum qui in mollitia pariatur tempore dolorum do quas. Provident vero praesentium consequat nihil incididunt qui expedita. Velit voluptas mollitia assumenda provident sunt laborum blanditiis incididunt amet dolore.",
      },
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
