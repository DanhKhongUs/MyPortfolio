import { useEffect, useRef, useState, useCallback } from "react";

type FilterType = {
  selectedFilter: string;
  setSelectedFilter: (value: string) => void;
};

const filters = ["All", "Web Development", "Challenges", "Scripts"];

const Filter = ({ selectedFilter, setSelectedFilter }: FilterType) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [underlineStyle, setUnderlineStyle] = useState({ width: 0, left: 0 });

  const updateUnderline = useCallback(() => {
    if (!containerRef.current) return;
    const buttons = containerRef.current.querySelectorAll("button");
    const activeBtn = Array.from(buttons).find(
      (btn) => btn.dataset.filter === selectedFilter
    );

    if (activeBtn) {
      const rect = activeBtn.getBoundingClientRect();
      const containerRect = containerRef.current.getBoundingClientRect();
      setUnderlineStyle({
        width: rect.width,
        left: rect.left - containerRect.left,
      });
    }
  }, [selectedFilter]);

  useEffect(() => {
    updateUnderline();
  }, [selectedFilter, updateUnderline]);

  useEffect(() => {
    window.addEventListener("resize", updateUnderline);
    return () => window.removeEventListener("resize", updateUnderline);
  }, [updateUnderline]);

  return (
    <div
      ref={containerRef}
      className="relative flex gap-4 sm:gap-8 mt-10 mx-auto justify-center pb-2 border-b border-gray-300"
    >
      {filters.map((filter) => (
        <button
          key={filter}
          data-filter={filter}
          className={`relative z-10 px-2 py-2 text-sm sm:text-base transition-colors duration-200 cursor-pointer ${
            selectedFilter === filter
              ? "text-teal-700 font-bold"
              : "text-gray-500 hover:text-teal-600"
          }`}
          onClick={() => setSelectedFilter(filter)}
        >
          {filter}
        </button>
      ))}

      {/* underline */}
      <span
        className="absolute bottom-0 left-0 h-[3px] bg-teal-600 rounded transition-all duration-300 ease-in-out"
        style={{
          width: `${underlineStyle.width}px`,
          transform: `translateX(${underlineStyle.left}px)`,
        }}
      />
    </div>
  );
};

export default Filter;
