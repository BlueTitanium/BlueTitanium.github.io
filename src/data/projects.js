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
        header: "The Goal",
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
    id: "portfolio-v3",
    title: "Portfolio V3",
    subtitle: "This site — built with React, React Router, and Motion.",
    thumbnail: img("/assets/projects/portfolio-thumb.webp", "Portfolio V3 thumbnail"),
    tags: ["Website", "React", "Motion", "Vite"],
    link: "https://github.com/BlueTitanium/BlueTitanium.github.io",
    year: 2026,
    pageLayout: [
      {
        layoutType: "imageDescriptionPair",
        image: img("/assets/projects/portfolio-1.webp", "Portfolio V3 screenshot 1"),
        description:
          "Lorem ipsum dolor sit amet consectetur adipiscing elit. Animi eum qui in mollitia pariatur tempore dolorum do quas. Provident vero praesentium consequat nihil incididunt qui expedita. Velit voluptas mollitia assumenda provident sunt laborum blanditiis incididunt amet dolore.",
      },
      ws(),
      {
        layoutType: "imageDescriptionPair",
        image: img("/assets/projects/portfolio-2.webp", "Portfolio V3 screenshot 2"),
        description:
          "Lorem ipsum dolor sit amet consectetur adipiscing elit. Animi eum qui in mollitia pariatur tempore dolorum do quas. Provident vero praesentium consequat nihil incididunt qui expedita. Velit voluptas mollitia assumenda provident sunt laborum blanditiis incididunt amet dolore.",
      },
    ],
  },
  {
    id: "placeholder-one",
    title: "Placeholder One",
    subtitle: "Sample project used to preview the scattered layout.",
    thumbnail: img("/assets/projects/placeholder-1.webp", "Placeholder One thumbnail"),
    tags: ["Game", "Unreal"],
    link: "https://example.com",
    year: 2023,
    pageLayout: [],
  },
  {
    id: "placeholder-two",
    title: "Placeholder Two",
    subtitle: "Sample project used to preview the scattered layout.",
    thumbnail: img("/assets/projects/condemned-thumb.png", "Placeholder Two thumbnail"),
    tags: ["Website", "Next.js"],
    link: "https://example.com",
    year: 2022,
    pageLayout: [
      {
        layoutType: "imageDescriptionPair",
        image: img("/assets/projects/placeholder-2-a.webp", "Placeholder Two screenshot 1"),
        description:
          "Lorem ipsum dolor sit amet consectetur adipiscing elit. Animi eum qui in mollitia pariatur tempore dolorum do quas. Provident vero praesentium consequat nihil incididunt qui expedita. Velit voluptas mollitia assumenda provident sunt laborum blanditiis incididunt amet dolore.",
      },
      ws(),
      {
        layoutType: "imageDescriptionPair",
        image: img("/assets/projects/placeholder-2-b.webp", "Placeholder Two screenshot 2"),
        description:
          "Lorem ipsum dolor sit amet consectetur adipiscing elit. Animi eum qui in mollitia pariatur tempore dolorum do quas. Provident vero praesentium consequat nihil incididunt qui expedita. Velit voluptas mollitia assumenda provident sunt laborum blanditiis incididunt amet dolore.",
      },
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
];
