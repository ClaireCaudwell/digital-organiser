import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Header } from "../components/Header";
import { AddNote } from "../components/AddNote";
import { NoteList } from "../components/NoteList";
import { getNotes } from "../reducer/note";

export const NotesPage = () => {
    const dispatch = useDispatch();
    const userId = useSelector((store) => store.user.login.userId);

    useEffect(() => {
        dispatch(getNotes(userId));
    }, [dispatch, userId]);

    return (
        <>
            <Header />
            <main>
                <AddNote />
                <NoteList />
            </main>
        </>
    );
};