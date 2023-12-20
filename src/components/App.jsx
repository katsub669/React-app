import React, {useState} from 'react';
import Header from './Header';
import Note from './Note';
import Footer from './Footer';
import CreateArea from './CreateArea';


function App() {
    const [noteArray, setNoteArray] = useState([]);

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