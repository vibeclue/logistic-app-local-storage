import { useState } from 'react';
import Pair from '../pair/Pair'
import './pairTable.css'

const initialPairs = [
  {id: 0,
    truck: "КАМАЗ 5490",
    trailer: "Тонар 9523",
    date: "05.11.2025",
    from: "Москва",
    to: "Санкт-Петербург",
    cargo: "Контейнер 20ft",
    comment: "Срочная доставка, без простоев111",
    flag: false,
  },
  {
    id: 1,
    truck: "Volvo FH500",
    trailer: "Schmitz Cargobull",
    date: "04.11.2025",
    from: "Казань",
    to: "Екатеринбург",
    cargo: "Паллеты",
    comment: "-",
    flag: false,
  },
  {
    id: 2,
    truck: "MAN TGX",
    trailer: "Krone SD",
    date: "03.11.2025",
    from: "Новосибирск",
    to: "Омск",
    cargo: "Сыпучие грузы",
    comment: "Требуется тент",
    flag: true,
  },
];

function PairTable() {

  const [pairs, setPairs] = useState(initialPairs)

  function deleteHandler(id){
    if(confirm('Точно хочешь удалить пару?')) {
      setPairs(pairs.filter(pair => pair.id !== id)) // отфильтровал все пары кроме той, что с переданным id
    }
  }

  function toggleFlagHandler(id) {
    setPairs(prev => prev.map(p => p.id === id ? {...p, flag: !p.flag } : p))
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