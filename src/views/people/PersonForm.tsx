import { observer } from "mobx-react";
import { useAppProvider } from "../shared/AppProvider";
import { useMapper, useValueCallback } from "../shared/hooks";
import { toPhoneNumber } from "../shared/transformers";

function PersonForm() {
  const {
    people: {
      editor
    }
  } = useAppProvider();

  const handleNameChange = useValueCallback(editor.setName);
  const handleSurnameChange = useValueCallback(editor.setSurname);
  const handlePhoneChange = useValueCallback(useMapper(editor.setPhone, toPhoneNumber));

  return (
    <div className="ui padded segment">
      <form className="ui form" onSubmit={editor.save}>
        <h3 className="ui header">
          Novo registro
        </h3>

        <div className="field">
          <label htmlFor="nameInput">Nome:</label>
          <input
            type="text"
            id="nameInput"
            value={editor.person.name}
            onChange={handleNameChange} />
        </div>

        <div className="field">
          <label htmlFor="surnameInput">Sobrenome:</label>
          <input
            type="text"
            id="surnameInput"
            value={editor.person.surname}
            onChange={handleSurnameChange} />
        </div>

        <div className="field">
          <label htmlFor="phoneInput">Telefone:</label>
          <div className="ui left icon input">
            <i className="phone icon" />
            <input
              type="text"
              id="phoneInput"
              value={editor.person.phone.number}
              onChange={handlePhoneChange} />
          </div>
        </div>

        <button type="submit" className="ui primary button">
          Salvar
        </button>

        <button type="button" className="ui button" onClick={editor.cancel}>
          Cancelar
        </button>
      </form>
    </div>
  );
}

export default observer(PersonForm);
