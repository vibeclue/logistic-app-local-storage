import { createContext, useContext, useReducer, useState } from "react";
import { pairsReducer, trucksReducer, trailersReducer } from './PairsReducer';


export const PairsContext = createContext();
export const TrucksContext = createContext();
export const TrailersContext = createContext();


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

const initialTrucks = [
  { id: 1, number: "А123БВ77"},
  { id: 2, number: "Е456КХ99"},
];

const initialTrailers = [
  { id: 1, number: "ТН1234"},
  { id: 2, number: "ШМ5678"},
];

export function PairsProvider({ children }) {

  const [pairs, dispatchPairs] = useReducer(pairsReducer, initialPairs);
  const [trucks, dispatchTrucks] = useReducer(trucksReducer, initialTrucks);
  const [trailers, dispatchTrailers] = useReducer(trailersReducer, initialTrailers);

  const [modalMainIsOpen, setModalMainIsOpen] = useState(false);

  const [filterBy, setFilterBy] = useState('');

  return (
    <PairsContext.Provider value={ 
      {
        pairs, 
        dispatchPairs,  
        modalMainIsOpen,
        setModalMainIsOpen,
        filterBy,
        setFilterBy
        }
    }>
        <TrucksContext.Provider value={{ trucks, dispatchTrucks }}>
            <TrailersContext.Provider value={{ trailers, dispatchTrailers }}>
                { children }
            </TrailersContext.Provider>
        </TrucksContext.Provider>
    </PairsContext.Provider>  
  )
}

export const usePairs = () => useContext(PairsContext);
export const useTrucks = () => useContext(TrucksContext);
export const useTrailers = () => useContext(TrailersContext);
