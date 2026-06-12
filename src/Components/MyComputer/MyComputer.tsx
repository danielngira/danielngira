import file from "../assets/images/file.png";
import "./MyComputer.css";

function MyComputer() {
  return (
    <>
      <div className="myComputerContainer">
        <button className="icon">
          <img src={file} alt="Image of a File Icon" />
        </button>
        <p>DANIEL.md</p>
      </div>
    </>
  );
}

export default MyComputer;
