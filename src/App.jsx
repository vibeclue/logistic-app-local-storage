import Header from './components/header/Header';
import AddPair from './components/add-pair/AddPair';
import Filter from './components/filter/Filter';
import PairTable from './components/pair-table/PairTable';
import { PairsProvider } from './PairsContext';
import './App.css';


function App() {

  return (
    <>
    <PairsProvider>
      <Header />
      <AddPair />
      <Filter />
      <PairTable />
    </PairsProvider>  
    </>
  )
}

export default App
