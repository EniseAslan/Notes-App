import { useState } from "react";

export default function NoteForm({ form, onChange, onSave,isEditing }) {
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    onChange({ ...form, [name]: value });
    if (error) setError(""); 
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.title.trim()) {
      setError("Lütfen bir başlık girin.");
      return;
    }
    onSave();
    setError("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white/70 backdrop-blur p-4 rounded-xl border border-stone-200 shadow-sm mb-6 space-y-3"
    >
      <input
        name="title"
        value={form.title}
        onChange={handleChange}
        placeholder="Başlık"
        className={`w-full border rounded-lg px-3 py-2 bg-white focus:outline-none focus:ring-2 ${
          error
            ? "border-red-400 focus:ring-red-300"
            : "border-stone-300 focus:ring-amber-300"
        }`}
      />
      <textarea
        name="content"
        value={form.content}
        onChange={handleChange}
        placeholder="İçerik"
        rows={3}
        className="w-full border border-stone-300 rounded-lg px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-amber-300"
      />
      {error && (
         <p className="text-sm text-amber-700 bg-amber-50 border border-amber-200 rounded-lg px-3 py-2 flex items-center gap-2">
     {error}
  </p>
      )}
       <button
        type="submit"
        className={`text-white px-4 py-2 rounded-lg transition ${
          isEditing
            ? "bg-teal-600 hover:bg-teal-700"
            : "bg-amber-600 hover:bg-amber-700"
        }`}
      >
        {isEditing ? "Güncelle" : "Kaydet"}
      </button>
    </form>
  );
}