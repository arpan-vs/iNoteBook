import React, { useState } from "react";
import NoteContext from "./noteContext";


const NoteState = (props) =>{
    const notesInitial = [
        {
          "_id": "61fcac21a7c9e88b2df033ac",
          "user": "61fc04e11b1478fcd9287ab2",
          "title": "My Title1",
          "description": "Please wake up early!",
          "tag": "personal",
          "date": "2022-02-04T04:31:29.984Z",
          "__v": 0
        },
        {
          "_id": "61fcac21a7ac9e88b2df033ac",
          "user": "61fc04e11b1478fcd9287ab2",
          "title": "My Title2",
          "description": "Please wake up early!",
          "tag": "personal",
          "date": "2022-02-04T04:31:29.984Z",
          "__v": 0
        },
        {
          "_id": "61fcac21a7fc9e88b2df033ac",
          "user": "61fc04e11b1478fcd9287ab2",
          "title": "My Title3",
          "description": "Please wake up early!",
          "tag": "personal",
          "date": "2022-02-04T04:31:29.984Z",
          "__v": 0
        },
        {
          "_id": "61fscac21a7c9e88b2df033ac",
          "user": "61fc04e11b1478fcd9287ab2",
          "title": "My Title4",
          "description": "Please wake up early!",
          "tag": "personal",
          "date": "2022-02-04T04:31:29.984Z",
          "__v": 0
        },
        {
          "_id": "61fcac21da7c9e88b2df033ac",
          "user": "61fc04e11b1478fcd9287ab2",
          "title": "My Title5",
          "description": "Please wake up early!",
          "tag": "personal",
          "date": "2022-02-04T04:31:29.984Z",
          "__v": 0
        },
        {
          "_id": "61fcasc21a7c9e88b2df033ac",
          "user": "61fc04e11b1478fcd9287ab2",
          "title": "My Title6",
          "description": "Please wake up early!",
          "tag": "personal",
          "date": "2022-02-04T04:31:29.984Z",
          "__v": 0
        },
        {
          "_id": "61fcac2s1a7c9e88b2df033ac",
          "user": "61fc04e11b1478fcd9287ab2",
          "title": "My Title7",
          "description": "Please wake up early!",
          "tag": "personal",
          "date": "2022-02-04T04:31:29.984Z",
          "__v": 0
        },
        {
          "_id": "61fcac2ca7c9e88sb2df033af",
          "user": "61fc04e11b1478fcd9287ab2",
          "title": "My Title8",
          "description": "Please wake up early!",
          "tag": "personal",
          "date": "2022-02-04T04:31:40.546Z",
          "__v": 0
        }
      ]

      const [notes, setNotes] = useState(notesInitial)


      // Add a Note
      const addNote = (title, description, tag) => {
        // TODO: API call
        console.log("Hhello")
        const note = {
          "_id": "61fcac2ca7sc9e88sb2df033af",
          "user": "61fc04e11b1478fcd9287ab2",
          "title": title,
          "description": description,
          "tag": tag,
          "date": "2022-02-04T04:31:40.546Z",
          "__v": 0
        };
        setNotes(notes.concat(note));
      }

      // Delete a Note
      const deleteNote = () => {

      }
      
      // Edit a Note
      const editNote = () => {

      }
    return (
        <NoteContext.Provider value={{notes,addNote, deleteNote, editNote}}>
            {props.children}
        </NoteContext.Provider>
    )
}



export default NoteState;