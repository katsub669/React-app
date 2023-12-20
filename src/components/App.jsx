import React, {useState} from 'react';
import Header from './Header';
import Note from './Note';
import Footer from './Footer';
import CreateArea from './CreateArea';


function App() {
    //- constant that keeps track of the notes array.
    const [noteArray, setNoteArray] = useState([]);
    //- getting ua new note from ./Note and adding it to an existing array.
    function addNote(formText) {
        setNoteArray((prevItems) => {
            return [...prevItems, formText];
          });
    }
    
    function deleteNote(id) {
        setNoteArray((prevItems) => {
            return prevItems.filter((item, index) => id !== index)
        })
    }
        // - Pass the addNote function to ./CreateArea
        //- Take array and render seperate Note components for each item.
    return (
    <div>
        <Header />
        <CreateArea addNote={addNote} />
        {noteArray.map((item, index) => (
            <Note 
                key= {index}
                id= {index}
                title = {item.title}
                content = {item.content}
                delete={deleteNote}
            />
        ))}
        <Footer />
    </div>
    )
}

export default App;
