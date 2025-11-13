import { useState, useEffect } from 'react';
import { useTrucks, useTrailers } from '../../../PairsContext';
import './modalWindowHead.css';

function ModalWindowHead({ isOpen, onClose, type }) {
  const [isAdding, setIsAdding] = useState(false);
  const [newValue, setNewValue] = useState('');

  const { trucks, dispatchTrucks } = useTrucks();
  const { trailers, dispatchTrailers } = useTrailers();

  const items = type === 'truck' ? trucks : trailers;
  const dispatch = type === 'truck' ? dispatchTrucks : dispatchTrailers;
  const title = type === 'truck' ? 'Тягачи' : 'Прицепы';

  const startAdding = () => setIsAdding(true);
  const cancelAdding = () => {
    setNewValue('');
    setIsAdding(false);
  };

  const handleAdd = () => {
    if (newValue.trim()) {
      dispatch({
        type: 'ADD',
        payload: { id: Date.now(), number: newValue.trim() }
      });
      setNewValue('');
      setIsAdding(false);
    }
  };

    useEffect(() => {
    if (isOpen) {
      setIsAdding(false);
      setNewValue('');
    }
    }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>

        {/* ЗАГОЛОВОК */}
        <div className="modal-header">
          <div className="header-left">


            {/* ТЕКСТ: Тягачи → инпут */}
            {isAdding ? (
              <div className="input-wrapper">
                <input
                  type="text"
                  value={newValue}
                  onChange={e => setNewValue(e.target.value)}
                  onKeyDown={e => e.key === 'Enter' && handleAdd()}
                  placeholder="Введите номер..."
                  autoFocus
                />
              </div>
            ) : (
              <h2>{title}</h2>
            )}
            {/* КРУГ: + → × | и ГАЛОЧКА */}
            <div className="action-buttons">
              <button
                className={`circle-btn ${isAdding ? 'cancel' : 'add'}`}
                onClick={isAdding ? cancelAdding : startAdding}
              >
                {isAdding ? '×' : '+'}
              </button>

              {isAdding && (
                <button className="circle-btn confirm" onClick={handleAdd}>
                  ✓
                </button>
              )}
            </div>
          </div>

          <button className="close-btn" onClick={onClose}>×</button>
        </div>

        {/* СПИСОК */}
        <div className="modal-list">
          {items.length === 0 ? (
            <p className="empty">Список пуст</p>
          ) : (
            <ul>
              {items.map(item => (
                <li key={item.id}>{item.number}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default ModalWindowHead;