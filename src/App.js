import React, { Fragment, useEffect } from "react";
import axios from "axios";

const App = () => {
	const API = "https://api.chucknorris.io/jokes/random";

	const [joke, setJoke] = React.useState("");

	const getJoke = () => {
		axios
			.get(API)
			.then((res) => {
				setJoke(res.data.value);
			})
			.catch((err) => {
				console.error(err);
			});
	};

	/**
	 * UseEffect c'est un hook qui permet de gérer les interactions avec le DOM
	 * Ici, nous allons utiliser le hook useEffect pour appeler la fonction getJoke() lors du chargement de la page
	 */

	useEffect(() => {
		getJoke();
	}, []);

	const handleClick = () => {
		getJoke();
	};

	return (
		<Fragment>
			<header>
				<h1>Comment on utilise une API en JavaScript Vanilla</h1>
			</header>
			<main>
				<section class="explain">
					<p>
						Nous allons voir le fonctionnement d'une API en
						JavaScript Vanilla.
					</p>
					<p>
						Comment ? En utilisant
						<a
							href="https://www.npmjs.com/package/axios"
							target="_blank"
						>
							<code>axios</code>
						</a>
					</p>
				</section>
				<section class="container">
					<h1>Une blague sur Chuck Norris ?</h1>
					<div>
						<div class="render">
							<span class="quote">{joke}</span>
						</div>
						<button onClick={handleClick}>Une autre blague</button>
					</div>
				</section>
			</main>
		</Fragment>
	);
};

export default App;
