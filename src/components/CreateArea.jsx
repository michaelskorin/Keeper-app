import React, {useState} from "react";
import AddIcon from '@material-ui/icons/Add'; 
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

function CreateArea(props) {
  const [newNote, setNewNote] = useState({
    title: "",
    content: ""
  });

  const [isZoom, setIsZoom] = useState(false);

  function changeHandler(event) {
    const {name, value} = event.target;
    console.log(name);
    console.log(value);

      setNewNote(prevNote => {
        return {
          ...prevNote,
          [name]: value
        }
      });
    
  }

  function submitNote(event) {
    props.addNewNote(newNote);
    setNewNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  function zoomed() {
    setIsZoom(true);
  }

  return (
    <div>
      <form className="create-note">
        {isZoom && <input name="title" placeholder="Title" onChange={changeHandler} value={newNote.title} /> }
        <textarea name="content" placeholder="Take a note..." rows={isZoom ? "3" : "1"} onChange={changeHandler} onClick={zoomed} value={newNote.content} />
        <Zoom in={isZoom}><Fab onClick={submitNote}><AddIcon /></Fab></Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
