import { useState } from "react";
import NoteList from "./components/NoteList";

function App() {
  
  const [notes] = useState([
    { id: 1, title: "Alışveriş", content: "Süt, ekmek, makarna" },
    { id: 2, title: "Toplantı", content: "Salı günleri 11.00" },
    { id: 3, title: "Çalışma", content: "React'a 3 saat çalış" },
  ]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-stone-50 to-orange-50 p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-stone-800 mb-6">🍂 Notes App</h1>
        <NoteList notes={notes} />
      </div>
    </div>
  
  );
}

export default App;
