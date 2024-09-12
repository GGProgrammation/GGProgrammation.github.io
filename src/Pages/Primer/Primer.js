import worldmap from "../../Images/Maps/World map.jpg";

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
					keep it safe ever since.
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
			<img src={worldmap} />
			<p>TODO</p>
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
