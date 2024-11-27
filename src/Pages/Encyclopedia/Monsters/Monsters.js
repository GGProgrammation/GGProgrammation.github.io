import poisonousMillitank from "../../../Images/Monsters/PoisonousMillitank.jpg";
import poisonousMillitankSheet from "../../../Images/Monsters/PoisonousMillitankSheet.png";

function Monsters() {
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
				<h3>Monsters</h3>
				<a href="/#encyclopedia">Back to encyclopedia</a>
			</div>
			<div>
				<div style={{ border: "5px solid black" }}>
					<h4>Poisonous Millitank</h4>
					<div style={{ display: "flex" }}>
						<img
							src={poisonousMillitank}
							style={{ width: "50%", height: "800px" }}
						/>
						<img
							src={poisonousMillitankSheet}
							style={{ width: "50%", height: "800px" }}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Monsters;
