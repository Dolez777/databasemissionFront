import React,{useState,useEffect} from 'react'
import axios from 'axios';
import "./body.css";

const URL = 'http://localhost/databasemissionBack/';

export default function Games({ url }) {

  const [games, setGames] = useState([]);
  const [name, setName] = useState("");
  const [game, setGame] = useState("");


  useEffect(() => {
		axios.get(url + 'games/Games.php')
		.then((response) => {
			const json = response.data;
			console.log(json);
			setGames(json);
    }).catch(error => {
			alert(error.response === undefined ? error : error.response.data.error);
		})
  }, [url])

  function save(e){
    e.preventDefault();
    const json = JSON.stringify({name:game});
    axios.post(URL + "/games/addGame.php", json, {
      headers: {
        "Content-Type" : "application/json"
      }
    })
    .then((response) => {
      setGames(games =>  [...games,response.data]);
      setGame("");
    }).catch(error => {
      alert(error.response ? error.response.data.error : error);
    })
  }




  
  return ( 
   <form onSubmit={save}>
    <div id='gamesdiv'>
      <ol>
        {games?.map((game) => {
        return <li key={game.id}>{game.name}</li>
        })}
      </ol>  
    </div>
    <input value={game} placeholder="Add new game" onChange={e => setGame(e.target.value)}></input>
    <button>Add</button>
 </form>
     
  ); 
}