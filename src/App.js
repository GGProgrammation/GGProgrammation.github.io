import "./App.css";
import Home from "./Pages/Home";
import Companions from "./Pages/Primer/Rules/Companions/Companions";
import Locations from "./Pages/Encyclopedia/Locations/Locations";
import Rules from "./Pages/Primer/Rules/Rules";
import Primer from "./Pages/Primer/Primer";
import { Routes, Route, HashRouter } from "react-router-dom";
import Encyclopedia from "./Pages/Encyclopedia/Encyclopedia";
import Monsters from "./Pages/Encyclopedia/Monsters/Monsters";
import Npcs from "./Pages/Encyclopedia/Npcs/Npcs";
import Events from "./Pages/Encyclopedia/Events/Events";
import Sessions from "./Pages/Encyclopedia/Sessions/Sessions";
import Players from "./Pages/Encyclopedia/Players/Players";

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
					<a href="/#primer">Primer</a>
					<a href="/#encyclopedia">Encyclopedia</a>
					<a href="/">Back to home</a>
				</div>
			</header>
			<div className="App-body">
				<HashRouter>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/primer" element={<Primer />} />
						<Route path="/primer/rules" element={<Rules />} />
						<Route
							path="/primer/rules/companions"
							element={<Companions />}
						/>
						<Route
							path="/encyclopedia"
							element={<Encyclopedia />}
						/>
						<Route
							path="/encyclopedia/events"
							element={<Events />}
						/>
						<Route
							path="/encyclopedia/sessions"
							element={<Sessions />}
						/>
						<Route
							path="/encyclopedia/locations"
							element={<Locations />}
						/>
						<Route
							path="/encyclopedia/monsters"
							element={<Monsters />}
						/>
						<Route path="/encyclopedia/npcs" element={<Npcs />} />
						<Route
							path="/encyclopedia/players"
							element={<Players />}
						/>
					</Routes>
				</HashRouter>
			</div>
			<footer className="App-footer">Gabriel Geoffroy 2024</footer>
		</div>
	);
}

export default App;
