import { useContext } from 'react';

import Button from '../../ui/button';

import { NotesContext } from '../../../contexts/NotesProvider';

function NoteListItem({ note }) {
  const { onNoteItemClick } = useContext(NotesContext);

  const onClick = () => {
    onNoteItemClick(note.id);
  };

  return (
    <div
      className={`card text-white mb-3 note-list-item ${
        note.completed ? 'bg-success' : 'bg-primary'
      }`}>
      <div className="card-header">#{note.id}</div>
      <div className="card-body">
        <h5 className="card-title">{note.title}</h5>
        <p className="card-text">{note.description}</p>

        {!note.completed ? (
          <Button
            type="button"
            className="btn btn-light"
            text="Mark as Completed"
            onClick={onClick}
          />
        ) : null}
      </div>
    </div>
  );
}

export default NoteListItem;
