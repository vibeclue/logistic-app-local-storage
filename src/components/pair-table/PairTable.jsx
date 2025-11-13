import { usePairs } from '../../PairsContext.jsx';
import Pair from '../pair/Pair'
import './pairTable.css'


function PairTable() {

  const { pairs, filterBy } = usePairs();

  const filteredPairs = pairs.filter(pair => {
    const truckMatch = pair.truck.toLowerCase().includes((filterBy.truck || '').toLowerCase());
    const trailerMatch = pair.trailer.toLowerCase().includes((filterBy.trailer || '').toLowerCase());

    let dateMatch = true;
    if (filterBy.date) {
      const [year, month, day] = filterBy.date.split('-');
      const formatted = `${day}.${month}.${year}`; 
      dateMatch = pair.date === formatted;
    }

    return truckMatch && trailerMatch && dateMatch;
  });

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
          {filteredPairs.length > 0 ? (
            filteredPairs.map((pair, index) => (
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