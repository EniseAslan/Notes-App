import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'




function App() {
  const cardColors = [
  "bg-amber-100 border-amber-300",
  "bg-stone-200 border-stone-400",
  "bg-orange-100 border-orange-300",
  "bg-yellow-100 border-yellow-300",
];

const noteEmojis = ["🍂", "☕", "📌", "🌰"];
const [notes] = useState([
    { id: 1, title: "Alışveriş", content: "Süt, ekmek, makarna" },
    { id: 2, title: "Toplantı", content: "Salı günleri 11.00" },
    { id: 3, title: "Çalışma", content: "React'a 3 saat çalış" },
  ]);

  return (
    <>
  <div className="min-h-screen bg-gradient-to-b from-amber-50 via-stone-50 to-orange-50 p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-stone-800 mb-6">🍂 Notes App</h1>

        <div className="space-y-3">
          {notes.map((note, index) => (
            <div
              key={note.id}
              className={`p-4 rounded-xl border shadow-sm ${
                cardColors[index % cardColors.length]
              }`}
            >
              <h2 className="font-semibold text-stone-800 flex items-center gap-2">
                <span className="text-xl">
                  {noteEmojis[index % noteEmojis.length]}
                </span>
                {note.title}
              </h2>
              <p className="text-stone-600 text-sm">{note.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  )
}

export default App
