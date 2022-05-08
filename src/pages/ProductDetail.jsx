import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
const URL = 'http://localhost/databasemissionBack/';



export default function ProductDetail(props) {
	let { id } = useParams();

	const [productDetails, setProductDetails] = useState();
	const [loading, setLoading] = useState(true);


	useEffect(() => {
		axios
			.get(URL + 'games/getgamewithid.php/' + id)
			.then((response) => {
				setProductDetails(response.data.products[0]);
				setLoading(false);
				console.log(response.data.products[0]);
			})
			.catch((error) => {
				setLoading(true);
				alert(
					error.response === undefined
						? error
						: error.response.data.error
				);
			});
	}, [id]);

	console.log(id);

	return (
		<div
			className="vh-100"
			style={{ display: 'flex', justifyContent: 'space-between' }}
		>
			<div className="container ml-5 mt-5">
				<h1 className="text-left ms-5">{!loading && productDetails.name}</h1>
				<div className="row">
					<div className="col-md-4 mt-5">
						{!loading ? (
							<img
								src={productDetails.genre_id}
								alt=""
								style={
									{
										width: '100%',
										height: '300px',
									}
								}
							></img>
						) : null}
					</div>
					<div className="col-md-4">
						<h3 className="my-3">Pelin kuvaus</h3>
						{!loading && productDetails.kuvaus}
				
					{/* 	<h3 className="my-3 mt-5">
							Hinta {!loading && productDetails.price}€/kpl
						</h3>
						{!loading && productDetails.aineosat} */}
						<h3 className="my-3 mt-5"> {!loading && productDetails.id}Pokemon</h3>
						<Button
							variant="outline-light"
							className="w-50"
						>
							Seuraa peliä
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
}

