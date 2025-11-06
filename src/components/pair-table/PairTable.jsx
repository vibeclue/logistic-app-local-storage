import Pair from '../pair/Pair'
import './pairTable.css'

function PairTable() {
  return (
    <div className="table-container">
      <table className="pair-table">
        <thead>
          <tr>
            <th>Тягач</th>
            <th>Прицеп</th>
            <th>Дата сцепки</th>
            <th>Откуда</th>
            <th>Куда</th>
            <th>Вид груза</th>
            <th>Комментарий</th>
            <th>Опции</th>
          </tr>
        </thead>
        <tbody>
            <Pair 
                truck="КАМАЗ 5490"
                trailer="Тонар 9523"
                date="05.11.2025"
                from="Москва"
                to="Санкт-Петербург"
                cargo="Контейнер 20ft"
                comment="Срочная доставка, без простоев111"
                flag={false}
            />

            <Pair 
                truck="Volvo FH500"
                trailer="Schmitz Cargobull"
                date="04.11.2025"
                from="Казань"
                to="Екатеринбург"
                cargo="Паллеты"
                comment="-"
                flag={false}
            />

            <Pair 
                truck="MAN TGX"
                trailer="Krone SD"
                date="03.11.2025"
                from="Новосибирск"
                to="Омск"
                cargo="Сыпучие грузы"
                comment="Требуется тент"
                flag={true}
            />
        </tbody>
      </table>
    </div>
  );
}

export default PairTable;