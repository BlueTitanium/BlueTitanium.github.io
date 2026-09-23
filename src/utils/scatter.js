// True randomization — regenerated on every mount and every filter change
// (see ProjectsGrid, which recomputes this inside a useMemo keyed on the
// filtered list). Only the first card's size is fixed; everything else,
// including the first card's horizontal position, is random.
// Every card is capped at MAX_SIZE and forced to a square (1:1) ratio.
const MIN_SIZE = 280;
const MAX_SIZE = 560;
const FIRST_SIZE = MAX_SIZE;

function randomBetween(min, max) {
  return min + Math.random() * (max - min);
}

export function getCardLayout(index) {
  const isFirst = index === 0;

  const size = isFirst
    ? FIRST_SIZE
    : Math.round(randomBetween(MIN_SIZE, MAX_SIZE));

  // Horizontal offset as a % of the available track width, kept away from
  // the very edges so cards don't clip the container.
  const offsetPercent = randomBetween(2, 52);

  return { width: size, aspectRatio: "1 / 1", offsetPercent };
}
