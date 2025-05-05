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
        <div className="diary-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {diary.map((entry, index) => (
            <div
              key={index}
              className="flex flex-col mx-auto items-start   rounded-lg  bg-slate-200 w-[300px] cursor-pointer"
            >
              <div className="p-4">{entry.date}</div>
              <div className="text-lg md:text-xl font-bold p-4">
                {entry.title}
              </div>
              <img
                src={entry.image}
                alt="Kein Bild hier"
                className="h-[200px] w-full rounded-b-lg object-cover"
              />
              <div className="p-4">{entry.thoughts}</div>
              <div className=" w-full flex justify-center ">
                <button
                  onClick={() => deleteEntry(index)}
                  className="cancelBtn2 "
                >
                  Eintrag löschen
                </button>{" "}
                {/* Button zum Löschen */}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="m-10">
          <p>Keine Tagebucheinträge vorhanden. Füge welche hinzu!</p>
        </div> // Fallback
      )}
    </>
  );
}
//comment
export default home;
