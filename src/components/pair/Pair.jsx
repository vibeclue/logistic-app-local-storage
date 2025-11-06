import editImg from '../../img/edit.png'
import deleteImg from '../../img/delete.png'
import flagOff from '../../img/tabler_flag.png'
import flagOn from '../../img/tabler_flag_on.png'
import './pair.css' 


function Pair({ pair, index, deletePair, toggleFlag }){
    return(
        <tr className={index % 2 === 0 ? "even-row" : "odd-row"}>
            <td>{pair.truck}</td>
            <td>{pair.trailer}</td>
            <td>{pair.date}</td>
            <td>{pair.from}</td>
            <td>{pair.to}</td>
            <td>{pair.cargo}</td>
            <td className="comment-cell">{pair.comment}</td>
            <td className="options-cell">
                <img src={editImg} 
                     alt="Редактировать" 
                     className="icon" 
                />
                <img src={deleteImg} 
                     onClick={() => deletePair(pair.id)}
                     alt="Удалить" 
                     className="icon" 
                />
                <img src={pair.flag ? flagOn: flagOff} 
                     onClick={() => toggleFlag(pair.id)}
                     alt="Обычное" 
                     className={`icon ${pair.flag ? 'flag-on' : ''}`} 
                />
            </td>
        </tr>
    );
}

export default Pair;