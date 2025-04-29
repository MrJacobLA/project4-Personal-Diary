import React, { useState } from "react";
import "./modal.css";
import cancelIcon from "./icons/cancel.jpg";
import saveIcon from "./icons/save.jpg";

function Modal() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div>
      <button className="button text-amber-600 border" onClick={openModal}>
        Modal öffnen
      </button>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h2 className="text-center font-bold">New Diary Entry</h2>
            <div className="flex flex-wrap gap-2">
              Date:
              <input className="" type="text" placeholder="tt.mm.jjjj" />
            </div>

            <input className="border-black" type="text" placeholder="Title" />
            <input className="" type="text" placeholder="Image URL" />
            <input
              className=""
              type="text"
              placeholder="Write your thoughts..."
            />
            {/* <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="modal-input">Name:</label>
                <input
                  id="modal-input"
                  type="text"
                  ref={inputRef}
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Bitte geben Sie einen Namen ein"
                />
              </div>
            </form> */}

            {/* Cancel-button mit icon mit close-Methode*/}
            <button className="cancelBtn" onClick={closeModal}>
              <img src={cancelIcon} alt="Cancel" className="icon" />
              Cancel
            </button>
            {/* Save-button mit icon braucht noch save-Methode*/}
            <button className="saveBtn" onClick={closeModal}>
              <img src={saveIcon} alt="Save" className="icon" />
              Save
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Modal;
