import TextCard from "components/TextCard";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function NoteList() {
  const noteList = useSelector((store) => store.NOTE.noteList);
  const navigate = useNavigate();

  return (
    <div className="row justify-content-center notesContainer">
      {noteList.map((note) => {
        return (
          <div className="notesContainer__cards">
            <TextCard
              key={note.id}
              title={note.title}
              subtitle={note.created_at}
              content={note.content}
              onClick={() => navigate("/note/" + note.id)}
              onClickTrash={() => alert("click trash")}
            />
          </div>
        );
      })}
    </div>
  );
}
export default NoteList;
