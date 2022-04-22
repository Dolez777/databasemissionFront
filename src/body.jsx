import React,{useState,useEffect} from 'react'
import axios from 'axios';
import "./body.css";

export default function Body({ url }) {

  const [game, setGame] = useState([]);

  useEffect(() => {
		axios.get(url + 'games/getallproducts.php')
		.then((response) => {
			const json = response.data;
			console.log(json);
			setGame(json.game);
    }).catch(error => {
			alert(error.response === undefined ? error : error.response.data.error);
		})
  }, [url])

  return (
    
    <div id='gamesdiv'>
      {game?.map(games => (
        <div key={games.id}>{games.name}</div>
        ))}  
    </div>
     
  )
}
