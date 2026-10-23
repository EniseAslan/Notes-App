function NoteCard({ note, index,onDelete, onEdit }) {
  const cardColors = [
    "bg-amber-100 border-amber-300",
    "bg-stone-200 border-stone-400",
    "bg-orange-100 border-orange-300",
    "bg-yellow-100 border-yellow-300",
  ];
  const noteEmojis = ["🍂", "☕", "📌", "🌰"];
  const colorClass = cardColors[index % cardColors.length];
  const emoji = noteEmojis[index % noteEmojis.length];

  return (
    <div className={`p-4 rounded-xl border shadow-sm ${colorClass}`}>
      <h2 className="font-semibold text-stone-800 flex items-center gap-2">
        <span className="text-xl">{emoji}</span>
        {note.title}
      </h2>
      <p className="text-stone-600 text-sm">{note.content}</p>
      <div className="flex justify-end gap-2 mt-3">
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

export default NoteCard;
