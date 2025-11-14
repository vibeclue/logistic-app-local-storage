import { createContext, useContext, useReducer, useState, useEffect } from "react";
import { pairsReducer, trucksReducer, trailersReducer } from './PairsReducer';


export const PairsContext = createContext();
export const TrucksContext = createContext();
export const TrailersContext = createContext();


const initialPairs = localStorage.getItem('pairs') ? JSON.parse(localStorage.getItem('pairs')) : [];

const initialTrucks = localStorage.getItem('trucks') ? JSON.parse(localStorage.getItem('trucks')) : [];

const initialTrailers = localStorage.getItem('trailers') ? JSON.parse(localStorage.getItem('trailers')) : [];

export function PairsProvider({ children }) {

  const [pairs, dispatchPairs] = useReducer(pairsReducer, initialPairs);
  const [trucks, dispatchTrucks] = useReducer(trucksReducer, initialTrucks);
  const [trailers, dispatchTrailers] = useReducer(trailersReducer, initialTrailers);

  const [modalMainIsOpen, setModalMainIsOpen] = useState(false);

  const [filterBy, setFilterBy] = useState('');

  useEffect(() => {
    localStorage.setItem('pairs', JSON.stringify(pairs));
  }, [pairs]); // каждый раз когда меняется состояние pairs происходит рирендер того, что находится в useEffect

  useEffect(() => {
    localStorage.setItem('trucks', JSON.stringify(trucks));
  }, [trucks]);

  useEffect(() => {
    localStorage.setItem('trailers', JSON.stringify(trailers));
  }, [trailers]);

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
