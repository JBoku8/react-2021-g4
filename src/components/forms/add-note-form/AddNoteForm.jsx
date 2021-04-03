import { useState } from "react";
import Button from "../../ui/button";

import "./style.css";

function AddNoteForm({ addNewNote, nextid }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [completed, setCompleted] = useState(false);

  const onSubmit = (event) => {
    event.preventDefault();
    const newNote = {
      title,
      description,
      completed,
      id: nextid,
    };
    addNewNote(newNote);
    setTitle("");
    setDescription("");
    setCompleted(false);
  };

  return (
    <form className="row g-1" onSubmit={onSubmit}>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Title - {title}
        </label>
        <input
          type="text"
          className="form-control"
          id="title"
          placeholder=""
          required
          value={title}
          onChange={({ target }) => {
            setTitle(target.value);
          }}
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
          value={description}
          onChange={({ target }) => {
            setDescription(target.value);
          }}
        ></textarea>
      </div>
      <div className="mb-3 form-check">
        <input
          type="checkbox"
          className="form-check-input"
          id="completed"
          checked={completed}
          onChange={({ target }) => {
            setCompleted(target.checked);
          }}
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
