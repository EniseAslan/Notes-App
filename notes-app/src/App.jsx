import { useState, useEffect } from "react";
import NoteList from "./components/NoteList";
import NoteForm from "./components/NoteForm";
import SearchBar from "./components/SearchBar";
import SortToggle from "./components/SortToggle";

const defaultNotes = [
  { id: 1, title: "Alışveriş Listesi", content: "Süt, ekmek, makarna", pinned: false, color: "amber" },
  { id: 2, title: "Toplantı", content: "Salı günleri 11.00", pinned: false, color: "stone" },
  { id: 3, title: "Çalışma", content: "React'a 3 saat çalış", pinned: false, color: "orange" },
];

function App() {
  const [notes, setNotes] = useState(() => {
    try {
      const saved = localStorage.getItem("notes");
      if (!saved) return defaultNotes;
      const parsed = JSON.parse(saved);
      return parsed.map((n) => ({ pinned: false, color: "amber", ...n }));
    } catch {
      return defaultNotes;
    }
  });

  const [form, setForm] = useState({ title: "", content: "", color: "amber" });
  const [editingId, setEditingId] = useState(null);
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("newest");

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const visibleNotes = notes
    .filter((n) => n.title.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => {
      const aPin = Boolean(a.pinned);
      const bPin = Boolean(b.pinned);
      if (aPin !== bPin) return bPin - aPin; // pinli önce
      return sortBy === "newest" ? b.id - a.id : a.id - b.id;
    });

  const saveNote = () => {
    if (!form.title.trim()) return;
    if (editingId === null) {
      setNotes((prev) => [...prev, { id: Date.now(), pinned: false, ...form }]);
    } else {
      setNotes((prev) =>
        prev.map((n) => (n.id === editingId ? { ...n, ...form } : n))
      );
      setEditingId(null);
    }
    setForm({ title: "", content: "", color: "amber" });
  };

  const deleteNote = (id) => {
    setNotes((prev) => prev.filter((n) => n.id !== id));
    if (editingId === id) {
      setEditingId(null);
      setForm({ title: "", content: "", color: "amber" });
    }
  };

  const startEdit = (note) => {
    setEditingId(note.id);
    setForm({ title: note.title, content: note.content, color: note.color });
  };

  const togglePin = (id) => {
    setNotes((prev) =>
      prev.map((n) => (n.id === id ? { ...n, pinned: !n.pinned } : n))
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-stone-50 to-orange-50 p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-stone-800 mb-6">🍂 Notes App</h1>
        <NoteForm
          form={form}
          onChange={setForm}
          onSave={saveNote}
          isEditing={editingId !== null}
        />
        <SearchBar search={search} onSearchChange={setSearch} />
        <SortToggle sortBy={sortBy} onSortChange={setSortBy} />
        <NoteList
          notes={visibleNotes}
          onDelete={deleteNote}
          onEdit={startEdit}
          onTogglePin={togglePin}
        />
      </div>
    </div>
  );
}

export default App;