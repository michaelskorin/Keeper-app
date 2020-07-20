import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
    const [notes, setNotes] = useState([]);

    function addNote(newNote) {
        setNotes(prevNotes => {
            return [...notes, newNote];
        })
    }

    function deleteNote(noteId) {
        setNotes(prevNotes => {
            return prevNotes.filter((item, index) => {
                return index !== noteId;
            })
        })
    }

  return (
    <div>
      <Header />
      <CreateArea addNewNote={addNote} />
      {notes.map((note, index) => {
           return <Note key={index} index={index} title={note.title} content={note.content} removeNote={deleteNote} />
      })}
      
      <Footer />
    </div>
  );
}

export default App;
