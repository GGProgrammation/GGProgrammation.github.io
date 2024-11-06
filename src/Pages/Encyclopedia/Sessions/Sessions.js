import session1 from "../../../Images/Travel/Session1.png";
import session2 from "../../../Images/Travel/Session2.png";

function Sessions() {
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
			}}
		>
			<div
				className="Page-header"
				style={{
					display: "flex",
					flexDirection: "row",
					width: "100%",
					justifyContent: "space-between",
				}}
			>
				<h3>Sessions</h3>
				<a href="/#encyclopedia">Back to encyclopedia</a>
			</div>
			<div>
				<div style={{ border: "5px black solid" }}>
					<h4>Session 1</h4>
					<div
						style={{
							display: "flex",
							justifyContent: "space-between",
						}}
					>
						<h5>Year 180am, 12-06 to 16-06</h5>
						<p>2024-10-23</p>
					</div>
					<p>
						The shining diamonds gather for their first mission.
						After sitting in to the war preparation meeting, they
						receive their orders and their first mission is to take
						place in the Doku no numachi region : the poisonous
						swamps of the north.{" "}
					</p>
					<p>
						They get aquainted with the different steps of going on
						an official mission, meet the Diviner, the Alchemist and
						the general store owner.
					</p>
					<p>
						The diviner gave them their first prophecy : The essence
						of the unnamed beast can be felt more strongly in the
						nort-eastern section of the region. Beware the vines of
						the earth mover. Poisonous are his tendrils and deadly
						are his trails. Deep lays your destinies and deaths. The
						smoking traitor will guide you if you don't follow it.
					</p>
					<p>
						The alchemist gave them a few concoctions and in return,
						asked them to get her a special root found only in the
						rivers of the Doku no numachi region. Recognized by it's
						pinkish redish hue and it's flower ressembling a baby's
						head.
					</p>
					<p>
						The general store owner gave them the basics and how to
						use it. We're talking transporters, bag of equipments,
						rations, traps, tranquilizers, etc.
					</p>
					<p>
						They spent their last night in Monsutāhantā and then
						went on their first expedition as the shining diamonds.
					</p>
					<p>
						The first 3 days went without a hitch, they kept a fast
						pace and made a lot of headway towards their
						destination. On the fourth day however, in spite of
						kadesh's warning, they attracted the attention of 2
						water weirds. It's time to prove their worth in combat.
					</p>
					<div style={{ display: "flex" }}>
						<img
							src={session1}
							style={{ marginLeft: "auto", marginRight: "auto" }}
						/>
					</div>
				</div>
				<div style={{ border: "5px black solid" }}>
					<h4>Session 2</h4>
					<div
						style={{
							display: "flex",
							justifyContent: "space-between",
						}}
					>
						<h5>Year 180am, 16-06 to 18-06</h5>
						<p>2024-10-30</p>
					</div>
					<p>
						The shining diamonds dispatched the water weirds quickly
						and efficiently, as expected of them.
					</p>
					<p>
						After one last day of rest in their home region of Heiwa
						no mori, they entered the Doku no numachi region to the
						North. Surrounded by mud, water and insects, they
						started the hard journey toward the north-western part
						of the region.
					</p>
					<p>
						Keeping their eyes peeled for traces of their quarry or
						the flowers the alchemist requested, they trekked all
						day until time to make camp. They found neither.
					</p>
					<p>
						During the night, a strange form haunted all of them one
						by one during their hours of guard duty. A massive 15ft
						high "mound" moving silently and quickly through the
						vegetations. Not willing to explore alone during the
						night, they opted to wait until morning to see what it
						was.
					</p>
					<p>
						The morning after, they gathered themselves and made
						their way to the spot where the misterious form had been
						seen. They found no trace of a massive creature on the
						ground, nor in the fauna surrounding the space. All they
						found were small holes on an elevated circle of dirt in
						the ground. A quick examination by Chakrum and Aku (or
						the Nature brothers) revealed the holes to not be a
						natural occurences. Someone or something had placed them
						there.
					</p>
					<p>
						After a little more investigation involving water and a
						lot of force by Amara, they discovered the cause : a big
						fat mass of purple flesh lingered underneath. Inside the
						mass of flesh was nothing of note. Their education in
						monster anatomy revealed the mass to be an egg sac or
						placenta of some kind. Unclear. No trace of the creature
						or what the thing contained however.
					</p>
					<p>
						Carrying on for the day, they followed the trails as
						best they could in the hostile territory until they
						found massive trenches going up and down hills and
						through rivers and vegetation, indicating it's
						non-natural origins.
					</p>
					<p>
						In one of the trenches, they found what seemed to be
						struggling vines detached from the earth. After a closer
						inspection, they realised the vines were still alive,
						prickly and really poisonous. With the prophecy they
						received, they assumed the vines to be related to the
						monster and decided to make camp for they day and use
						the poison from them to make potions.
					</p>
					<p>
						Chakrum and Amara tried to gather the vines and make
						potions with moderate success
					</p>
					<p>
						Aku and Kadesh tried to hunt and gather for food but
						unfortunatly, only found food good enough for Hoozbert.
						(At least one of them was happy)
					</p>
					<p>
						Having spent their day, they decide to camp and continue
						their search in the morning
					</p>
					<div style={{ display: "flex" }}>
						<img
							src={session2}
							style={{ marginLeft: "auto", marginRight: "auto" }}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Sessions;
