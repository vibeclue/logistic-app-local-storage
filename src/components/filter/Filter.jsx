import { useState } from 'react';
import { usePairs } from '../../PairsContext';
import search from '../../img/tabler_search.png'
import calendar from '../../img/mdi_calendar.png'
import './filter.css'



const ClearIcon = () => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ cursor: 'pointer' }}
  >
    <path
      d="M9 3L3 9M3 3l6 6"
      stroke="#999"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);


function Filter() {

    const { filterBy, setFilterBy } = usePairs();

    return (
        <div className='filter-container'>
            <span id='search'>Поиск</span>
            <div className="filter-row">
                <div className="filter-input">
                    <input
                        type="text"
                        placeholder='Тягач'
                        value={filterBy.truck || ''}
                        onChange={e =>
                            setFilterBy(prev => ({ ...prev, truck: e.target.value }))
                        }
                    />
                    <img src={search} alt="иконка поиска" />
                </div>
                <div className="filter-input">
                    <input
                        type="text"
                        placeholder='Прицеп'
                        value={filterBy.trailer || ''}
                        onChange={e =>
                            setFilterBy(prev => ({ ...prev, trailer: e.target.value }))
                        }
                    />
                    <img src={search} alt="иконка поиска" />
                </div>   
                <div className="filter-input date-input-wrapper">
                <input
                    type="date"
                    placeholder="Дата"
                    value={filterBy.date || ''}
                    onChange={e =>
                        setFilterBy(prev => ({ ...prev, date: e.target.value }))
                    }
                />
                <img src={calendar} alt="календарь" className="calendar-icon"/>
                    {filterBy.date && (
                        <span
                            className="clear-date"
                            onClick={() => setFilterBy(prev => ({ ...prev, date: '' }))}
                        >
                        <ClearIcon />
                        </span>
                    )}
                </div>        
            </div>
            
        </div>
    );
}

export default Filter;