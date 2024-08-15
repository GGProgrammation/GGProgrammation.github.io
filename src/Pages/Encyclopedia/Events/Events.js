import isDM from "../../../Shared/Utils";

function Events() {
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
				<h3>Events</h3>
				<a href="/#encyclopedia">Back to encyclopedia</a>
			</div>
			{isDM && (
				<p>
					DM eyes only. If you see this, turn back now. You will get
					spoiled. Hard.
				</p>
			)}
		</div>
	);
}

export default Events;
