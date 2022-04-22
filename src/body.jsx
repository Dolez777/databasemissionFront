import React,{useState,useEffect} from 'react'
import axios from 'axios';


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
  }, [])

  return (
    
    <div>
      {game.map(games => (
        <h5 key={games.id}>
          {games.name}
          </h5>
        ))}  
    </div>
     
  )
}
