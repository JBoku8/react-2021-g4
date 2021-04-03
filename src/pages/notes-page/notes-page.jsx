import { useState } from "react";
import AddNoteForm from "../../components/forms/add-note-form";
import NotesList from "../../components/list/notes-list";

import dummyNoteListData from "../../data/noteList";
import "./notes-page.css";

function NotesPage(props) {
  const [noteList, setNoteList] = useState(dummyNoteListData);

  const addNewNote = (newNote) => {
    const newNoteList = [...noteList, newNote];
    setNoteList(newNoteList);
  };

  const onNoteItemClick = (noteId) => {
    const noteIndex = noteList.findIndex((n) => n.id === noteId);
    const updatedNoteList = [
      ...noteList.slice(0, noteIndex),
      {
        ...noteList[noteIndex],
        completed: true,
      },
      ...noteList.slice(noteIndex + 1),
    ];

    setNoteList(updatedNoteList);
  };

  return (
    <div className="row">
      <h2>Notes Page</h2>
      <div className="col-4">
        <AddNoteForm
          addNewNote={addNewNote}
          nextid={noteList[noteList.length - 1].id + 1}
        />
      </div>
      <div className="col-8">
        <NotesList data={noteList} onNoteItemClick={onNoteItemClick} />
      </div>
    </div>
  );
}

export default NotesPage;
