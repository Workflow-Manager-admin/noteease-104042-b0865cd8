import React from "react";
import "./App.css";
import NoteEaseContainer from "./NoteEaseContainer";

// PUBLIC_INTERFACE
function App() {
  // Handler for the 'Add new note' button
  const handleAddNote = () => {
    // Placeholder for launching note creation UI/modal/flow
    window.alert("Add new note (not implemented)");
  };

  return (
    <div className="app">
      {/* You could optionally keep a navbar here if wanted */}
      <NoteEaseContainer onAddNote={handleAddNote} />
    </div>
  );
}

export default App;