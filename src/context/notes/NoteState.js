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
          "_id": "61fcac21a7c9e88b2df033ac",
          "user": "61fc04e11b1478fcd9287ab2",
          "title": "My Title2",
          "description": "Please wake up early!",
          "tag": "personal",
          "date": "2022-02-04T04:31:29.984Z",
          "__v": 0
        },
        {
          "_id": "61fcac21a7c9e88b2df033ac",
          "user": "61fc04e11b1478fcd9287ab2",
          "title": "My Title3",
          "description": "Please wake up early!",
          "tag": "personal",
          "date": "2022-02-04T04:31:29.984Z",
          "__v": 0
        },
        {
          "_id": "61fcac21a7c9e88b2df033ac",
          "user": "61fc04e11b1478fcd9287ab2",
          "title": "My Title4",
          "description": "Please wake up early!",
          "tag": "personal",
          "date": "2022-02-04T04:31:29.984Z",
          "__v": 0
        },
        {
          "_id": "61fcac21a7c9e88b2df033ac",
          "user": "61fc04e11b1478fcd9287ab2",
          "title": "My Title5",
          "description": "Please wake up early!",
          "tag": "personal",
          "date": "2022-02-04T04:31:29.984Z",
          "__v": 0
        },
        {
          "_id": "61fcac21a7c9e88b2df033ac",
          "user": "61fc04e11b1478fcd9287ab2",
          "title": "My Title6",
          "description": "Please wake up early!",
          "tag": "personal",
          "date": "2022-02-04T04:31:29.984Z",
          "__v": 0
        },
        {
          "_id": "61fcac21a7c9e88b2df033ac",
          "user": "61fc04e11b1478fcd9287ab2",
          "title": "My Title7",
          "description": "Please wake up early!",
          "tag": "personal",
          "date": "2022-02-04T04:31:29.984Z",
          "__v": 0
        },
        {
          "_id": "61fcac2ca7c9e88b2df033af",
          "user": "61fc04e11b1478fcd9287ab2",
          "title": "My Title8",
          "description": "Please wake up early!",
          "tag": "personal",
          "date": "2022-02-04T04:31:40.546Z",
          "__v": 0
        }
      ]
      const [notes, setNotes] = useState(notesInitial)
    return (
        <NoteContext.Provider value={{notes,setNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}



export default NoteState;