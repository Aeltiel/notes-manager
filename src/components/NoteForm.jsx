import { PencilFill, TrashFill } from "react-bootstrap-icons";
import ButtonPrimary from "./ButtonPrimary";
import { useState } from "react";
import { ValidatorService } from "services/form-validators";
import FieldError from "./FieldError";

const VALIDATORS = {
  title: (value) => {
    return ValidatorService.min(value, 3) || ValidatorService.max(value, 20);
  },
  content: (value) => {
    return ValidatorService.min(value, 3);
  },
};

function NoteForm({
  isEditable = true,
  note,
  title,
  onClickEdit,
  onClickTrash,
  onSubmit,
}) {
  const [formValues, setFormValues] = useState({
    title: note?.title || "",
    content: note?.content || "",
  });
  const [formErrors, setFormErrors] = useState({
    title: note?.title ? undefined : "",
    content: note?.content ? undefined : "",
  });

  function hasError() {
    return Object.values(formErrors).some((error) => error !== undefined);
  }

  function updateFormValues(event) {
    setFormValues({ ...formValues, [event.target.name]: event.target.value });
    validate(event.target.name, event.target.value);
  }

  //fonction de validation des champs. l'écriture [] après validators fonctionne sur le même principe
  //updateFormValues. ça permet de rendre dynamique la gestion des erreurs
  function validate(fieldName, fieldValue) {
    setFormErrors({
      ...formErrors,
      [fieldName]: VALIDATORS[fieldName](fieldValue),
    });
  }

  //bloc de constante qui permet de diviser les différentes parties du composant et qui sont
  //dans le render pour simplifier la lecture
  const actionIcons = (
    <>
      <div className="col-1">
        {onClickEdit && (
          <PencilFill onClick={onClickEdit} className="formIcons" />
        )}
      </div>
      <div className="col-1">
        {onClickTrash && (
          <TrashFill onClick={onClickTrash} className="formIcons" />
        )}
      </div>
    </>
  );
  const titleInput = (
    <div className="mb-5">
      <label className="form-label">Title</label>
      <input
        onChange={updateFormValues}
        type="text"
        name="title"
        className="form-control"
        value={formValues.title}
      />
      <FieldError msg={formErrors.title} />
    </div>
  );
  const contentInput = (
    <div className="mb-5">
      <label className="form-label">Content</label>
      <textarea
        onChange={updateFormValues}
        type="text"
        name="content"
        className="form-control"
        row="5"
        value={formValues.content}
      />
      <FieldError msg={formErrors.content} />
    </div>
  );

  const submitButton = (
    <div className="submitBtn">
      <ButtonPrimary
        isDisabled={hasError()}
        onClick={() => onSubmit(formValues)}
      >
        Submit
      </ButtonPrimary>
    </div>
  );

  return (
    <div className="FormContainer">
      <div className="row justify-content-space-between">
        <div className="col-10">
          <h2 className="mb-3">{title}</h2>
        </div>
        {actionIcons}
      </div>
      <div className="mb-3 inputTitle">{isEditable && titleInput}</div>
      <div className="mb-3">
        {isEditable ? contentInput : <pre>{note.content}</pre>}
      </div>
      {onSubmit && submitButton}
    </div>
  );
}
export default NoteForm;
