import React, { Fragment } from "react";

const App = () => {
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
							<span class="quote">
								Jesus shamelessly wore a Chuck Norris beard
							</span>
						</div>
						<button>Une autre blague</button>
					</div>
				</section>
			</main>
		</Fragment>
	);
};

export default App;
