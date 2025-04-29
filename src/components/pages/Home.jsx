import LocalStore from "../LocalStore";
import Modal from "../Modal";

function home() {
  return (
    <>
      <p>My Personal Diary</p>

      <LocalStore />
      <Modal />
    </>
  );
}

export default home;
