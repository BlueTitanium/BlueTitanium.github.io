// Edit this file to add, remove, or update projects.
// Every home page card and project detail page is rendered from this array.
//
// images[0] is the card thumbnail / detail page hero image.
// descriptions[0] is the short summary shown next to it on the detail page.
// images[1+] and descriptions[1+] pair up and render as alternating
// paragraph/image blocks further down the detail page.
// Each image needs an `alt` — it's shown to screen readers and used as the
// lightbox's accessible label when the image is clicked to zoom in.

function img(src, alt) {
  return { src, alt };
}

export const projects = [
  {
    id: "condemned",
    title: "Condemned",
    descriptions: [
      "A short description of the project goes here.",
      "Lorem ipsum dolor sit amet consectetur adipiscing elit. Animi eum qui in mollitia pariatur tempore dolorum do quas. Provident vero praesentium consequat nihil incididunt qui expedita. Velit voluptas mollitia assumenda provident sunt laborum blanditiis incididunt amet dolore.",
      "Lorem ipsum dolor sit amet consectetur adipiscing elit. Animi eum qui in mollitia pariatur tempore dolorum do quas. Provident vero praesentium consequat nihil incididunt qui expedita. Velit voluptas mollitia assumenda provident sunt laborum blanditiis incididunt amet dolore.",
    ],
    images: [
      img(
        "/assets/projects/condemned-thumb.png",
        "Pixel art character suspended by glowing chains, viewed from behind"
      ),
      img("/assets/projects/condemned-1.webp", "Condemned screenshot 1"),
      img("/assets/projects/condemned-2.webp", "Condemned screenshot 2"),
    ],
    tags: ["Game", "Unity", "C#", "Game Design"],
    link: "https://example.com",
    year: 2024,
  },
  {
    id: "portfolio-v3",
    title: "Portfolio V3",
    descriptions: [
      "This site — built with React, React Router, and Motion.",
      "Lorem ipsum dolor sit amet consectetur adipiscing elit. Animi eum qui in mollitia pariatur tempore dolorum do quas. Provident vero praesentium consequat nihil incididunt qui expedita. Velit voluptas mollitia assumenda provident sunt laborum blanditiis incididunt amet dolore.",
      "Lorem ipsum dolor sit amet consectetur adipiscing elit. Animi eum qui in mollitia pariatur tempore dolorum do quas. Provident vero praesentium consequat nihil incididunt qui expedita. Velit voluptas mollitia assumenda provident sunt laborum blanditiis incididunt amet dolore.",
    ],
    images: [
      img("/assets/projects/portfolio-thumb.webp", "Portfolio V3 thumbnail"),
      img("/assets/projects/portfolio-1.webp", "Portfolio V3 screenshot 1"),
      img("/assets/projects/portfolio-2.webp", "Portfolio V3 screenshot 2"),
    ],
    tags: ["Website", "React", "Motion", "Vite"],
    link: "https://github.com/BlueTitanium/BlueTitanium.github.io",
    year: 2026,
  },
  {
    id: "placeholder-one",
    title: "Placeholder One",
    descriptions: [
      "Sample project used to preview the scattered layout.",
      "Lorem ipsum dolor sit amet consectetur adipiscing elit. Animi eum qui in mollitia pariatur tempore dolorum do quas. Provident vero praesentium consequat nihil incididunt qui expedita. Velit voluptas mollitia assumenda provident sunt laborum blanditiis incididunt amet dolore.",
      "Lorem ipsum dolor sit amet consectetur adipiscing elit. Animi eum qui in mollitia pariatur tempore dolorum do quas. Provident vero praesentium consequat nihil incididunt qui expedita. Velit voluptas mollitia assumenda provident sunt laborum blanditiis incididunt amet dolore.",
    ],
    images: [
      img("/assets/projects/placeholder-1.webp", "Placeholder One thumbnail"),
      img("/assets/projects/placeholder-1-a.webp", "Placeholder One screenshot 1"),
      img("/assets/projects/placeholder-1-b.webp", "Placeholder One screenshot 2"),
    ],
    tags: ["Game", "Unreal"],
    link: "https://example.com",
    year: 2023,
  },
  {
    id: "placeholder-two",
    title: "Placeholder Two",
    descriptions: [
      "Sample project used to preview the scattered layout.",
      "Lorem ipsum dolor sit amet consectetur adipiscing elit. Animi eum qui in mollitia pariatur tempore dolorum do quas. Provident vero praesentium consequat nihil incididunt qui expedita. Velit voluptas mollitia assumenda provident sunt laborum blanditiis incididunt amet dolore.",
      "Lorem ipsum dolor sit amet consectetur adipiscing elit. Animi eum qui in mollitia pariatur tempore dolorum do quas. Provident vero praesentium consequat nihil incididunt qui expedita. Velit voluptas mollitia assumenda provident sunt laborum blanditiis incididunt amet dolore.",
    ],
    images: [
      img("/assets/projects/placeholder-2.webp", "Placeholder Two thumbnail"),
      img("/assets/projects/placeholder-2-a.webp", "Placeholder Two screenshot 1"),
      img("/assets/projects/placeholder-2-b.webp", "Placeholder Two screenshot 2"),
    ],
    tags: ["Website", "Next.js"],
    link: "https://example.com",
    year: 2022,
  },
  {
    id: "placeholder-three",
    title: "Placeholder Three",
    descriptions: [
      "Sample project used to preview the scattered layout.",
      "Lorem ipsum dolor sit amet consectetur adipiscing elit. Animi eum qui in mollitia pariatur tempore dolorum do quas. Provident vero praesentium consequat nihil incididunt qui expedita. Velit voluptas mollitia assumenda provident sunt laborum blanditiis incididunt amet dolore.",
      "Lorem ipsum dolor sit amet consectetur adipiscing elit. Animi eum qui in mollitia pariatur tempore dolorum do quas. Provident vero praesentium consequat nihil incididunt qui expedita. Velit voluptas mollitia assumenda provident sunt laborum blanditiis incididunt amet dolore.",
    ],
    images: [
      img("/assets/projects/placeholder-3.webp", "Placeholder Three thumbnail"),
      img("/assets/projects/placeholder-3-a.webp", "Placeholder Three screenshot 1"),
      img("/assets/projects/placeholder-3-b.webp", "Placeholder Three screenshot 2"),
    ],
    tags: ["App", "Swift"],
    link: "https://example.com",
    year: 2023,
  },
  {
    id: "placeholder-four",
    title: "Placeholder Four",
    descriptions: [
      "Sample project used to preview the scattered layout.",
      "Lorem ipsum dolor sit amet consectetur adipiscing elit. Animi eum qui in mollitia pariatur tempore dolorum do quas. Provident vero praesentium consequat nihil incididunt qui expedita. Velit voluptas mollitia assumenda provident sunt laborum blanditiis incididunt amet dolore.",
      "Lorem ipsum dolor sit amet consectetur adipiscing elit. Animi eum qui in mollitia pariatur tempore dolorum do quas. Provident vero praesentium consequat nihil incididunt qui expedita. Velit voluptas mollitia assumenda provident sunt laborum blanditiis incididunt amet dolore.",
    ],
    images: [
      img("/assets/projects/placeholder-4.webp", "Placeholder Four thumbnail"),
      img("/assets/projects/placeholder-4-a.webp", "Placeholder Four screenshot 1"),
      img("/assets/projects/placeholder-4-b.webp", "Placeholder Four screenshot 2"),
    ],
    tags: ["Game", "Godot"],
    link: "https://example.com",
    year: 2021,
  },
  {
    id: "placeholder-five",
    title: "Placeholder Five",
    descriptions: [
      "Sample project used to preview the scattered layout.",
      "Lorem ipsum dolor sit amet consectetur adipiscing elit. Animi eum qui in mollitia pariatur tempore dolorum do quas. Provident vero praesentium consequat nihil incididunt qui expedita. Velit voluptas mollitia assumenda provident sunt laborum blanditiis incididunt amet dolore.",
      "Lorem ipsum dolor sit amet consectetur adipiscing elit. Animi eum qui in mollitia pariatur tempore dolorum do quas. Provident vero praesentium consequat nihil incididunt qui expedita. Velit voluptas mollitia assumenda provident sunt laborum blanditiis incididunt amet dolore.",
    ],
    images: [
      img("/assets/projects/placeholder-5.webp", "Placeholder Five thumbnail"),
      img("/assets/projects/placeholder-5-a.webp", "Placeholder Five screenshot 1"),
      img("/assets/projects/placeholder-5-b.webp", "Placeholder Five screenshot 2"),
    ],
    tags: ["Website", "Astro"],
    link: "https://example.com",
    year: 2025,
  },
  {
    id: "placeholder-six",
    title: "Placeholder Six",
    descriptions: [
      "Sample project used to preview the scattered layout.",
      "Lorem ipsum dolor sit amet consectetur adipiscing elit. Animi eum qui in mollitia pariatur tempore dolorum do quas. Provident vero praesentium consequat nihil incididunt qui expedita. Velit voluptas mollitia assumenda provident sunt laborum blanditiis incididunt amet dolore.",
      "Lorem ipsum dolor sit amet consectetur adipiscing elit. Animi eum qui in mollitia pariatur tempore dolorum do quas. Provident vero praesentium consequat nihil incididunt qui expedita. Velit voluptas mollitia assumenda provident sunt laborum blanditiis incididunt amet dolore.",
    ],
    images: [
      img("/assets/projects/placeholder-6.webp", "Placeholder Six thumbnail"),
      img("/assets/projects/placeholder-6-a.webp", "Placeholder Six screenshot 1"),
      img("/assets/projects/placeholder-6-b.webp", "Placeholder Six screenshot 2"),
    ],
    tags: ["App", "Kotlin"],
    link: "https://example.com",
    year: 2020,
  },
  {
    id: "placeholder-seven",
    title: "Placeholder Seven",
    descriptions: [
      "Sample project used to preview the scattered layout.",
      "Lorem ipsum dolor sit amet consectetur adipiscing elit. Animi eum qui in mollitia pariatur tempore dolorum do quas. Provident vero praesentium consequat nihil incididunt qui expedita. Velit voluptas mollitia assumenda provident sunt laborum blanditiis incididunt amet dolore.",
      "Lorem ipsum dolor sit amet consectetur adipiscing elit. Animi eum qui in mollitia pariatur tempore dolorum do quas. Provident vero praesentium consequat nihil incididunt qui expedita. Velit voluptas mollitia assumenda provident sunt laborum blanditiis incididunt amet dolore.",
    ],
    images: [
      img("/assets/projects/placeholder-7.webp", "Placeholder Seven thumbnail"),
      img("/assets/projects/placeholder-7-a.webp", "Placeholder Seven screenshot 1"),
      img("/assets/projects/placeholder-7-b.webp", "Placeholder Seven screenshot 2"),
    ],
    tags: ["Game", "Unity"],
    link: "https://example.com",
    year: 2024,
  },
  {
    id: "placeholder-eight",
    title: "Placeholder Eight",
    descriptions: [
      "Sample project used to preview the scattered layout.",
      "Lorem ipsum dolor sit amet consectetur adipiscing elit. Animi eum qui in mollitia pariatur tempore dolorum do quas. Provident vero praesentium consequat nihil incididunt qui expedita. Velit voluptas mollitia assumenda provident sunt laborum blanditiis incididunt amet dolore.",
      "Lorem ipsum dolor sit amet consectetur adipiscing elit. Animi eum qui in mollitia pariatur tempore dolorum do quas. Provident vero praesentium consequat nihil incididunt qui expedita. Velit voluptas mollitia assumenda provident sunt laborum blanditiis incididunt amet dolore.",
    ],
    images: [
      img("/assets/projects/placeholder-8.webp", "Placeholder Eight thumbnail"),
      img("/assets/projects/placeholder-8-a.webp", "Placeholder Eight screenshot 1"),
      img("/assets/projects/placeholder-8-b.webp", "Placeholder Eight screenshot 2"),
    ],
    tags: ["Website", "React"],
    link: "https://example.com",
    year: 2022,
  },
];
