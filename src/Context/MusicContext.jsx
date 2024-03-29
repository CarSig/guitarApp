import { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

const initialState = {
    note: "C",
    chord: "major",
    scale: "major",
    shape: "C",
    selectorType: "shape",
    selectorChord: "major",
    selectorScale: "major",
    selectorNote: "C",
    selectorShape: "C",
    shapeCoordinates: { 1: null, 2: null, 3: null, 4: null, 5: null, 6: null },
    playNotes: [],
    accidental: "sharp",



}

export const MusicContext = createContext(initialState);

export const MusicContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    function setNote(note) {
        dispatch({
            type: "SET_NOTE",
            payload: note
        })
    }

    function setChord(chord) {
        dispatch({
            type: "SET_CHORD",
            payload: chord
        })
    }

    function setScale(scale) {
        dispatch({
            type: "SET_SCALE",
            payload: scale
        })
    }

    function setShape(shape) {
        dispatch({
            type: "SET_SHAPE",
            payload: shape
        })
    }
    function setRoot(root) {
        dispatch({
            type: "SET_ROOT",
            payload: root
        })
    }

    function setSelector(selector) {
        dispatch({
            type: "SET_SELECTOR",
            payload: selector
        })
    }
    function setSelectorChord(chord) {
        dispatch({
            type: "SET_SELECTOR_CHORD",
            payload: chord
        })
    }
    function setSelectorScale(scale) {
        dispatch({
            type: "SET_SELECTOR_SCALE",
            payload: scale
        })
    }
    function setSelectorNote(note) {
        dispatch({
            type: "SET_SELECTOR_NOTE",
            payload: note
        })
    }
    function setSelectorType(type) {
        dispatch({
            type: "SET_SELECTOR_TYPE",
            payload: type
        })
    }
    function setSelectorShape(shape) {
        dispatch({
            type: "SET_SELECTOR_SHAPE",
            payload: shape
        })
    }

    function setShapeCoordinates(shapeCoordinates) {
        dispatch({
            type: "SET_SHAPE_COORDINATES",
            payload: shapeCoordinates
        })
    }
    function setPlayNotes(playNotes) {
        dispatch({
            type: "SET_PLAY_NOTES",
            payload: playNotes
        })

    }
    function setAccidental(accidental) {
        dispatch({
            type: "SET_ACCIDENTAL",
            payload: accidental
        })
    }
    return (
        <MusicContext.Provider value={{
            chord: state.chord,
            setChord,
            note: state.note,
            setNote,
            scale: state.scale,
            setScale,
            shape: state.shape,
            setShape,
            root: state.root,
            setRoot,
            selector: state.selector,
            setSelector
            , selectorChord: state.selectorChord,
            setSelectorChord,
            selectorScale: state.selectorScale,
            setSelectorScale,
            selectorNote: state.selectorNote,
            setSelectorNote,
            selectorType: state.selectorType,
            setSelectorType
            , selectorShape: state.selectorShape,
            setSelectorShape
            , shapeCoordinates: state.shapeCoordinates
            , setShapeCoordinates,
            playNotes: state.playNotes,
            setPlayNotes, accidental: state.accidental,
            setAccidental


        }}>{children}</MusicContext.Provider>
    )
}


