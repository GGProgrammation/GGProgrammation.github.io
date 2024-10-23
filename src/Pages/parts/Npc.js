function Npc({
	name,
	profession,
	img_src,
	description,
	companion_src,
	companionName,
	companionRace,
	playedBy,
}) {
	return (
		<div
			style={{
				border: "5px black solid",
				display: "flex",
				justifyContent: "space-between",
			}}
		>
			<div>
				<h4>{name}</h4>
				<h5>{profession}</h5>
				{playedBy !== undefined && <h5>Played by {playedBy}</h5>}
				<div style={{ display: "flex" }}>
					<img src={img_src} style={{ width: "400px" }} />
					{description}
				</div>
			</div>
			<div>
				{companion_src !== undefined && (
					<>
						<h4>{companionName}</h4>
						<h5>{companionRace}</h5>
						<img src={companion_src} style={{ width: "400px" }} />
					</>
				)}
			</div>
		</div>
	);
}

export default Npc;
