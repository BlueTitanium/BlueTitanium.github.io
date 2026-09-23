export const FILTERS = [
  { value: "all", label: "a lot of cool things" },
  { value: "games", label: "games" },
  { value: "websites", label: "websites" },
  { value: "apps", label: "apps" },
  { value: "about", label: "~the most in life!~" },
];

export default function FilterBar({ value, onChange }) {
  return (
    <div className="filter-bar">
      <span>Hi, I'm Taneim. I make</span>
      <div className="filter-select-wrap">
        <select
          className="filter-select"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          aria-label="Filter projects"
        >
          {FILTERS.map((f) => (
            <option key={f.value} value={f.value}>
              {f.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
