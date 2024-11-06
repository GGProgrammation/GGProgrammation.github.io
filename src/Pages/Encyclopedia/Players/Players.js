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
					description={
						<p>
							Amara has two mothers : Larna et Sanil.
							<br />
							<br />
							She had an older sister, Tura, with whom she went on
							her first hunt with. The monster was an enormous
							spider that spit explosive powder. The hunt was
							successful and the monster was killed. The day
							after, while heading back to the village, they were
							ambushed by another spider, which was probably the
							dead spider's mate. Tura sacrificed herself to save
							Amara and kill the new spider. The weapon that
							Amara's currently using was made from the spiders'
							parts, and her sister's hammer. Amara was scarred by
							the events and developped arachnophobia.
							<br />
							<br />
							Personality
							<br />
							Amara's personnality is pretty serious. She's
							intense, and quite proud. She gets attached easily
							and is incredibly loyal. She likes to bake and to
							take care of others. She's also dedicated to
							training and monster hunting. She fights to protect
							her village and for honor.
						</p>
					}
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
					description={
						<p>
							My parents are Darak and Kala . I have 1 brothers
							(Aku) and 0 sisters.
							<br />
							My first hunt for my initiation was against an Ape
							Pufferfish. With it's essence, I built the gorger,
							my weapon.
							<br />I was scarred by the headsploder during an
							attack on the village where my crush Mahlenti has
							been killed by the horrifying screech of the
							creature.
							<br />
							Now I am protective of my brother because of his
							handicap and grumpy but still shy.
							<br />
							In my hunting party, I am the closest to Aku but
							apparently having a crush on Amara the big mommy.
						</p>
					}
					img_src={chakrum}
					profession={"Tank"}
					companion_src={gelatinooze}
					companionName={"Hoozbert AKA Oozy Hoozborn"}
					companionRace={"The gelatinooze"}
					playedBy={"Hugo Bégin"}
				/>
				<Npc
					name={"Kadesh"}
					description={
						<p>
							My name is Kadesh, Son of Arnoud and Kwasa, and I am
							a hunter of monsters of the fifth generation
							<br />
							My parents were hunters like their parents before
							them and should the gods favour me like my children
							will be
							<br />
							We protect the innocent, safeguard the weak and try
							to make a better future for all people
							<br />
							These monsters have plagued the land for far too
							long, and it has fallen upon us to pay the blood
							price so that others may live in peace
							<br />
							<br />
							When I was a young child, my parent and my siblings
							went outside the walls for a short excursion to
							learn about survival
							<br />
							It was an overcast day like any other but in an
							instant a giant flying serpent with gold and azure
							scale came diving down from the cloud unleashing
							lightning upon us
							<br />
							It had been a long time since such a powerful
							monster came anywhere near this close to the village
							<br />
							My Mother blocked most of the blow as my father
							retaliated, but the lightning still caught my and my
							siblings
							<br />
							As lightning crawled through my veins causing me to
							spasm and convulse, I could only think of running
							away
							<br />
							When I was able to move I abandoned everything and
							ran for my life not looking back
							<br />I am told that my parent fought bravely and
							wounded the beast delaying before it could reach the
							village
							<br />I was also told that running away was the best
							move I could have done and to not feel shame for
							abandoning my family
							<br />
							<br />
							I am now the last of my line and tomorrow I will
							embark upon my first true hunt
							<br />I do not know if I will come back but I know
							that I will not shame myself again
							<br />
							The creature will be slain or will die fighting the
							beast, I will not run away or hide while others
							fight my battle and risk their lives
							<br />
							Of this I make an oath
							<br />I have been raised by my Aunt Akina and Uncle
							Bowu as if I was one of their own children
							<br />I have three Cousins Arina(F) and Arjul(M) are
							also fifth generation hunters and they are part of
							the Moon Quencher Team
							<br />
							My third cousin Armin(M) is a civilian having been
							born with a bad leg, he works hard to help us but he
							will never be one of the hunter
							<br />
							<br />
							During my initiation hunt we killed and viridescent
							Bombardier, a giant bloodthirsty beetle that spews
							pressurized acid and fires spines using its hollow
							horn
							<br />
							From its remains we soul forged Viridian Husk, a
							weapon which will remain with me till be day of my
							death.
							<br />I hope that with it I will honour my ancestor
							and make up for the stains of cowardice that haunt
							my past
						</p>
					}
					img_src={Kadesh}
					profession={"Long range damage dealer"}
					companion_src={peeper}
					companionName={"Spotter"}
					companionRace={"The peeper"}
					playedBy={"Seb GL"}
				/>
			</div>
		</div>
	);
}

export default Players;
