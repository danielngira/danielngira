import "./Resume.css";
import { DANIEL_RESUME } from "../../utils/constants";

function Resume() {
  return (
    <div className="resumeBody">
      <pre className="resumeText">{DANIEL_RESUME}</pre>
    </div>
  );
}

export default Resume;
