import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export const FILTERS = [
  { value: "all", label: "a lot of cool things" },
  { value: "games", label: "games" },
  { value: "websites", label: "websites" },
  { value: "apps", label: "apps" },
  { value: "about", label: "~the most in life!~" },
];

const listVariants = {
  visible: {
    clipPath: "inset(0% 0% 0% 0%)",
    transition: {
      duration: 0.3,
      ease: "easeOut",
      staggerChildren: 0.05,
      delayChildren: 0.05,
    },
  },
  hidden: {
    clipPath: "inset(0% 0% 100% 0%)",
    transition: {
      duration: 0.25,
      ease: "easeIn",
      staggerChildren: 0.03,
      staggerDirection: -1,
    },
  },
};

const itemVariants = {
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: -8 },
};

const SPRING = { type: "spring", stiffness: 350, damping: 15 };

export default function FilterBar({ value, onChange }) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const selected = FILTERS.find((f) => f.value === value) ?? FILTERS[0];

  function handleSelect(filterValue) {
    onChange(filterValue);
    setOpen(false);
  }

  return (
    <motion.div
      className="filter-bar"
      whileHover={{ scale: 1.03 }}
      transition={SPRING}
    >
      <span>Hi, I'm Taneim. I make</span>
      <div className="filter-dropdown" ref={containerRef}>
        <motion.button
          type="button"
          className="filter-select"
          whileHover={{ scale: 1.05 }}
          transition={SPRING}
          onClick={() => setOpen((o) => !o)}
          aria-haspopup="listbox"
          aria-expanded={open}
        >
          {selected.label}
          <span className={`filter-chevron${open ? " filter-chevron-open" : ""}`} />
        </motion.button>
        <AnimatePresence>
          {open && (
            <motion.ul
              className="filter-options"
              role="listbox"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={listVariants}
            >
              {FILTERS.map((f) => (
                <motion.li
                  key={f.value}
                  role="option"
                  aria-selected={f.value === value}
                  variants={itemVariants}
                  transition={{ duration: 0.18, ease: "easeOut" }}
                >
                  <motion.button
                    type="button"
                    whileHover={{ scale: 1.05 }}
                    transition={SPRING}
                    onClick={() => handleSelect(f.value)}
                  >
                    {f.label}
                  </motion.button>
                </motion.li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
