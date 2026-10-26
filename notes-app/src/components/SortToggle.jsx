export default function SortToggle({ sortBy, onSortChange }) {
  return (
    <div className="flex gap-2 mb-4">
      <button
        type="button"
        onClick={() => onSortChange("newest")}
        className={`text-sm px-3 py-1 rounded-lg transition ${
          sortBy === "newest"
            ? "bg-amber-600 text-white"
            : "bg-stone-300 text-stone-700 hover:bg-stone-400"
        }`}
      >
        Yeniden Eskiye
      </button>
      <button
        type="button"
        onClick={() => onSortChange("oldest")}
        className={`text-sm px-3 py-1 rounded-lg transition ${
          sortBy === "oldest"
            ? "bg-amber-600 text-white"
            : "bg-stone-300 text-stone-700 hover:bg-stone-400"
        }`}
      >
        Eskiden Yeniye
      </button>
    </div>
  );
}