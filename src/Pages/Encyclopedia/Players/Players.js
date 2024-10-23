import amara from "../../../Images/Players/Amara.png";
import aku from "../../../Images/Players/Aku.png";
import chakrum from "../../../Images/Players/Chakrum.png";
import Kadesh from "../../../Images/Players/Kadesh.png";
import Npc from "../../parts/Npc";
import sunsnacker from "../../../Images/Companions/Sunsnacker.png";
import gelatinooze from "../../../Images/Companions/Gelatinooze.png";
import peeper from "../../../Images/Companions/Peeper.png";
import hyphan from "../../../Images/Companions/Hyphan.png";

function Players() {
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
				<h3>Players</h3>
				<a href="/#encyclopedia">Back to encyclopedia</a>
			</div>
			<div>
				<Npc
					name={"Amara"}
					description={""}
					img_src={amara}
					profession={"Close range damage dealer"}
					companion_src={sunsnacker}
					companionName={"King"}
					companionRace={"The sunsnacker"}
					playedBy={"Caroline Gergel"}
				/>
				<Npc
					name={"Aku"}
					description={""}
					img_src={aku}
					profession={"Healer"}
					companion_src={hyphan}
					companionName={"Myko"}
					companionRace={"The hyphan"}
					playedBy={"Anthony Vigeant"}
				/>
				<Npc
					name={"Chakrum"}
					description={""}
					img_src={chakrum}
					profession={"Tank"}
					companion_src={gelatinooze}
					companionName={"Hoozbert AKA Oozy Hoozborn"}
					companionRace={"The gelatinooze"}
					playedBy={"Hugo Bégin"}
				/>
				<Npc
					name={"Kadesh"}
					description={""}
					img_src={Kadesh}
					profession={"Long range damage dealer"}
					companion_src={peeper}
					companionName={"Spotter"}
					companionRace={"The peeper"}
					playedBy={"Sebastien Gergel"}
				/>
			</div>
		</div>
	);
}

export default Players;
