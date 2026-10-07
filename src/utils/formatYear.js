// Multi-year projects currently display only their end year. To show a range
// instead (e.g. "2021–2024"), return `${year}–${endYear}` when endYear differs.
export function formatYear(year, endYear) {
  const shown = endYear ?? year;
  return shown ? `${shown}` : "";
}
