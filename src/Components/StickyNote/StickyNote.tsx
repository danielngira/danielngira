import "./StickyNote.css";
import { SITE_TODOS } from "../../utils/constants";

function StickyNote() {
  return (
    <aside className="stickyNote">
      <div className="stickyNoteTape" />

      <h2 className="stickyNoteTitle">To Do</h2>

      <ul className="stickyNoteList">
        {SITE_TODOS.map((todo) => (
          <li key={todo} className="stickyNoteItem">
            <span className="stickyNoteCheckbox">□</span>
            <span>{todo}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default StickyNote;
