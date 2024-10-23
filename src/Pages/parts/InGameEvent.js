function InGameEvent({ name, inWorldDate, session, date, description }) {
	return (
		<div
			style={{
				border: "5px black solid",
			}}
		>
			<h4>{name}</h4>
			<div style={{ display: "flex", justifyContent: "space-between" }}>
				<h5>{inWorldDate}</h5>
				<p>
					Session {session} - {date}
				</p>
			</div>
			<p>{description}</p>
		</div>
	);
}

export default InGameEvent;
