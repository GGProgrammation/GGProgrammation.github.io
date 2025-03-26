import poisonousMillitank from "../../../Images/Monsters/PoisonousMillitank.jpg";
import poisonousMillitankSheet from "../../../Images/Monsters/PoisonousMillitankSheet.png";
import aradraka from "../../../Images/Monsters/Aradraka.jpg";
import aradrakaSheet from "../../../Images/Monsters/AradrakaSheet.png";
import goricrab from "../../../Images/Monsters/Goricrab.jpg";
import goricrabSheet from "../../../Images/Monsters/GoricrabSheet.png";

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
				<div style={{ border: "5px solid black" }}>
					<h4>Aradraka</h4>
					<div style={{ display: "flex" }}>
						<img
							src={aradraka}
							style={{ width: "50%", height: "800px" }}
						/>
						<img
							src={aradrakaSheet}
							style={{ width: "50%", height: "800px" }}
						/>
					</div>
				</div>
				<div style={{ border: "5px solid black" }}>
					<h4>Goricrab</h4>
					<div style={{ display: "flex" }}>
						<img
							src={goricrab}
							style={{ width: "50%", height: "800px" }}
						/>
						<img
							src={goricrabSheet}
							style={{ width: "50%", height: "800px" }}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Monsters;
