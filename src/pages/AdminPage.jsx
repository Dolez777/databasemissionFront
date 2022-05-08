import React,{useState,useEffect} from 'react';
import axios from 'axios';
import "../components/body/body.css";

const URL = 'http://localhost/databasemissionBack/';

export default function Games({ url }) {

  const [games, setGames] = useState([]);
  const [name, setName] = useState("");
  const [game, setGame] = useState("");


  useEffect(() => {
		axios.get(URL + 'games/games.php')
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
    axios.post(URL + "games/addgame.php", json, {
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

  function remove(id){
    const json = JSON.stringify({id:id})
    axios.post(URL + "games/deleteGame.php", json, {
      headers: {
        "Content-Type" : "application/json"
      }
    })
    .then((response) => {
      const newListWithoutRemoved = games.filter((game) => game.id !== id);
      setGames(newListWithoutRemoved);
    }).catch(error => {
      alert(error.response ? error.response.data.error : error);
    });
  }




  
  return ( 
   <form onSubmit={save}>
    
    <div id='gamesdiv'>
      <ol>
        {games?.map((game) => {
        return <li key={game.id}>{game.name}
          <a href="#" className='delete' onClick={() => remove(game.id)}>Delete</a>
        </li>
        })}
      </ol>  
    </div>
    <input value={game} placeholder="Add new game" onChange={e => setGame(e.target.value)}></input>
    <button>Add</button>
 </form>
     
  ); 
}