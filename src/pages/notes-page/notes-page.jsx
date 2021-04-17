import AddNoteForm from '../../components/forms/add-note-form';
import NotesList from '../../components/list/notes-list';

import './notes-page.css';

function NotesPage(props) {
  return (
    <div className="row">
      <h2>Notes Page</h2>
      <div className="col-4">
        <AddNoteForm />
      </div>
      <div className="col-8">
        <NotesList />
      </div>
    </div>
  );
}

export default NotesPage;
