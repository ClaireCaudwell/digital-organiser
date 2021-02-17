import styled from "styled-components";
import { NotesPage } from "../pages/NotesPage";

import { MainContainer } from "./Schedule";
import { BasicButton } from "./GlobalStyle";

export const MainNotesContainer = styled(MainContainer)`
    flex-direction: column;
`;

export const AddNoteSection = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: 25px 0;
    &.note-list{
        margin: 0;
        @media(min-width: 600px){
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            border: 1px solid red;
        }
    }
`;

export const NoteContainer = styled(AddNoteSection)`
    width: 250px;
    height: 250px;
    padding: 10px;
    margin: 0 0 10px 0;
    background-color: ${props => props.theme[props.noteColour].background};
    @media(min-width: 600px){
        margin: 0 20px 20px 20px;
    }
`;

/* ... & X button styling */
export const NoteButtonContainer = styled.div`
    display: flex;
    align-self: flex-end;
    justify-content: center;
    margin-bottom: 10px;
`;

export const NoteButton = styled(BasicButton)`
    text-align: center;
    font-size: 20px;
    align-self: flex-end;
    border-radius: 0;
    color: #313131;
    transition: none;
    outline: none;
    background-color: ${props => props.theme[props.buttonColour].background};
    &:hover{
        color: #000;
    }
`;

// Text area
export const NoteTextArea = styled.textarea`
    height: 200px;
    width: 100%;
    background-color :#C7F5B1;
    border: none;
    overflow: hidden;
    resize: none;
    font-size: 16px;
    font-family: 'Open Sans', sans-serif;
    background-color: ${props => props.theme[props.className].background};
    &:focus{
        outline: none;
    }
`;

// Note colour picker
export const DropdownColourMenu = styled.div`
    position: relative;
    display: inline-block;
`;

export const ColourSquareContainer = styled.div`
    width: 250px;
    display: none;
    position: absolute;
    z-index: 1;
    top: -10px;
    left: -125px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    display: flex;
`;

export const ColourSquare = styled.button`
    width: 30%;
    height: 40px;
    border: none;
    font-size: 18px;
    cursor: pointer;
    outline: none;
    background-color: ${props => props.theme[props.noteColour].background};
    &:hover{
        background-color: ${props => props.theme[props.hoverColour].background};
    }
`;

export default NotesPage;