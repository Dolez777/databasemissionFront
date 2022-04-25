import React,{useState,useEffect} from 'react'
import axios from 'axios';
import "./body.css";

export default function Gameadd({ url }) {

  const [games, setGames] = useState([]);
  const [name, setName] = useState("");


   function save(e){
    e.preventDefault();
    const json = JSON.stringify({name:name});
    axios.post(url + "games/addgame.php", json, {
      headers: {
        "Content-Type" : "application/json"
      }
    })
    .then((response) => {
      setGames(Games =>  [...Games,response.data]);
      setName("");
    }).catch(error => {
      alert(error.response ? error.response.data.error : error);
    })
  }

  
  return ( 
   <form onSubmit={save}>
   <div>
     <p>Add new game</p>
     <input value={name} placeholder="Add new item" onChange={e => setName(e.target.value)}></input>
     <button>Add</button>
   </div>
 </form>
     
  ); 
}