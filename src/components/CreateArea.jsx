import React, {useState} from "react";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {
    //constant for exponding elements when textarea is clicked
    const [isClicked, setIsClicked] = useState(false);
    //- constant that keeps track of the title and content.
    const [formText, setFromText] = useState({
        title: '',
        content: ''
    });
    //- function that changes formText onChange in inputs.
    function handleChange(event) {
        const {value, name} = event.target;
        setFromText(prevValue => {
            return (
            {
                ...prevValue,
                [name]: value
            })
        })
    }

    return (
        <div>
          <form className="create-note">
            {isClicked &&
            <Zoom in={true}>
                <input name="title" placeholder="Title" value={formText.title} onChange={handleChange} />
            </Zoom>}
            {isClicked && <Zoom in={true}><hr /></Zoom>}
            <textarea name="content" placeholder="Take a note..." rows={isClicked ? '3' : '1'} value={formText.content} 
                onChange={handleChange} onClick={() => (setIsClicked(true))} onDoubleClick={() => (setIsClicked(false))}/>
            <Zoom in={isClicked}>
                <Fab 
                    onClick={(event) => {
                        //passing formText to ./App
                        props.addNote(formText);
                        //clearing formText
                        setFromText(
                            {
                                title: '',
                                content: ''
                            }
                        );
                        setIsClicked(false);
                        event.preventDefault();
                    }}
                > <AddCircleOutlineIcon />
                </Fab>
            </Zoom>
            
          </form>
        </div>
      );

}

export default CreateArea;
