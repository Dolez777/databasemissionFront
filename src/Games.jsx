import React,{useState,useEffect} from 'react'
import axios from 'axios';
import "./components/body/body.css";
const URL = 'http://localhost/databasemissionBack/';

export default function Games({ url }) {

  const [games, setGames] = useState([]);
  const [name, setName] = useState("");


  useEffect(() => {
		axios.get(url + 'games/getallproducts.php')
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
    <div>
      <p>Add new game</p>
      <input value={name} placeholder="Add new item" onChange={e => setName(e.target.value)}></input>
      <button>Add</button>
    </div>
    <div id='gamesdiv'>
      <ol>
        {games?.map((game) => {
        return <li key={game.id}>{game.name}
        <a href="#" className='delete' onClick={() => remove(game.id)}>
              Delete
              </a>
        </li>
        })}
      </ol>  
    </div>
 </form>
     
  ); 
}