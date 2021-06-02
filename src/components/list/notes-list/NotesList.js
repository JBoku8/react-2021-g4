import { useContext } from 'react';
import NoteListItem from './NoteListItem';
import { NotesContext } from '../../../contexts/NotesProvider';

import './style.css';

function NotesList() {
  const { noteList } = useContext(NotesContext);
  return (
    <div className="row d-flex flex-wrap justify-content-between">
      {noteList.map((note) => (
        <NoteListItem key={note.id} note={note} />
      ))}
    </div>
  );
}

export default NotesList;
