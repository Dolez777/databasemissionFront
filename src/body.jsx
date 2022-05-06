import React,{useState,useEffect} from 'react'
import axios from 'axios';
import "./body.css";

export default function Body({ url }) {

  const [games, setGames] = useState([]);

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

  
  return ( 
    <div id='gamesdiv'>
      <ol>
        {games?.map((game) => {
        return <li key={game.id}> {game.name}</li>
        })}
      </ol>  
    </div>
     
  ); 
}
