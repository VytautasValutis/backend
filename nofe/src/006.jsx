import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import './App.scss';
import Create from './Components/006/Create';
import List from './Components/006/List';
import create, { read, destroy } from './Functions/localStorage';

const KEY = 'wishList';

function App() {

  const [list, setList] = useState(null);
  const [lastRefresh, setLastRefresh] = useState(Date.now());
  const [createData, setCreateData] = useState(null);
  const [deleteData, setDeleteData] = useState(null);
  const [modalData, setModalData] = useState(null);

  useEffect (() => {
    // loadingo imitacija
    setTimeout(() =>  setList(read(KEY)), 1000);
  }, [lastRefresh]);

  useEffect(() => {
    if (null === createData) {
      return;
    }
    create(KEY, createData);
  }, [createData]);

  useEffect(() => {
    if (null === deleteData) {
      return;
    }
    // tipo kliento
    setList(l => l.filter(d => deleteData.id !== d.id));

    // tipo serverio
    destroy(KEY, deleteData.id);
    setLastRefresh(Date.now);
  }, [createData]);

  return (
    <div className="container">
      <div className="row">
        <div className="col-4">
          <Create setCreateData={setCreateData} />
        </div>
        <div className="col-8">
          <List list={list} setDeleteData={setDeleteData} setModalData={setModalData}/>
        </div>
      </div>
    </div>
  );
}

export default App;
