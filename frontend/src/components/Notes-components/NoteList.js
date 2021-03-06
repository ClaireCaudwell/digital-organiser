import React from "react";
import { useSelector } from "react-redux";

import { Note } from "./Note";
import { AddNoteSection } from "../../styled-components/NotesPage";

export const NoteList = () => {
    const listOfNotes = useSelector((store) => store.note.notesArray);

    return (
        <AddNoteSection className="note-list">
            {listOfNotes.map(notes => (
                <Note key={notes._id} noteItem={notes}/>
            ))}
        </AddNoteSection>
    );
};