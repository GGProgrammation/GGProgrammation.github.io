import ariaMaldova from "../../../Images/Npcs/Aria Maldova.png";
import barkaNirle from "../../../Images/Npcs/Barka Nirle.png";
import jerebriyahXulti from "../../../Images/Npcs/Jerebriyah Xulti.png";
import jeremiyahXulti from "../../../Images/Npcs/Jeremiyah Xulti.png";
import marYan from "../../../Images/Npcs/Mar Y'an.png";
import shirakVahir from "../../../Images/Npcs/Shirak Vahir.png";
import sukAlsahir from "../../../Images/Npcs/Suk Alsahir.png";
import tolaHuye from "../../../Images/Npcs/Tola Huye.png";
import borgorTulak from "../../../Images/Npcs/Borgor Tulak.png";
import kariaBaro from "../../../Images/Npcs/Karia Baro.png";
import luciaAremori from "../../../Images/Npcs/Lucia Aremori.png";
import valakVadrin from "../../../Images/Npcs/Valak Vadrin.png";
import questionMark from "../../../Images/Npcs/QuestionMark.png";

import Npc from "../../parts/Npc";

function Npcs() {
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
				<h3>Npcs</h3>
				<a href="/#encyclopedia">Back to encyclopedia</a>
			</div>
			<div>
				<h4>Monsutāhantā</h4>
				<Npc
					name={"Shirak Vahir"}
					description={
						"One of the oldest still living hunters, he became president of the elder council in his 50's. He is now 70. Imposing presence, his voice is law in Monsutāhantā. He is the one assigning hunts and taking the decisions. This is the one guy you do now want to be on the bad side of."
					}
					img_src={shirakVahir}
					profession={
						"Village chief and president of the elder council"
					}
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
				<Npc
					name={"Karia Baro"}
					description={
						"The javelineer. Part of the flower eaters team. Uses a javelin called Valiero as a weapon."
					}
					img_src={kariaBaro}
					profession={"Hunter"}
				/>
				<Npc
					name={"Lucia Aremori"}
					description={
						"The healing archer. Part of the flower eaters team. Uses a bow called Leaf as a weapon."
					}
					img_src={luciaAremori}
					profession={"Hunter"}
				/>
				<Npc
					name={"Borgor Tulak"}
					description={
						"The thundering hammer. Part of the flower eaters team. Uses a 2 handed hammer called Storm as a weapon."
					}
					img_src={borgorTulak}
					profession={"Hunter"}
				/>
				<Npc
					name={"Valak Vadrin"}
					description={
						"The lancer. Part of the flower eaters team. Uses a lande and shield combo called Home (Shield) and Security (Spear) as a Weapon."
					}
					img_src={valakVadrin}
					profession={"Hunter"}
				/>
				<Npc
					name={"Jorlen Renadal"}
					description={"An mysterious entity"}
					img_src={questionMark}
					profession={"?"}
				/>
			</div>
		</div>
	);
}

export default Npcs;
