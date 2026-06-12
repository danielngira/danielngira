import "./Modal.css";
import close from "../assets/images/exit.png";
import minimize from "../assets/images/minimize.png";
import maximize from "../assets/images/maximize.png";

type ModalProps = {
  currentlyOpenWindow: string;
  closeWindow: () => void;
};


function Modal({ currentlyOpenWindow, closeWindow}: ModalProps) {
  return (
    <>
      <div className="modalContainer">
        <div className="header">
            {/*Title*/}
            <div>
                <p>{currentlyOpenWindow}</p>
            </div>

            {/*Minimize*/}
            <div>
                <button>
                    <img src={minimize} alt="Minimize Button"/>
                </button>
            </div>

            {/*Maximimze*/}
            <div>
                <button>
                    <img src={maximize} alt="Maximize Button"/>
                </button>
            </div>

            {/*Close*/}
            <div>
                <button onClick={() => closeWindow()}>
                    <img src={close} alt="Close Button"/>
                </button>
            </div>

        </div>

        <div className="folderBody">
          <p>This is the {currentlyOpenWindow} window.</p>
        </div>
      </div>
    </>
  );
}

export default Modal;
