import React,{useState,useEffect} from 'react';
import axios from 'axios';
import './App.css';
import CharacterDisplay from './Components/CharacterDisplay';
import Header from './Components/Header';
import SearchBar from './Components/SearchBar';

const App = () =>{
  const [items, setItems] = useState([])
  const [loading,setLoading] = useState(true)
  const [searchName, setSearchName] = useState('')

  useEffect(()=>{
    axios.get(`https://www.breakingbadapi.com/api/characters?name=${searchName}`)
    .then((res)=>{
      setItems(res.data)
      setLoading(false)
    })
    .catch(error=>{
      console.log(error)
      setLoading(false)
    })
},[searchName])

const searchFunction = (name) =>{
  setSearchName(name)
}

  return (
    <div className='container'>
      <Header />
      <SearchBar search={searchFunction} />
      <CharacterDisplay items={items} loading={loading} />
    </div>
  );
}


export default App
