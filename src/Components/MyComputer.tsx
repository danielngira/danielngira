import file from "../assets/images/file.png";
import "./MyComputer.css";

function MyComputer() {
  return (
    <>
      <div>
        <button className="icon">
          <img src={file} alt="Image of a File Icon" />
        </button>
      </div>
    </>
  );
}

export default MyComputer;
