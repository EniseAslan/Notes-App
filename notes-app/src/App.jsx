import { useState } from "react";
import NoteList from "./components/NoteList";
import NoteForm from "./components/NoteForm";
import SearchBar from "./components/SearchBar";

function App() {
  const [notes, setNotes] = useState([
    { id: 1, title: "Alışveriş Listesi", content: "Süt, ekmek, makarna" },
    { id: 2, title: "Toplantı", content: "Salı günleri 11.00" },
    { id: 3, title: "Çalışma", content: "React'a 3 saat çalış" },
  ]);
  const [form, setForm] = useState({ title: "", content: "" });
  const [editingId, setEditingId] = useState(null);
  const [search, setSearch] = useState("");

  const visibleNotes = notes.filter((n) =>
  n.title.toLowerCase().includes(search.toLowerCase())
);

  const saveNote = () => {
    if (!form.title.trim()) return;

    if (editingId === null) {
      setNotes((prev) => [...prev, { id: Date.now(), ...form }]);
    } else {
      setNotes((prev) =>
        prev.map((n) => (n.id === editingId ? { ...n, ...form } : n)),
      );
      setEditingId(null);
    }
    setForm({ title: "", content: "" });
  };

  const deleteNote = (id) => {
    setNotes((prev) => prev.filter((n) => n.id !== id));
    if (editingId === id) {
      setEditingId(null);
      setForm({ title: "", content: "" });
    }
  };

  const startEdit = (note) => {
    setEditingId(note.id);
    setForm({ title: note.title, content: note.content });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-stone-50 to-orange-50 p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-stone-800 mb-6">🍂 Notes App</h1>
        <NoteForm form={form} onChange={setForm} onSave={saveNote} isEditing={editingId !== null} />
        <SearchBar search={search} onSearchChange={setSearch}/>
        <NoteList notes={visibleNotes} onDelete={deleteNote} onEdit={startEdit}/>
      </div>
    </div>
  );
}

export default App;
