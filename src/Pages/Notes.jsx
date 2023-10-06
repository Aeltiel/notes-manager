import { NoteAPI } from "api/note-api";
import NoteForm from "components/NoteForm";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { updateNote } from "store/note/note-slice";

function Notes() {
  const [isEditable, setIsEditable] = useState(false);
  const { noteId } = useParams();
  const note = useSelector((store) =>
    store.NOTE.noteList.find((note) => note.id === noteId)
  );
  const dispatch = useDispatch();

  async function submit(formValues) {
    const updatedNote = await NoteAPI.update({ ...formValues, id: note.id });
    dispatch(updateNote(updatedNote));
    setIsEditable(false);
  }

  return (
    <>
      {note && (
        <NoteForm
          isEditable={isEditable}
          title={isEditable ? "Edit note" : note.title}
          note={note}
          onClickEdit={() => setIsEditable(!isEditable)}
          onClickTrash={() => ""}
          onSubmit={isEditable && submit}
        />
      )}
    </>
  );
}
export default Notes;
