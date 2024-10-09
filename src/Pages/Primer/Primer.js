import worldmap from "../../Images/Maps/World map.jpg";
import heiwanomori from "../../Images/Maps/Heiwa no mori region.jpg";
import monsutāhantā from "../../Images/Maps/Monsutāhantā.jpg";
import deddorando from "../../Images/Maps/Deddo rando region.jpg";
import dokunonumachi from "../../Images/Maps/Doku no numachi region.jpg";
import fukairagun from "../../Images/Maps/Fukai ragūn region.jpg";
import nadarakana from "../../Images/Maps/Nadarakana heigen region.jpg";
import sabakunosuna from "../../Images/Maps/Sabaku no suna region.jpg";
import soranoyamayama from "../../Images/Maps/Sora no yamayama region.jpg";
import yoganhara from "../../Images/Maps/Yōgan Hara region.jpg";
import Region from "./parts/Region";

function Primer() {
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
				<h3>Primer</h3>
			</div>
			<h2>Story known by your characters</h2>
			<p>
				<span>
					Approximatly 200 years ago, your village Monsutāhantā was
					founded. Trying to fend off horrible monster hordes, the
					first village elders established fortified walls in the
					Heiwa no mori region and their descendants have tried to
					keep it safe ever since. History before this is unclear.
				</span>
				<br />
				<span>
					With the time afforded by their new protection in the
					village, a new art was created to help defend the village :
					Soul forging. An art able to turn the terrible powers of
					these beasts against them, imbuing powerfull weapons bound
					to each hunter raised there.
				</span>
				<br />
				<span>
					Further more, the master craftsmans of the village have
					learned to not let any parts of the monsters go to waste and
					have become able to use their parts to fortify armors and
					create magical items.
				</span>
				<br />
				<span>
					The records keep track of an untold amount of monsters
					fought over the years but each time, they are differrent. As
					if to adapt to the ever more powerfull monster hunters
					raised and trained by the elders. Each hunt unique, only
					basic assessement of a monster can be made in advance,
					requiring hunters to always be improvise and be alert in
					their hunts.
				</span>
				<br />
				<span>
					This is where you come in, 5th generation of hunters,
					trained since birth to become the next defenders of
					Monsutāhantā. At 50 years old, your parents are becoming too
					old to undertake the hunts neccessary to keep the village
					safe. You have all participated in your first hunt and
					undergone the imbuing ceremony. Now full fledged hunters,
					you await the first sign of the next monster comming for the
					village which should not be too long, as recently monster
					attacks have begun to accelerate. The elders are trying to
					understand why but in the meantime, you will have work to
					do.
				</span>
			</p>
			<h2>The world known by your characters</h2>
			<img src={worldmap} style={{ width: "50%" }} />
			<Region
				title={"Heiwa no mori region"}
				img_src={heiwanomori}
				legend={
					<>
						<p>
							Forest region with temperate climate, some mountains
							and rivers flowing through the whole region.
							<br /> First and only region populated by the
							Monster hunters.
							<br /> (1) Monsutāhantā can be found between the two
							mountains in the center of the region.
						</p>
					</>
				}
				children={
					<>
						<h4>Monsutāhantā</h4>
						<div style={{ display: "flex" }}>
							<img src={monsutāhantā} style={{ width: "50%" }} />
							<p>
								Village of the monster hunters
								<br /> (1) Monster Carver (Crtafting
								items/armors)
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
					</>
				}
			/>
			<Region
				title={"Deddo rando region"}
				img_src={deddorando}
				legend={
					<>
						<p>TODO</p>
					</>
				}
			/>
			<Region
				title={"Doku no numachi region"}
				img_src={dokunonumachi}
				legend={
					<>
						<p>TODO</p>
					</>
				}
			/>
			<Region
				title={"Fukai ragūn region"}
				img_src={fukairagun}
				legend={
					<>
						<p>TODO</p>
					</>
				}
			/>
			<Region
				title={"Nadarakana heigen region"}
				img_src={nadarakana}
				legend={
					<>
						<p>TODO</p>
					</>
				}
			/>
			<Region
				title={"Sabaku no suna region"}
				img_src={sabakunosuna}
				legend={
					<>
						<p>TODO</p>
					</>
				}
			/>
			<Region
				title={"Sora no yamayama region"}
				img_src={soranoyamayama}
				legend={
					<>
						<p>TODO</p>
					</>
				}
			/>
			<Region
				title={"Yōgan Hara region"}
				img_src={yoganhara}
				legend={
					<>
						<p>TODO</p>
					</>
				}
			/>
			<h2>The people known by your characters</h2>
			<p>TODO</p>
			<h2>You</h2>
			<p>TODO</p>
			<h2>
				Great. What now? Head on over to the{" "}
				<a href="/#primer/rules">rules</a> page to learn how to create
				your character for the campain
			</h2>
		</div>
	);
}

export default Primer;
