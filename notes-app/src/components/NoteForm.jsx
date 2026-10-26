import { useState } from "react";
import { themes } from "../constants";

export default function NoteForm({ form, onChange, onSave, isEditing }) {
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

      {/* Tema seçici — renk + emoji birlikte */}
      <div className="flex items-center gap-3">
        <label className="text-sm text-stone-600 shrink-0">Tema</label>
        <div className="flex gap-2 flex-wrap">
          {Object.entries(themes).map(([key, theme]) => (
            <button
              key={key}
              type="button"
              onClick={() => onChange({ ...form, theme: key })}
              className={`flex items-center gap-1 px-3 py-1.5 rounded-lg border-2 text-sm transition ${theme.card} ${
                form.theme === key
                  ? "ring-2 ring-offset-2 ring-stone-500"
                  : "opacity-70 hover:opacity-100"
              }`}
            >
              <span className="text-base">{theme.emoji}</span>
              <span className="text-stone-700">{theme.label}</span>
            </button>
          ))}
        </div>
      </div>

      {error && (
        <p className="text-sm text-red-600 flex items-center gap-1">
          ⚠️ {error}
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