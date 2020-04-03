import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = React.useState([]);

  function addNote(title, note) {
    let aNote = {
      nTitle: title,
      nNote: note
    };
    setNotes(prevItems => {
      return [...prevItems, aNote];
    });
  }

  function deleteNote(id) {
    setNotes(prevItems => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea createNote={addNote} />
      {notes.map((note, index) => (
        <Note
          key={index}
          id={index}
          title={note.nTitle}
          content={note.nNote}
          delete={deleteNote}
        />
      ))}
      {/* <Note key={1} title="Note title" content="Note content" /> */}
      <Footer />
    </div>
  );
}

export default App;
