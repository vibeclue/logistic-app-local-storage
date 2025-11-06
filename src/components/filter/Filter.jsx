import './filter.css'
import search from '../../img/tabler_search.png'
import calendar from '../../img/mdi_calendar.png'

function Filter() {
    return (
        <div className='filter-container'>
            <span id='search'>Поиск</span>
            <div className="filter-row">
                <div className="filter-input">
                    <input type="text" placeholder='Тягач' />
                    <img src={search} alt="иконка поиска" />
                </div>
                <div className="filter-input">
                    <input type="text" placeholder='Прицеп' />
                    <img src={search} alt="иконка поиска" />
                </div>   
                <div className="filter-input">
                    <input type="text" placeholder='Дата' />
                    <img src={calendar} alt="иконка поиска" />
                </div>          
            </div>
            
        </div>
    );
}

export default Filter;