import Header from './components/header/Header';
import AddPair from './components/add-pair/AddPair';
import Filter from './components/filter/Filter';
import PairTable from './components/pair-table/PairTable';
import { PairsContext } from './PairsContext';
import { useReducer } from 'react';
import pairsReducer from './PairsReducer';
import './App.css';

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

function App() {

    const [pairs, dispatch] = useReducer(pairsReducer, initialPairs)

  return (
    <>
    <PairsContext.Provider value={{pairs, dispatch}}>
      <Header />
      <AddPair />
      <Filter />
      <PairTable />
    </PairsContext.Provider>  
    </>
  )
}

export default App
