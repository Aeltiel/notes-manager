import { useState } from "react";
import { Trash as TrashIcon } from "react-bootstrap-icons";

function TextCard({ title, subtitle, content, onClickTrash, onClick }) {
  const [isCardHovered, setIsCardHovered] = useState(false);
  const [isTrashHovered, setIsTrashHovered] = useState(false);

  //fonction qui permet de contrer la mécanique d'enchainement d'event quand il y en a plusieurs au même endroit
  function onClickTrash_(e) {
    onClickTrash();
    e.stopPropagation();
  }

  return (
    <div
      onMouseEnter={() => setIsCardHovered(true)}
      onMouseLeave={() => setIsCardHovered(false)}
      onClick={onClick}
      className="card containerCard"
      style={{ borderColor: isCardHovered ? "#0d6efd" : "transparent" }}
    >
      <div className="card-body">
        <div className="containerCard__row">
          <h5 className="card-title">{title}</h5>
          <TrashIcon
            size={20}
            onMouseEnter={() => setIsTrashHovered(true)}
            onMouseLeave={() => setIsTrashHovered(false)}
            style={{ color: isTrashHovered ? "#FF7373" : "#b8b8b8" }}
            onClick={onClickTrash_}
          />
        </div>
        <h6 className="card-subtitle mb-2 text-muted">{subtitle}</h6>
        <p className="card-text containerCard__content">{content}</p>
      </div>
    </div>
  );
}
export default TextCard;
