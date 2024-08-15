function Encyclopedia() {
	return (
		<div style={{ display: "flex", flexDirection: "column" }}>
			<div
				className="Page-header"
				style={{
					display: "flex",
					flexDirection: "row",
					width: "100%",
					justifyContent: "space-between",
				}}
			>
				<h3>Encyclopedia</h3>
				<a href="/#encyclopedia/events">Events</a>
				<a href="/#encyclopedia/locations">Locations</a>
				<a href="/#encyclopedia/monsters">Monsters</a>
				<a href="/#encyclopedia/npcs">Npcs</a>
			</div>
			<p style={{ textAlign: "center" }}>
				Here lies all the information the players have accumulateed
				during the campain
			</p>
		</div>
	);
}

export default Encyclopedia;
