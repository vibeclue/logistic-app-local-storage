import { usePairs } from "../../PairsContext";
import "./addPair.css";

function AddPair() {

    const { setModalMainIsOpen } = usePairs();

    return (
        <div className="container-add-pair">
            <span className="curr-pair-text">Существующие пары</span>
            <button className="add-pair-button" onClick={() => setModalMainIsOpen(true)}>Добавить пару</button>
        </div>
    );
}

export default AddPair;