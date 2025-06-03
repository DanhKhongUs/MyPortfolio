import { useEffect, useRef, useState, useCallback } from "react";
import useDebounce from "~/hooks/useDebounce";

interface FilterType {
  selectedFilter: string;
  setSelectedFilter: (value: string) => void;
}

const lists = ["All", "Web Development", "Challenges", "Scripts"];

const Filter = ({ selectedFilter, setSelectedFilter }: FilterType) => {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [lineStyle, setLineStyle] = useState({ width: 0, left: 0 });

  const updateLine = useCallback(() => {
    if (!wrapRef.current) return;
    const buttons = wrapRef.current.querySelectorAll("button");
    const activeBtn = Array.from(buttons).find(
      (btn) => btn.dataset.filter === selectedFilter
    );

    if (activeBtn) {
      const rect = activeBtn.getBoundingClientRect();
      const wrapRect = wrapRef.current.getBoundingClientRect();
      setLineStyle({
        width: rect.width,
        left: rect.left - wrapRect.left,
      });
    }
  }, [selectedFilter]);

  useEffect(() => {
    updateLine();
  }, [selectedFilter, updateLine]);

  const { debounced } = useDebounce(updateLine, 1000);
  useEffect(() => {
    const handleResize = () => debounced();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [debounced]);

  return (
    <div
      ref={wrapRef}
      className="relative flex gap-4 sm:gap-8 mt-10 mx-auto justify-center pb-2 border-b border-gray-300"
    >
      {lists.map((list) => (
        <button
          key={list}
          className={`relative z-10 px-2 py-2 text-sm sm:text-base transition-colors duration-200 cursor-pointer ${
            selectedFilter === list
              ? "text-teal-700 font-bold"
              : "text-gray-500 hover:text-teal-600"
          }`}
          onClick={() => setSelectedFilter(list)}
        >
          {list}
        </button>
      ))}

      {/* underline */}
      <span
        className="absolute bottom-0 left-0 h-[3px] bg-teal-600 rounded transition-all duration-300 ease-in-out"
        style={{
          width: `${lineStyle.width}px`,
          transform: `translateX(${lineStyle.left}px)`,
        }}
      />
    </div>
  );
};

export default Filter;
