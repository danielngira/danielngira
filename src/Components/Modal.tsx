import "./Modal.css";

type ModalProps = {
  currentlyOpenWindow: string;
};

function Modal({ currentlyOpenWindow }: ModalProps) {
  return (
    <>
      <div className="modalContainer">
        <div className="header">
          <p>{currentlyOpenWindow}</p>
        </div>

        <div className="folderBody">
          <p>This is the {currentlyOpenWindow} window.</p>
        </div>
      </div>
    </>
  );
}

export default Modal;
