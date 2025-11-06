import editImg from '../../img/edit.png'
import deleteImg from '../../img/delete.png'
import flagOff from '../../img/tabler_flag.png'
import flagOn from '../../img/tabler_flag_on.png'
import './pair.css' 


function Pair({truck, trailer, date, from, to, cargo, comment, flag}){
    return(
        <tr className={2 % 2 === 0 ? "even-row" : "odd-row"}>
            <td>{truck}</td>
            <td>{trailer}</td>
            <td>{date}</td>
            <td>{from}</td>
            <td>{to}</td>
            <td>{cargo}</td>
            <td className="comment-cell">{comment}</td>
            <td className="options-cell">
                <img src={editImg} alt="Редактировать" className="icon" />
                <img src={deleteImg} alt="Удалить" className="icon" />
                <img src={flag ? flagOn: flagOff} alt="Обычное" className={`icon ${flag ? 'flag-on' : ''}`} />
            </td>
        </tr>
    );
}

export default Pair;