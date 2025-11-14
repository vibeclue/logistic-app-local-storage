import { usePairs } from '../../PairsContext.jsx';
import Pair from '../pair/Pair'
import './pairTable.css'


function PairTable() {

  const { pairs, filterBy } = usePairs();

const filteredPairs = pairs.filter(pair => {
  const truckMatch = pair.truck.toLowerCase()
    .includes((filterBy.truck || '').toLowerCase());

  const trailerMatch = pair.trailer.toLowerCase()
    .includes((filterBy.trailer || '').toLowerCase());

  let dateMatch = true;

  if (filterBy.date) {
    const filterDate = normalizeDate(filterBy.date);
    const pairDate = normalizeDate(pair.date);

    dateMatch = filterDate === pairDate;
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

function normalizeDate(dateStr) {
  if (!dateStr) return null;

  // Если это объект с display/iso
  if (typeof dateStr === 'object') {
    if (dateStr.iso) return normalizeDate(dateStr.iso);
    if (dateStr.display) return normalizeDate(dateStr.display);
    return null;
  }

  // Если строка input: yyyy-mm-dd
  if (dateStr.includes('-')) {
    const [y, m, d] = dateStr.split('-');
    return `${d.padStart(2, '0')}.${m.padStart(2, '0')}.${y}`;
  }

  // Если строка таблицы: dd.mm.yyyy
  if (dateStr.includes('.')) {
    const [d, m, y] = dateStr.split('.');
    return `${d.padStart(2, '0')}.${m.padStart(2, '0')}.${y}`;
  }

  return null;
}

export default PairTable;