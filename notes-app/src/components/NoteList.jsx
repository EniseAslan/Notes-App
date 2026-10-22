import NoteCard from './NoteCard'

function NoteList({notes}) {
   if (notes.length === 0) {
    return <p className="text-stone-500">Not bulunamadı.</p>;
  }

  return (
    <div className="space-y-3">
      {notes.map((note, index) => (
        <NoteCard key={note.id} note={note} index={index} />
      ))}
    </div>
  );
}

export default NoteList
