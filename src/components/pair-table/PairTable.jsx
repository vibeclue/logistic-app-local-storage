import { useContext } from 'react';
import { PairsContext } from '../../PairsContext';
import Pair from '../pair/Pair'
import './pairTable.css'


function PairTable() {

  const { pairs, dispatch } = useContext(PairsContext);

  function deleteHandler(id){
    if(confirm('Точно хочешь удалить пару?')) {
      dispatch({
        type: 'deleted',
        id: id
      });
    }  
  }

  function toggleFlagHandler(id) {
      dispatch({
        type: 'toggledFlag',
        id: id
      });
    // setPairs(prev => prev.map(p => p.id === id ? {...p, flag: !p.flag } : p))
  }

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
                  deletePair={(id) => deleteHandler(id)} // получаю id из Pair.jsx и передаю в свою ф-цию
                  toggleFlag={(id) => toggleFlagHandler(id)}
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