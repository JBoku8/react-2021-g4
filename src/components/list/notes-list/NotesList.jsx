import NoteListItem from "./NoteListItem";
import "./style.css";
function NotesList({ data = [], onNoteItemClick }) {
  return (
    <div className="row d-flex flex-wrap justify-content-between">
      {data.map((note) => {
        return (
          <NoteListItem
            key={note.id}
            note={note}
            onNoteItemClick={onNoteItemClick}
          />
        );
      })}
    </div>
  );
}

export default NotesList;
