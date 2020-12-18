import { observer } from "mobx-react";
import { useAppProvider } from "views/shared/AppProvider";
import { useEffect } from "react";

function PeopleListView() {
  const {
    people: {
      list
    }
  } = useAppProvider();

  useEffect(() => list.attach(), [list]);

  return (
    <table className="ui celled table">
      <thead>
      <tr>
        <th>Nome</th>
        <th>Surname</th>
        <th>Telefone</th>
        <th className="right aligned collapsing">&nbsp;</th>
      </tr>
      </thead>
      <tbody>
      {list.people.map((person, i) => (
        <tr key={`item-${i}`}>
          <td>{person.name}</td>
          <td>{person.surname}</td>
          <td>{person.phone.toString()}</td>
          <td>
            <div className="ui small buttons">
              <button
                type="button"
                className="ui icon basic button">
                <i className="edit icon" />
              </button>

              <button
                type="button"
                className="ui icon basic button">
                <i className="red delete icon" />
              </button>
            </div>
          </td>
        </tr>
      ))}
      </tbody>
    </table>
  );
}

export default observer(PeopleListView);
