import React,{useState,useEffect} from 'react'
import axios from 'axios';
import "./body.css";
import GameCard from '../gamecard/gameCard';


export default function Body(props) {

const [games, setGames] = useState([]);

useEffect(() => {
	axios
			.get(props.url + 'games/games.php')
			.then((response) => {
				setGames(response.data);
				console.log(response.data);
			})
			.catch((error) => {
				alert(
					error.response === undefined
						? error
						: error.response.data.error
				);
			});
	}, [props.url]);  

  const renderCards = () => {
		if (props.filter === 0) {
			return games.map((item) => {
				return (
					<GameCard
						key={item.id}
						genre_id={item.genre_id}
						name={item.name}
						id={item.id}
					/>
				);
			});
		} else {
			return games
				.filter((item) => item.category_id === props.filter)
				.map((item) => {
					return (
						<GameCard
							key={item.id}
							image={item.image}
							name={item.name}
							id={item.id}
						/>
					);
				});
		}
	};



  return ( 
	<div>
   <div className="items-container">{renderCards()}</div>
  </div>
   /*  <Games url={URL} /> */
  ); 
}
