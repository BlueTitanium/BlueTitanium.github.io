// Caches each filter's generated card layout so navigating back to Home
// (which remounts ProjectsGrid) doesn't reshuffle the cards. Only an
// explicit filter press clears the relevant entry (see App.jsx), which
// forces a fresh randomization for that filter.
const layoutCache = new Map();

export function getLayoutCache(filterKey) {
  return layoutCache.get(filterKey);
}

export function setLayoutCache(filterKey, cards) {
  layoutCache.set(filterKey, cards);
}

export function clearLayoutCache(filterKey) {
  layoutCache.delete(filterKey);
}
