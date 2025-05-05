import React, { useState } from "react";
import "./modal.css";
import cancelIcon from "./icons/cancel.jpg";
import saveIcon from "./icons/save.jpg";

function Modal({ diary, setDiary }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [date, setDate] = useState("");
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [thoughts, setThoughts] = useState("");

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  console.log(title);

  const handleSave = () => {
    if (!date || !title.trim() || !image.trim() || !thoughts.trim()) {
      alert("Bitte fülle alle Felder aus!");
      return;
    }
    const newEntry = { date, title, image, thoughts };
    const existingEntries = JSON.parse(localStorage.getItem("diary")) || [];
    // console.log("hier meinEintrag:", existingEntries);
    const match = existingEntries.some((entry) => entry.date === date);

    if (match) {
      alert("Für diesen Tag existiert schon ein Eintrag.");
      return;
    }

    existingEntries.push(newEntry);
    // localStorage.setItem("diary", JSON.stringify(existingEntries));

    setDate("");
    setTitle("");
    setImage("");
    setThoughts("");
    closeModal();
    // window.location.reload();
    const updated = [newEntry, ...diary];
    localStorage.setItem("diary", JSON.stringify(updated));
    setDiary(updated);
  };

  return (
    <>
      <div className="flex justify-center">
        {/* <button className="button text-amber-600 border" onClick={openModal}>
        Modal öffnen
      </button> */}
        <button
          className="button flex items-center md:bg-slate-200 md:px-4 md:py-2 md:rounded"
          onClick={openModal}
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 24 24"
            className="text-5xl"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path fill="none" d="M0 0h24v24H0z"></path>
            <path d="M17 19.22H5V7h7V5H5c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-7h-2v7.22z"></path>
            <path d="M19 2h-2v3h-3c.01.01 0 2 0 2h3v2.99c.01.01 2 0 2 0V7h3V5h-3V2zM7 9h8v2H7zM7 12v2h8v-2h-3zM7 15h8v2H7z"></path>
          </svg>
          <span className="hidden md:inline">AddPost</span>
        </button>
      </div>
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h2 className="text-center font-bold">New Diary Entry</h2>
            <div className="flex flex-wrap gap-2">
              Date:
              <input
                className=""
                type="date"
                placeholder="tt.mm.jjjj"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
            <div>
              <input
                className="border-black"
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div>
              <input
                className=""
                type="text"
                placeholder="Image URL"
                value={image}
                onChange={(e) => setImage(e.target.value)}
              />
            </div>
            <div>
              <textarea
                rows="4"
                cols="40"
                className=""
                type="text"
                placeholder="Write your thoughts..."
                value={thoughts}
                onChange={(e) => setThoughts(e.target.value)}
              ></textarea>
            </div>
            {/* Cancel-button mit icon mit closModal-Methode*/}
            <button className="cancelBtn" onClick={closeModal}>
              <img src={cancelIcon} alt="Cancel" className="icon" />
              Cancel
            </button>
            {/* Save-button mit icon mit der handleSave-Methode*/}
            <button className="saveBtn" onClick={handleSave}>
              <img src={saveIcon} alt="Save" className="icon" />
              Save
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Modal;
