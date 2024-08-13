import "./App.css";
import Home from "./Pages/Home";
import Characters from "./Pages/Characters";
import Locations from "./Pages/Locations";
import Npcs from "./Pages/Npcs";

function App() {
	const route = window.location.href.replace("http://localhost:3000", "");
	let content;
	switch (route) {
		case "/app/characters":
			content = <Characters />;
			break;
		case "/app/locations":
			content = <Locations />;
			break;
		case "/app/npcs":
			content = <Npcs />;
			break;
		default:
			content = <Home />;
			break;
	}
	return (
		<div className="App">
			<header className="App-header">
				<div
					style={{
						display: "flex",
						width: "100%",
						justifyContent: "space-between",
					}}
				>
					<div>Dnd notes</div>
					<a href="/apps/locations">Locations</a>
					<a href="/apps/characters">Characters</a>
					<a href="/apps/npcs">Npcs</a>
					<a href="/">Back to home</a>
				</div>
			</header>
			<div className="App-body">{content}</div>
			<footer className="App-footer">Footer</footer>
		</div>
	);
}

export default App;
