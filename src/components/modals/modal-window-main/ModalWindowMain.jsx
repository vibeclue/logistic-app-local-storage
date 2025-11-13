import { useTrucks, useTrailers } from '../../../PairsContext.jsx';
import { usePairs } from '../../../PairsContext.jsx';
import './modalWindowMain.css'


function ModalWindowMain({modal}) {

    const { modalMainIsOpen, setModalMainIsOpen } = usePairs();

    const { trucks } = useTrucks();
    const { trailers } = useTrailers();

    if (!modalMainIsOpen) return null;

    return (
        <div className={`modal-overlay ${modalMainIsOpen ? 'open' : ''}`}>
            <div className="modal-main-content">
                <div className="modal-main-header">
                    <h4>Добавить пару</h4>
                </div>
                <div className="modal-main-body">
                    <form className="modal-main-form">
                        <div className="form-group">
                            <label htmlFor="truck">
                                Грузовик <span className='required'>*</span>
                            </label>
                                <select id="truck" name="truck" defaultValue="Выбор" className="custom-select">
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
                            <select id="trailer" name="trailer" defaultValue="Выбор" className="custom-select">
                                {trailers.map(trailer => (
                                    <option key={trailer.id} value={trailer.number}>
                                        {trailer.number}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className="form-group" id="date-group">
                            <label htmlFor="date">Дата</label>
                            <input type="date" id="date" name="date" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="from">Откуда</label>
                            <input type="text" id="from" name="from" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="to">Куда</label>
                            <input type="text" id="to" name="to" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="cargo">Груз</label>
                            <input type="text" id="cargo" name="cargo" />
                        </div>

                        <div className="form-group" id="comment-group">
                            <label htmlFor="comment">Комментарий</label>
                            <input type="text" id="comment" name="comment" />
                        </div>
                    </form>
                </div>

                <div className="modal-main-footer">
                    <button type="button" 
                            className="btn-cancel"
                            onClick={()=> setModalMainIsOpen(false)}>Отмена</button>
                    <button type="submit" className="btn-confirm">Принять</button>
                </div>
            </div>
        </div>
    );
}

export default ModalWindowMain;