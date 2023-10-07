import { NoteAPI } from "api/note-api";
import TextCard from "components/TextCard";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteNote } from "store/note/note-slice";

function NoteList({ noteList }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function deleteNote_(note) {
    //window.confirm renvoie true ou false. si c'est true on lance le code dans le if
    if (window.confirm("Supprimer la note ?")) {
      NoteAPI.deleteById(note.id);
      dispatch(deleteNote(note));
    }
  }

  return (
    <div className="row justify-content-center notesContainer">
      {noteList.map((note) => {
        return (
          <div className="notesContainer__cards" key={note.id}>
            <TextCard
              title={note.title}
              subtitle={note.created_at}
              content={note.content}
              onClick={() => navigate("/note/" + note.id)}
              onClickTrash={() => deleteNote_(note)}
            />
          </div>
        );
      })}
    </div>
  );
}
export default NoteList;
