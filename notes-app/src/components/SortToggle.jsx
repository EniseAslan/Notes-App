export default function SortToggle({ sortBy, onSortChange }) {
  return (
    <div className="flex gap-2 mb-4">
      <button
        type="button"
        onClick={() => onSortChange("newest")}
        className={`text-sm px-3 py-1 rounded-lg transition ${
          sortBy === "newest"
            ? "bg-amber-600 text-white"
            : "bg-stone-200 text-stone-700 hover:bg-stone-300"
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
            : "bg-stone-200 text-stone-700 hover:bg-stone-300"
        }`}
      >
        Eskiden Yeniye
      </button>
    </div>
  );
}