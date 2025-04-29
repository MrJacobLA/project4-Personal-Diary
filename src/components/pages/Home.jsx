import LocalStore from "../LocalStore";
import Modal from "../Modal";

function home() {
  return (
    <>
      <h1 class="text-4xl font-bold text-center mb-8">Personal Diary</h1>
      {/* <div class="flex justify-center">
        <button
          class="flex items-center md:bg-slate-200 md:px-4 md:py-2 md:rounded"
          onClick={Modal}
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 24 24"
            class="text-5xl"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path fill="none" d="M0 0h24v24H0z"></path>
            <path d="M17 19.22H5V7h7V5H5c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-7h-2v7.22z"></path>
            <path d="M19 2h-2v3h-3c.01.01 0 2 0 2h3v2.99c.01.01 2 0 2 0V7h3V5h-3V2zM7 9h8v2H7zM7 12v2h8v-2h-3zM7 15h8v2H7z"></path>
          </svg>
          <span class="hidden md:inline">AddPost</span>
        </button>
      </div> */}
      <LocalStore />
      <Modal />
    </>
  );
}

export default home;
