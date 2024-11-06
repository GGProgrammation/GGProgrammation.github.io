import montsu from "../../../Images/Maps/Monsutāhantā.jpg";

function Locations() {
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
				<h3>Locations</h3>
				<a href="/#encyclopedia">Back to encyclopedia</a>
			</div>
			<div>
				<div style={{ border: "5px black solid" }}>
					<h4>Monsutāhantā</h4>
					<div style={{ display: "flex" }}>
						<img src={montsu} width={600} height={400} />
						<p>
							Village of the monster hunters
							<br /> (1) Monster Carver (Crtafting items/armors)
							<br /> (2) Monster tamer (Companion training)
							<br /> (3) Alchemist (Potions)
							<br /> (4) Village chief (council)
							<br /> (5) Soul forger
							<br /> (6) Diviner
							<br /> (7) Monster Hunter academy
							<br /> (8) Ceremony hall
							<br /> (9) General store
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Locations;
