import './App.css'
import SearchBar from './components/SearchBar';
import Table from './components/Table';
import { useState } from 'react';


function App() {

  const [data, setData] = useState([])
  const [refresh, setRefresh] = useState(true)

  // setInterval(console.log('here'),1)
  
  const Header = [
    {label:'id', key:1}, 
    {label:'tag1', key:2}, 
    {label:'tag2', key:3}, 
    {label:'tag3', key:4}, 
    {label:'metric1', key:5},
    {label:'metric2', key:6}
  ]

  return (
    <div className="App">
      <SearchBar Header={Header} setData={setData} setRefresh={setRefresh}/>
      <Table Header={Header} data={data} setData={setData} refresh={refresh} setRefresh={setRefresh}/>
    </div>
  );
}

export default App;
