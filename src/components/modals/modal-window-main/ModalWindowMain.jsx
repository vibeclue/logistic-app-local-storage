import { useState } from 'react';
import { useTrucks, useTrailers } from '../../../PairsContext.jsx';
import { usePairs } from '../../../PairsContext.jsx';
import './modalWindowMain.css'


function ModalWindowMain() {

    const { modalMainIsOpen, setModalMainIsOpen, dispatchPairs } = usePairs();

    const { trucks } = useTrucks();
    const { trailers } = useTrailers();

    const [formData, setFormData] = useState({
        truck: '',
        trailer: '',
        date: '',
        from: '',
        to: '',
        cargo: '',
        comment: '',
    });

    if (!modalMainIsOpen) return null;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
  };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.truck || !formData.trailer) {
            alert('Выбери грузовик и прицеп!');
            return;
        }


        const dateToUse = convertDate(formData.date);

        dispatchPairs({
        type: 'added',
        newPair: {
            ...formData,
            id: Date.now(),
            date: dateToUse,
            flag: false,
        },
        });

        setModalMainIsOpen(false);

        // очистка формы (по желанию)
        setFormData({
        truck: '',
        trailer: '',
        date: '',
        from: '',
        to: '',
        cargo: '',
        comment: '',
        });
    };

    return (
        <div className={`modal-overlay ${modalMainIsOpen ? 'open' : ''}`} onClick={() => setModalMainIsOpen(false)}>
            <div className="modal-main-content" onClick={e => e.stopPropagation()}>
                <div className="modal-main-header">
                    <h4>Добавить пару</h4>
                </div>
                <div className="modal-main-body">
                    <form className="modal-main-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="truck">
                                Грузовик <span className='required'>*</span>
                            </label>
                                <select id="truck" 
                                        name="truck" 
                                        value={formData.truck}
                                        onChange={handleChange}
                                        className="custom-select">
                                        <option value="">Тягач</option>        
                                        {trucks.map(truck => (
                                        <option key={truck.id} value={truck.number}>
                                            {truck.number}
                                        </option>
                                        ))}
                                </select>
                        </div>

                        <div className="form-group">
                            <label htmlFor="trailer">
                                Прицеп <span className='required'>*</span>
                            </label>
                            <select id="trailer" 
                                    name="trailer" 
                                    value={formData.trailer}
                                    onChange={handleChange}
                                    className="custom-select">
                                    <option value="">Прицеп</option>       
                                    {trailers.map(trailer => (
                                        <option key={trailer.id} value={trailer.number}>
                                            {trailer.number}
                                        </option>
                                    ))}
                            </select>
                        </div>

                        <div className="form-group" id="date-group">
                            <label htmlFor="date">Дата</label>
                            <input type="date" 
                                    id="date" 
                                    name="date"
                                    value={formData.date ? convertDate(formData.date).iso : convertDate().iso} 
                                    onChange={handleChange} 
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="from">Откуда</label>
                            <input type="text" 
                                   id="from" 
                                   name="from" 
                                   value={formData.from}
                                   onChange={handleChange}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="to">Куда</label>
                            <input type="text" 
                                   id="to" 
                                   name="to" 
                                   value={formData.to}
                                   onChange={handleChange}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="cargo">Груз</label>
                            <input type="text" 
                                   id="cargo" 
                                   name="cargo" 
                                   value={formData.cargo}
                                   onChange={handleChange}
                            />
                        </div>

                        <div className="form-group" id="comment-group">
                            <label htmlFor="comment">Комментарий</label>
                            <input type="text" 
                                   id="comment" 
                                   name="comment" 
                                   value={formData.comment}
                                   onChange={handleChange}
                            />
                        </div>
                    </form>
                </div>

                <div className="modal-main-footer">
                    <button type="button" 
                            className="btn-cancel"
                            onClick={()=> setModalMainIsOpen(false)}>Отмена</button>
                    <button type="submit" 
                            className="btn-confirm"
                            onClick={handleSubmit}>Принять</button>
                </div>
            </div>
        </div>
    );
}

function convertDate(date) {
    let d = date ? new Date(date) : new Date();

    const dd = String(d.getDate()).padStart(2, '0');
    const mm = String(d.getMonth() + 1).padStart(2, '0');
    const yyyy = d.getFullYear();

    return {
        display: `${dd}.${mm}.${yyyy}`,     // для показа в таблице, span и т.п.
        iso: `${yyyy}-${mm}-${dd}`          // для <input type="date">
    };
}

export default ModalWindowMain;