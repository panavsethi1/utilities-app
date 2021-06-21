import React, { useContext, useState } from "react";
import Header from "./Header";
import CreateArea from "./CreateArea";
import Note from "./Note";
import NoteContextProvider, { NoteContext } from "../contexts/NoteContext";
import Footer from "./Footer";

function Keeper() {
  const { notes, notesDispatch } = useContext(NoteContext);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  function addNote(newNote) {
    notesDispatch({
      type: "ADD_NOTE",
      payload: {
        title: newNote.title,
        content: newNote.content,
      },
    });
  }

  function deleteNote(id) {
    notesDispatch({
      type: "REMOVE_NOTE",
      payload: {
        id,
      },
    });
  }
  console.log(notes);
  return (
    <div>
      <Header comp="Keeper" />
      <CreateArea onAdd={addNote} />

      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default Keeper;
