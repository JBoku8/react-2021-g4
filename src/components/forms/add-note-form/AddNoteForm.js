import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import Button from '../../ui/button';

import { NotesContext } from '../../../contexts/NotesProvider';

import './style.css';

function AddNoteForm() {
  const { register, handleSubmit, watch } = useForm();

  const { addNewNote, nextId } = useContext(NotesContext);

  const onSubmit = (data) => {
    const newNote = {
      ...data,
      id: nextId,
    };
    console.log(newNote);
    addNewNote(newNote);
  };

  return (
    <form className="row g-1" onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Title - {watch('title')}
        </label>
        <input
          type="text"
          className="form-control"
          id="title"
          placeholder=""
          required
          {...register('title', { required: true })}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <textarea
          className="form-control"
          id="description"
          rows="3"
          required
          {...register('description', { required: true })}
        />
      </div>
      <div className="mb-3 form-check">
        <input
          type="checkbox"
          className="form-check-input"
          id="completed"
          {...register('completed')}
        />
        <label className="form-check-label" htmlFor="completed">
          Completed
        </label>
      </div>
      <Button type="submit" text="Add Note" className="btn btn-primary" />
    </form>
  );
}

export default AddNoteForm;
