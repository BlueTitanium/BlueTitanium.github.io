// Remembers the home page's scroll position across unmount/remount cycles
// caused by the AnimatePresence page transitions in App.jsx.
let homeScrollY = 0;

export function saveHomeScroll(y) {
  homeScrollY = y;
}

export function getHomeScroll() {
  return homeScrollY;
}
