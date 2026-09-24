// True randomization — regenerated on every mount and every filter change
// (see ProjectsGrid, which recomputes this inside a useMemo keyed on the
// filtered list). Only the first card's size is fixed (always Large); every
// other card is randomly assigned one of three discrete sizes.
// Every card is forced to a 4:3 ratio.
//
// Size scales with viewport width (vw) so each tier actually feels bigger
// on bigger screens instead of just being shifted. All three tiers scale
// together so the spread between them stays proportional as the screen
// grows, instead of the largest hitting a low fixed ceiling while the
// others keep climbing toward it (which collapses the variation on large
// screens). MAX_SIZE_PX is set high enough to stay out of the way at normal
// desktop widths and only acts as a safety net on very wide monitors.
const MIN_SIZE_PX = 280;
const MAX_SIZE_PX = 900;

const SIZES = {
  small: 10,
  medium: 25,
  large: 40,
};
const SIZE_KEYS = Object.keys(SIZES);

// The horizontal offset is a *fraction of the space left over* after the
// card's own width (ProjectsGrid turns this into
// `calc((100% - width) * offsetFraction)`), not a flat independent
// percentage — a flat percentage can't account for how wide the card ended
// up being, so a wide card plus a large offset could push past the
// container's edge. Expressing it as a fraction of the remaining space
// makes overflow impossible regardless of width.
const MAX_OFFSET_FRACTION = 0.68;

function sizeFromVw(vw) {
  return `clamp(${MIN_SIZE_PX}px, ${vw}vw, ${MAX_SIZE_PX}px)`;
}

export function getCardLayout(index) {
  const isFirst = index === 0;

  const sizeKey = isFirst
    ? "large"
    : SIZE_KEYS[Math.floor(Math.random() * SIZE_KEYS.length)];
  const width = sizeFromVw(SIZES[sizeKey]);
  const offsetFraction = Math.random() * MAX_OFFSET_FRACTION;

  return { width, aspectRatio: "4 / 3", offsetFraction };
}
