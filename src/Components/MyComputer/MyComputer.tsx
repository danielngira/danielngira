import file from "../../assets/images/file.png";
import "./MyComputer.css";
import { useState } from "react";
import Daniel from "./Daniel";

function MyComputer() {
    const [isWindowOpen, setIsWindowOpen] = useState(false);

    const closeWindow = () => {
        setIsWindowOpen(false);
    };

    const openWindow = () => {
        setIsWindowOpen(true);
    };

  return (
    <>
      <div className="myComputerContainer">
        <button className="icon" onClick={() => openWindow()}>
          <img src={file} alt="Image of a File Icon" />
        </button>
        <p>DANIEL.md</p>
        {isWindowOpen && (<Daniel closeWindow={closeWindow}/>)}
      </div>
    </>
  );
}

export default MyComputer;
