import aboling from "./../../../../Images/Companions/Aboling.png";
import aboling_sheet from "./../../../../Images/Companions/aboling_sheet.png";
import brainmuncher from "./../../../../Images/Companions/Brainmuncher.png";
import brainmuncher_sheet from "./../../../../Images/Companions/brainmuncher_sheet.png";
import caprisoul from "./../../../../Images/Companions/Caprisoul.png";
import caprisoul_sheet from "./../../../../Images/Companions/caprisoul_sheet.png";
import couatling from "./../../../../Images/Companions/Couatling.png";
import couatling_sheet from "./../../../../Images/Companions/couatling_sheet.png";
import deathshroud from "./../../../../Images/Companions/Death shroud.png";
import deathshroud_sheet from "./../../../../Images/Companions/deathshroud_sheet.png";
import direbunny from "./../../../../Images/Companions/Dire bunny.png";
import direbunny_sheet from "./../../../../Images/Companions/direbunny_sheet.png";
import dragonling from "./../../../../Images/Companions/Dragonling.png";
import dragonling_sheet from "./../../../../Images/Companions/dragonling_sheet.png";
import gelatinooze from "./../../../../Images/Companions/Gelatinooze.png";
import gelatinooze_sheet from "./../../../../Images/Companions/gelatinooze_sheet.png";
import hyphan from "./../../../../Images/Companions/Hyphan.png";
import hyphan_sheet from "./../../../../Images/Companions/hyphan_sheet.png";
import mechakobold from "./../../../../Images/Companions/Mechakobold.png";
import mechakobold_sheet from "./../../../../Images/Companions/mechakobold_sheet.png";
import minimic from "./../../../../Images/Companions/Minimic.png";
import minimic_sheet from "./../../../../Images/Companions/minimic_sheet.png";
import peeper from "./../../../../Images/Companions/Peeper.png";
import peeper_sheet from "./../../../../Images/Companions/peeper_sheet.png";
import rakitten from "./../../../../Images/Companions/Rakitten.png";
import rakitten_sheet from "./../../../../Images/Companions/rakitten_sheet.png";
import slaghundpup from "./../../../../Images/Companions/Slaghund Pup.png";
import slaghundpup_sheet from "./../../../../Images/Companions/slaghundpup_sheet.png";
import sunsnacker from "./../../../../Images/Companions/Sunsnacker.png";
import sunsnacker_sheet from "./../../../../Images/Companions/sunsnacker_sheet.png";
import tarling from "./../../../../Images/Companions/Tarling.png";
import tarling_sheet from "./../../../../Images/Companions/tarling_sheet.png";
import tatzling from "./../../../../Images/Companions/Tatzling.png";
import tatzling_sheet from "./../../../../Images/Companions/tatzling_sheet.png";
import Companion from "./parts/Companion";
function Companions() {
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
				<h3>Companions</h3>
				<a href="/#primer/rules">Back to rules</a>
			</div>
			<div>
				<Companion
					monster_name={"Aboling"}
					monster_img={aboling}
					monster_sheet={aboling_sheet}
				/>
				<Companion
					monster_name={"Brainmuncher"}
					monster_img={brainmuncher}
					monster_sheet={brainmuncher_sheet}
				/>
				<Companion
					monster_name={"Caprisoul"}
					monster_img={caprisoul}
					monster_sheet={caprisoul_sheet}
				/>
				<Companion
					monster_name={"Couatling"}
					monster_img={couatling}
					monster_sheet={couatling_sheet}
				/>
				<Companion
					monster_name={"Death shroud"}
					monster_img={deathshroud}
					monster_sheet={deathshroud_sheet}
				/>
				<Companion
					monster_name={"Dire bunny"}
					monster_img={direbunny}
					monster_sheet={direbunny_sheet}
				/>
				<Companion
					monster_name={"Dragonling"}
					monster_img={dragonling}
					monster_sheet={dragonling_sheet}
				/>
				<Companion
					monster_name={"Gelatinooze"}
					monster_img={gelatinooze}
					monster_sheet={gelatinooze_sheet}
				/>
				<Companion
					monster_name={"Hyphan"}
					monster_img={hyphan}
					monster_sheet={hyphan_sheet}
				/>
				<Companion
					monster_name={"Mechakobold"}
					monster_img={mechakobold}
					monster_sheet={mechakobold_sheet}
				/>
				<Companion
					monster_name={"Minimic"}
					monster_img={minimic}
					monster_sheet={minimic_sheet}
				/>
				<Companion
					monster_name={"Peeper"}
					monster_img={peeper}
					monster_sheet={peeper_sheet}
				/>
				<Companion
					monster_name={"Rakitten"}
					monster_img={rakitten}
					monster_sheet={rakitten_sheet}
				/>
				<Companion
					monster_name={"Slaghund Pup"}
					monster_img={slaghundpup}
					monster_sheet={slaghundpup_sheet}
				/>
				<Companion
					monster_name={"Sunsnacker"}
					monster_img={sunsnacker}
					monster_sheet={sunsnacker_sheet}
				/>
				<Companion
					monster_name={"Tarling"}
					monster_img={tarling}
					monster_sheet={tarling_sheet}
				/>
				<Companion
					monster_name={"Tatzling"}
					monster_img={tatzling}
					monster_sheet={tatzling_sheet}
				/>
			</div>
		</div>
	);
}

export default Companions;
