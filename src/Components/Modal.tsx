import "./Modal.css";
import close from "../assets/images/exit.png";
import minimize from "../assets/images/minimize.png";
import maximize from "../assets/images/maximize.png";
import type { ReactNode } from 'react';

type ModalProps = {
  currentlyOpenWindow: string;
  closeWindow: () => void;
  children: ReactNode;
};

function Modal({ currentlyOpenWindow, closeWindow, children }: ModalProps) {

  return (
    <>
      <div className="modalContainer">
        <div className="header">
          {/*Title*/}
          <div>
            <p>{currentlyOpenWindow}</p>
          </div>

          <div className="buttons">
            {/*Minimize*/}
            <div>
              <button className="button">
                <img src={minimize} alt="Minimize Button" />
              </button>
            </div>

            {/*Maximimze*/}
            <div>
              <button className="button">
                <img src={maximize} alt="Maximize Button" />
              </button>
            </div>

            {/*Close*/}
            <div>
              <button onClick={closeWindow} className="button">
                <img src={close} alt="Close Button" />
              </button>
            </div>
          </div>
        </div>

        <div className="folderBody">
          {children}
        </div>
      </div>
    </>
  );
}

export default Modal;
