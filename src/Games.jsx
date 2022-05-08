import React,{useState,useEffect} from 'react'
import axios from 'axios';
import "./body.css";

const URL = 'http://localhost/databasemissionBack/';

export default function Games({ url }) {

  const [games, setGames] = useState([]);
  const [name, setName] = useState("");


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




  
  return ( 
   <form>
    <div id='gamesdiv'>
      <ol>
        {games?.map((game) => {
        return <li key={game.id}>{game.name}</li>
        })}
      </ol>  
    </div>
 </form>
     
  ); 
}