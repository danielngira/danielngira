import { useEffect, type ReactNode } from "react";
import "./Modal.css";

type ModalProps = {
  currentlyOpenWindow: string;
  closeWindow: () => void;
  children: ReactNode;
};

function Modal({ currentlyOpenWindow, closeWindow, children }: ModalProps) {
  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeWindow();
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [closeWindow]);

  return (
    <section
      className="modalContainer"
      role="dialog"
      aria-modal="true"
      aria-label={currentlyOpenWindow}
    >
      <header className="window-header">
        <span className="window-title">{currentlyOpenWindow}</span>
        <button className="window-close" onClick={closeWindow} aria-label="Close window">
          ×
        </button>
      </header>
      <div className="folderBody">{children}</div>
    </section>
  );
}

export default Modal;
