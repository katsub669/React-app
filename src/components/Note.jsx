import React from 'react';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';

function Note(props) {
    return (
        <div className='note'>
            <h1>{props.title}</h1>
            <hr />
            <p> {props.content}</p>
            <button
                onClick = {
                    () => {
                        //passing id to ./App to delete the correct note
                        props.delete(props.id);
                    }
                }
            >
            <DeleteOutlinedIcon />
            </button>
        </div>
    )
}

export default Note;
