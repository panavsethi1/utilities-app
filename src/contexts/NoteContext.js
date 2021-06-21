import React, { createContext, useEffect, useReducer } from "react";
import { noteReducer } from "../reducers/noteReducer";

export const NoteContext = createContext();

const NoteContextProvider = (props) => {
  const [notes, notesDispatch] = useReducer(noteReducer, [], () => {
    const localData = localStorage.getItem("notes");
    return localData ? JSON.parse(localData) : [];
  });
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  return (
    <NoteContext.Provider value={{ notes, notesDispatch }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteContextProvider;
