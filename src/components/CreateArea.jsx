import React, {useState} from "react";

function CreateArea(props) {
    const [formText, setFromText] = useState({
        title: '',
        content: ''
    });

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
                    props.addNote(formText);
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
