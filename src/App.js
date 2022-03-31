import React, { Fragment } from "react";
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
							href="https://developer.mozilla.org/fr/docs/Web/API/Fetch_API/Using_Fetch"
							target="_blank"
						>
							<code>fetch</code>
						</a>
					</p>
				</section>
				<section class="container">
					<h1>Une blague sur Chuck Norris ?</h1>
					<div>
						<div class="render">
							<span class="quote">{joke}</span>
						</div>
						<button>Une autre blague</button>
					</div>
				</section>
			</main>
		</Fragment>
	);
};

export default App;
