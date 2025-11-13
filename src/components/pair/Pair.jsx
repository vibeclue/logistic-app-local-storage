import { useState } from 'react';
import { usePairs } from '../../PairsContext.jsx';
import editImg from '../../img/edit.png'
import deleteImg from '../../img/delete.png'
import flagOff from '../../img/tabler_flag.png'
import flagOn from '../../img/tabler_flag_on.png'
import './pair.css' 


function Pair({ pair, index }){

    const { dispatchPairs } = usePairs();
    const [isEditing, setIsEditing] = useState(false);
    const [editedPair, setEditedPair] = useState(pair);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditedPair({ ...editedPair, [name]: value });
    };

    const handleSave = () => {
        dispatchPairs({
        type: 'edited',
        editPair: editedPair,
        });
        setIsEditing(false);
    };

    return (
        <tr className={index % 2 === 0 ? 'even-row' : 'odd-row'}>
        {isEditing ? (
            <>
            <td><input name="truck" value={editedPair.truck} onChange={handleChange} /></td>
            <td><input name="trailer" value={editedPair.trailer} onChange={handleChange} /></td>
            <td><input type="date" name="date" value={editedPair.date} onChange={handleChange} /></td>
            <td><input name="from" value={editedPair.from} onChange={handleChange} /></td>
            <td><input name="to" value={editedPair.to} onChange={handleChange} /></td>
            <td><input name="cargo" value={editedPair.cargo} onChange={handleChange} /></td>
            <td><input name="comment" value={editedPair.comment} onChange={handleChange} /></td>
            <td className="options-cell-edit-1">
                <button onClick={handleSave} className="btn-edit-save">✓</button>
                <button onClick={() => setIsEditing(false)} className="btn-edit-cancel">×</button>
            </td>
            </>
        ) : (
            <>
            <td>{pair.truck}</td>
            <td>{pair.trailer}</td>
            <td>{pair.date}</td>
            <td>{pair.from}</td>
            <td>{pair.to}</td>
            <td>{pair.cargo}</td>
            <td className="comment-cell">{pair.comment}</td>
            <td className="options-cell">
                <img
                src={editImg}
                alt="Редактировать"
                className="icon"
                onClick={() => setIsEditing(true)}
                />
                <img
                src={deleteImg}
                onClick={() => {
                    if (confirm('Точно хочешь удалить пару?')) {
                    dispatchPairs({ type: 'deleted', id: pair.id });
                    }
                }}
                alt="Удалить"
                className="icon"
                />
                <img
                src={pair.flag ? flagOn : flagOff}
                onClick={() =>
                    dispatchPairs({
                    type: 'toggledFlag',
                    id: pair.id,
                    })
                }
                alt="Обычное"
                className={`icon ${pair.flag ? 'flag-on' : ''}`}
                />
            </td>
            </>
        )}
        </tr>
  );
}

export default Pair;