import { usePairs } from '../../PairsContext.jsx';
import Pair from '../pair/Pair'
import './pairTable.css'


function PairTable() {

  const { pairs } = usePairs();

  return (
    <div className="table-container">
      <table className="pair-table">
        <thead>
          <tr>
            <th>Тягач</th>
            <th>Прицеп</th>
            <th>Дата</th>
            <th>Откуда</th>
            <th>Куда</th>
            <th>Вид груза</th>
            <th>Комментарий</th>
            <th>Опции</th>
          </tr>
        </thead>
        <tbody>
          {pairs.length > 0 ? (
            pairs.map((pair, index) => (
                <Pair 
                  pair={pair}
                  index={index}
                  key={pair.id}
                />
            ))
          ) : (  
              <tr>
                <td colSpan="8" className="empty-table">
                   Нет активных пар 😴
                </td>
              </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default PairTable;