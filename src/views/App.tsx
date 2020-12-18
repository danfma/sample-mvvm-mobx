import React from "react";
import { observer } from "mobx-react";
import PeopleListView from "./people/PeopleListView";
import PersonForm from "./people/PersonForm";
import { useAppProvider } from "./shared/AppProvider";

function App() {
  const {
    people: {
      editor
    }
  } = useAppProvider();

  return (
    <div className="ui basic padded segment">
      <div className={`ui grid ${editor.isEditing ? "two column" : ""} container`}>
        <div className="column">
          <PeopleListView />

          {!editor.isEditing && (
            <button
              type="button"
              className="ui button"
              onClick={editor.beginNew}>
              Add person
            </button>
          )}
        </div>

        {editor.isEditing && (
          <div className="column">
            <PersonForm />
          </div>
        )}
      </div>
    </div>
  );
}

export default observer(App);
