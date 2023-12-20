import React, {useState} from "react";

function CreateArea(props) {
    //- constant that keeps track of the title and content.
    const [formText, setFromText] = useState({
        title: '',
        content: ''
    });
    //- cfunction that changes formText onChange in inputs.
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
          <form>
            <input name="title" placeholder="Title" value={formText.title} onChange={handleChange} />
            <hr />
            <textarea name="content" placeholder="Take a note..." rows="3" value={formText.content} onChange={handleChange} />
            <button 
                onClick={(event) => {
                    //passing formText to ./App to add the note to the array
                    props.addNote(formText);
                    //clearing the formText
                    setFromText(
                        {
                            title: '',
                            content: ''
                        }
                    );
                    event.preventDefault();
                }}
            > Add
            </button>
          </form>
        </div>
      );

}

export default CreateArea;
