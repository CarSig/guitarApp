import { useContext } from "react";
import { getScale, getCAGEDshape, Chord } from "../musicTheory";
import { MusicContext } from "../Context/MusicContext";

const useMusicGrouping = () => {
    const { setScale, selectorScale, selectorNote, setChord, selectorChord, setShape, selectorShape, setAllFretsMap, allFretsMap, shapeCoordinates, setShapeCoordinates } = useContext(MusicContext);

    const handleScale = () => {
        const notes = getScale(selectorNote, selectorScale);
        const name = selectorNote + " " + selectorScale;
        setScale({ name, notes })
    }

    const handleChord = () => {
        const notes = Chord[selectorChord](selectorNote)
        const name = selectorNote + " " + selectorChord;
        setChord({ name, notes });
    };

    // const handleShape = () => {
    //     const CAGEDshape = getCAGEDshape(selectorNote, selectorShape);
    //     setShape({ frets: CAGEDshape, selectorNote, selectorShape })
    // }


    const handleShape = () => {
        const CAGEDshape = getCAGEDshape(selectorNote, selectorShape);
        setShapeCoordinates(CAGEDshape);
        // // console.log("CAGEDshape", JSON.stringify(CAGEDshape))
        // const stringNumbers = [6, 5, 4, 3, 2, 1];
        // // set true the fields that are active

        // let fretBoard = allFretsMap


        // setAllFretsMap(fretBoard)
        // for (let num of stringNumbers) {
        //     const currentString = allFretsMap[num];
        //     const fretActive = currentString[CAGEDshape[num]];
        //     if (CAGEDshape[num]) {

        //         setAllFretsMap({ ...fretBoard, [num]: { ...currentString, [fretActive]: true } })

        //     }


        // }

    }
    return { handleScale, handleChord, handleShape };
}


export default useMusicGrouping;













