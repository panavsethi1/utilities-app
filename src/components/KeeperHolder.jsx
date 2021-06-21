import React from "react";
import NoteContextProvider from "../contexts/NoteContext";
import Keeper from "./Keeper";

function KeeperHolder() {
  return (
    <div>
      <NoteContextProvider>
        <Keeper />
      </NoteContextProvider>
    </div>
  );
}

export default KeeperHolder;
