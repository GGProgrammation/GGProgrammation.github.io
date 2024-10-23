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
import Region from "../parts/Region";
import ariaMaldova from "../../Images/Npcs/Aria Maldova.png";
import barkaNirle from "../../Images/Npcs/Barka Nirle.png";
import jerebriyahXulti from "../../Images/Npcs/Jerebriyah Xulti.png";
import jeremiyahXulti from "../../Images/Npcs/Jeremiyah Xulti.png";
import marYan from "../../Images/Npcs/Mar Y'an.png";
import shirakVahir from "../../Images/Npcs/Shirak Vahir.png";
import sukAlsahir from "../../Images/Npcs/Suk Alsahir.png";
import tolaHuye from "../../Images/Npcs/Tola Huye.png";
import Npc from "../parts/Npc";

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
					Approximatly 180 years ago, your village Monsutāhantā was
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
					Monsutāhantā. At 70 years old, your parents are becoming too
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
							<br /> Grazing beasts and forests animals are found
							providing most of the food source for the village.
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
						<p>
							Barren region with temperate climate. Rivers and
							dead forests dot the region. Not much is known of
							this place since not much happens in this place.
							<br /> No known fauna
						</p>
					</>
				}
			/>
			<Region
				title={"Doku no numachi region"}
				img_src={dokunonumachi}
				legend={
					<>
						<p>
							Swamp region with hot climate. Knee high muddy
							waters and overgrown flora.
							<br />
							Human sized insects and amphibian are king in these
							lands. Beware of the poisonous plants found in the
							region
						</p>
					</>
				}
			/>
			<Region
				title={"Fukai ragūn region"}
				img_src={fukairagun}
				legend={
					<>
						<p>
							High water region with hot climate. Colorfoul coral
							reefs along with deep dark abysses can be found.
							<br /> Mostly aquatic and avian fauna. Water
							transportation required.
						</p>
					</>
				}
			/>
			<Region
				title={"Nadarakana heigen region"}
				img_src={nadarakana}
				legend={
					<>
						<p>
							Mountainous region with temperate climate. Landscape
							of ravines and hills. Making for a pretty jagged
							terrain.
							<br />
							Fauna composed of diverse flying and climbing types.
						</p>
					</>
				}
			/>
			<Region
				title={"Sabaku no suna region"}
				img_src={sabakunosuna}
				legend={
					<>
						<p>
							Desert region with hot climate. Plateaus surrounded
							by parse areas of flora and sand dunes as far as the
							eye can see.
							<br /> Fauna composed mostly of tunnelers and
							adapted life forms that can endure the hot sun of
							the region.
						</p>
					</>
				}
			/>
			<Region
				title={"Sora no yamayama region"}
				img_src={soranoyamayama}
				legend={
					<>
						<p>
							Mountainous region with cold climate. The peeks of
							the moutains touch the sky and the cold freezes even
							the most prepared of adventurers.
							<br /> Fauna composed mostly of life forms adapted
							to the cold, wether it be flying, climbing or
							burrowing types.
						</p>
					</>
				}
			/>
			<Region
				title={"Yōgan Hara region"}
				img_src={yoganhara}
				legend={
					<>
						<p>
							Volcanic region with hot climate. The tree volcanoes
							that adorne the region are constantly spewing their
							lava making the land quite inhospitable.
							<br /> Fauna base on flying creatures and fire
							resistant beasts.
						</p>
					</>
				}
			/>
			<h2>The people known by your characters</h2>
			<Npc
				name={"Shirak Vahir"}
				description={
					"One of the oldest still living hunters, he became president of the elder council in his 80's. He is now 90. Imposing presence, his voice is law in Monsutāhantā. He is the one assigning hunts and taking the decisions. This is the one guy you do now want to be on the bad side of."
				}
				img_src={shirakVahir}
				profession={"Village chief and president of the elder council"}
			/>
			<Npc
				name={"Jeremiyah Xulti"}
				description={
					"The monster carver of Monsutāhantā. A busy man and a man of few words. He is always in the middle of a project and is constently trying to outdo his last work. He might not strike a lot of mundane conversation but he is the man to talk to for any project having to do with monsters. He makes sure not one piece of a monster's body goes to waste."
				}
				img_src={jeremiyahXulti}
				profession={"Monster Carver"}
			/>
			<Npc
				name={"Jerebriyah Xulti"}
				description={
					"The monster tamer of Monsutāhantā, he is in charge of every monster egg and or baby found during the expeditions. He trains them and is the judge of wether or not they can become good companions for hunters. He is also the one who assigns them to freshly minted hunters. He is a being of eternal patience and everyone appreciates his company."
				}
				img_src={jerebriyahXulti}
				profession={"Monster tamer"}
			/>
			<Npc
				name={"Suk Alsahir"}
				description={
					"The alchemist of Monsutāhantā. She makes sure every expedition goes smoothly and hunters come back with her salves, potions and poisons. If hunters need a little boost, she is usually to one who provides it. In return, she often asks the hunters for additionnal ingredients to bring back from the region they are going to. Quid pro quo as she often says. She is a practical and no nonsense gal with no time to waste."
				}
				img_src={sukAlsahir}
				profession={"Alchemist"}
			/>
			<Npc
				name={"Mar Y'an"}
				description={
					"The soul binder of Monsutāhantā. Along with Jeremiyah, she makes sure every part of a monster is used, even it's soul. With her magic, she binds the form and essence of a monster to the crafts of Jeremiyah to create powerfull weapons, armors and artifacts to help hunters in their journeys. Unlike her coworker however, she loves conversation and you can usually find her at the tavern when not working."
				}
				img_src={marYan}
				profession={"Soul binder"}
			/>
			<Npc
				name={"Aria Maldova"}
				description={
					"Diviner of Monsutāhantā, she can sense when an attack is comming and, like her mother before her, advises the hunters on where to look for the beasts before they even begin their assault on the village." +
					"Tends to be lost in thought and always distracted by something the rest of us cannot see. Otherwise jovial albeit a little uncomfortable to be with."
				}
				img_src={ariaMaldova}
				profession={"Diviner"}
			/>
			<Npc
				name={"Barka Nirle"}
				description={
					"The instructor of Monsutāhantā is a freshly retired hunter. He has experience but also the vitality to train the next generation of hunters. Quite stern but enjoys drinking and playing music whenever he can. He thinks children understand better when his instructions are in song form."
				}
				img_src={barkaNirle}
				profession={"Instructor"}
			/>
			<Npc
				name={"Tola Huye"}
				description={
					"The gerenal store owner of Monsutāhantā. If you need something pre-made, rations or non-alchemical magic items, he is the one to procure it for you. With his magic, he enchants and transforms mundane objects into usefull tools for the hunt. Every mission starts with a trip in his store. Always looking for the next opportunity to apply is talents, he has a warm and welcoming attitude towards everybody."
				}
				img_src={tolaHuye}
				profession={"Store owner"}
			/>
			<p>
				Along with them, you can know as many or as few people not in
				this list from the village. You get to name them tho. They can
				do menial jobs, they can be other hunters in other teams, etc.
				You also, of course, know your parents. These you will have to
				name and give to me.
			</p>
			<h2>You</h2>
			<p>
				5th generation of Monster Hunters, you and your 3 other
				companions have been raised and trained as a team to fight off
				encroaching monsters. You have been given a soul-bound weapon, a
				companion and have undergone the attunement ceremony making of
				you all full fledged monster hunters. Your parents are now close
				to retirement and are ready to leave the defense of the village
				to you. Approximatly 2 to 3 months ago, monster have begun to
				appear and seem to be emboldened enough to come and attack your
				village. If damage is to be avoided on the infrastructure of the
				village, your only course of action is to hunt them in their
				respective territory before they even come close.
			</p>
			<h2>
				Great. What now? Head on over to the{" "}
				<a href="/#primer/rules">rules</a> page to learn how to create
				your character for the campain
			</h2>
		</div>
	);
}

export default Primer;
