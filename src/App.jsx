import Header from './components/header/Header';
import AddPair from './components/add-pair/AddPair';
import Filter from './components/filter/Filter';
import PairTable from './components/pair-table/PairTable';
import { PairsProvider } from './PairsContext';
import { useState } from 'react';
import './App.css';
import ModalWindowMain from './components/modals/modal-window-main/ModalWindowMain.jsx'
import ModalWindowHead from './components/modals/modal-window-head/ModalWindowHead'


function App() {

  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState(null); // 'truck' | 'trailer'

  const openModal = (type) => {
    setModalType(type);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalType(null);
  };

  return (
    <>
    <PairsProvider>
      <Header openModal={openModal}/>
      <ModalWindowHead
        isOpen={modalOpen}
        onClose={closeModal}
        type={modalType}
      />
      <ModalWindowMain/>
      <AddPair />
      <Filter />
      <PairTable />
    </PairsProvider>  
    </>
  )
}

export default App
