import "./App.css";
import Home from "./Pages/Home";
import Characters from "./Pages/Characters";
import Locations from "./Pages/Locations";
import Npcs from "./Pages/Npcs";
import { Routes, Route, HashRouter } from "react-router-dom";

function App() {
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
			<div className="App-body">
				<HashRouter>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/characters" element={<Characters />} />
						<Route path="/locations" element={<Locations />} />
						<Route path="/npcs" element={<Npcs />} />
					</Routes>
				</HashRouter>
			</div>
			<footer className="App-footer">Footer</footer>
		</div>
	);
}

export default App;
