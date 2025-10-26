
import React, { useEffect, useRef, useState } from "react";
import { unique } from "./utils";
import { ComboboxMultiProps } from "./types";

/**
 * Advanced Animated Combobox with Glassmorphism UI
 */
export function ComboboxMulti({
  id,
  label,
  options,
  placeholder = "Search...",
  allowCreate = false
}: ComboboxMultiProps) {
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState<string[]>([]);
  const [open, setOpen] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);
  const filtered = options.filter((opt) =>
    opt.toLowerCase().includes(query.toLowerCase())
  );

  const handleSelect = (opt: string) => {
    if (!selected.includes(opt)) setSelected(unique([...selected, opt]));
    setQuery("");
  };

  const handleRemove = (opt: string) => {
    setSelected(selected.filter((o) => o !== opt));
  };

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (!(e.target as HTMLElement).closest(`#${id}`)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [id]);

  return (
    <div id={id} className="relative text-left w-full">
      <label className="block text-sm font-semibold mb-2">{label}</label>

      <div
        className="flex flex-wrap items-center gap-2 border border-indigo-200 dark:border-indigo-800
                   bg-white/40 dark:bg-slate-800/40 rounded-xl px-3 py-2 shadow-inner
                   backdrop-blur-md focus-within:ring-2 focus-within:ring-indigo-400 transition-all"
        onClick={() => inputRef.current?.focus()}
      >
        {selected.map((opt) => (
          <span
            key={opt}
            className="group flex items-center gap-1 bg-indigo-500/20 dark:bg-indigo-700/40
                       text-indigo-700 dark:text-indigo-200 px-2 py-1 rounded-lg text-sm
                       hover:bg-indigo-600/30 transition-all"
          >
            {opt}
            <button
              onClick={() => handleRemove(opt)}
              className="hover:text-red-500 ml-1"
              aria-label={`Remove ${opt}`}
            >
              ✕
            </button>
          </span>
        ))}
        <input
          ref={inputRef}
          type="text"
          placeholder={placeholder}
          className="flex-1 bg-transparent outline-none text-gray-800 dark:text-gray-100
                     placeholder:text-gray-400 dark:placeholder:text-gray-500"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setOpen(true);
          }}
          onFocus={() => setOpen(true)}
        />
      </div>

      {open && (
        <ul
          className="absolute mt-2 z-50 w-full rounded-xl border border-indigo-200 dark:border-indigo-700
                     bg-white/80 dark:bg-gray-800/80 backdrop-blur-md shadow-2xl overflow-auto
                     max-h-56 animate-fadeIn"
        >
          {filtered.length === 0 && !allowCreate && (
            <li className="px-4 py-2 text-gray-500 dark:text-gray-400 text-sm">
              No matches found
            </li>
          )}
          {filtered.map((opt) => (
            <li
              key={opt}
              className="px-4 py-2 hover:bg-indigo-100 dark:hover:bg-indigo-900 cursor-pointer transition-all"
              onClick={() => handleSelect(opt)}
            >
              {opt}
            </li>
          ))}
          {allowCreate &&
            query &&
            !options.includes(query) &&
            !selected.includes(query) && (
              <li
                className="px-4 py-2 text-indigo-600 dark:text-indigo-300 hover:bg-indigo-100 dark:hover:bg-indigo-900 cursor-pointer italic"
                onClick={() => handleSelect(query)}
              >
                ➕ Create "{query}"
              </li>
            )}
        </ul>
      )}
    </div>
  );
}
