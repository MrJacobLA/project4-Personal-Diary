import { useEffect, useState } from "react";
import Modal from "../Modal";

function home() {
  const [diary, setDiary] = useState([]);

  useEffect(() => {
    const localStorageEntry = JSON.parse(localStorage.getItem("diary")) || [];
    setDiary(localStorageEntry);
  }, []);
  console.log("diary", diary);

  const deleteEntry = (index) => {
    const updatedDiary = diary.filter((_, i) => i !== index); // Eintrag entfernen
    setDiary(updatedDiary);
    localStorage.setItem("diary", JSON.stringify(updatedDiary)); // localStorage aktualisieren
  };

  return (
    <>
      <h1 className="text-4xl font-bold text-center mb-8">Personal Diary</h1>
      <Modal />
      {diary.length > 0 ? (
        <div className="diary-grid flex gap-2">
          {diary.map((entry, index) => (
            <div key={index}>
              <div>{entry.date}</div>
              <div>{entry.title}</div>
              <img src={entry.image} alt="Kein Bild hier" />
              <div>{entry.thoughts}</div>
              <button onClick={() => deleteEntry(index)}>
                Eintrag löschen
              </button>{" "}
              {/* Button zum Löschen */}
            </div>
          ))}
        </div>
      ) : (
        <p>Keine Tagebucheinträge vorhanden. Füge welche hinzu!</p> // Fallback
      )}
    </>
  );
}

export default home;
