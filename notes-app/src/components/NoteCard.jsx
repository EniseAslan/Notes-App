import { colorOptions } from "../constants";

const noteEmojis = ["🍂", "☕", "📌", "🌰"];

export default function NoteCard({ note, index, onEdit, onDelete, onTogglePin }) {
  const emoji = noteEmojis[index % noteEmojis.length];

  return (
    <div className={`p-4 rounded-xl border shadow-sm ${colorOptions[note.color]}`}>
      <h2 className="font-semibold text-stone-800 flex items-center gap-2">
        <span className="text-xl">{emoji}</span>
        {note.title}
        {note.pinned && <span className="text-sm">📌</span>}
      </h2>
      <p className="text-stone-600 text-sm">{note.content}</p>

      <div className="flex justify-end gap-2 mt-3">
        <button
          onClick={() => onTogglePin(note.id)}
          className={`text-sm px-3 py-1 rounded-lg transition ${
            note.pinned
              ? "bg-amber-500 text-white hover:bg-amber-600"
              : "bg-stone-300 text-stone-700 hover:bg-stone-400"
          }`}
        >
          {note.pinned ? "Sabitle" : "Sabiti Kaldır"}
        </button>
        <button
          onClick={() => onEdit(note)}
          className="text-sm px-3 py-1 rounded-lg bg-orange-600 text-white hover:bg-blue-600 transition"
        >
          Düzenle
        </button>
        <button
          onClick={() => onDelete(note.id)}
          className="text-sm px-3 py-1 rounded-lg bg-stone-600 text-white hover:bg-red-600 transition"
        >
          Sil
        </button>
      </div>
    </div>
  );
}