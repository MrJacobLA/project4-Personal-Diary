import { useEffect, useState } from "react";
import Modal from "../Modal";

function home() {
  const [diary, setDiary] = useState([]);

  useEffect(() => {
    const localStorageData = JSON.parse(localStorage.getItem("diary")) || [];
    setDiary(localStorageData);
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
      <Modal diary={diary} setDiary={setDiary} />
      {diary.length > 0 ? (
        <div className="diary-grid  ">
          <div className="flex gap-4">
            {diary.map((entry, index) => (
              <div className=" m-2 bg-gray-200 rounded-2xl">
                <div key={index}>
                  <div className="m-3">{entry.date}</div>
                  <div className="m-3">{entry.title}</div>
                  <img
                    src={entry.image}
                    alt="Kein Bild hier"
                    className="w-45 h-35 rounded-2xl m-3"
                  />
                  <div className="m-3">{entry.thoughts}</div>
                  <button
                    className="m-2 px-2 bg-gray-500 text-white rounded hover:cursor-pointer"
                    onClick={() => deleteEntry(index)}
                  >
                    Eintrag löschen
                  </button>{" "}
                  {/* Button zum Löschen */}
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <p className="text-center m-8">
          Keine Tagebucheinträge vorhanden. Füge welche hinzu!
        </p> // Fallback
      )}
    </>
  );
}

export default home;
