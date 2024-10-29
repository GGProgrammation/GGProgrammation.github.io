import InGameEvent from "../../parts/InGameEvent";
function Events() {
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
				<h3>Events</h3>
				<a href="/#encyclopedia">Back to encyclopedia</a>
			</div>
			<div>
				<InGameEvent
					name={"Creation of Monsutāhantā"}
					inWorldDate={"Year 0"}
					date={"2024-10-09"}
					session={0.1}
					description={
						'Creation of the Monsutāhantā village and formation of the elder Council by a previously nomad tribe of monster hunters. This is the beggining of the civilised world and the keeping of historical records. As such, everything afterwards will be refered to as "am". After Monsutāhantā.'
					}
				/>
				<InGameEvent
					name={"Start of the second generation of Hunters"}
					inWorldDate={"Year 20am"}
					date={"2024-10-09"}
					session={0.1}
					description={
						"With age, the first generation and founders of the village had grown unable to defend it. Before then, they trained the second generation who started to take their place and guard their home. The first generation entirely born and raised inside the village walls."
					}
				/>
				<InGameEvent
					name={"Start of the third generation of Hunters"}
					inWorldDate={"Year 60am"}
					date={"2024-10-09"}
					session={0.1}
					description={
						"With age, the second generation had grown unable to defend it. Before then, they trained the third generation who started to take their place and guard their home."
					}
				/>
				<InGameEvent
					name={"Start of the fourth generation of Hunters"}
					inWorldDate={"Year 110am"}
					date={"2024-10-09"}
					session={0.1}
					description={
						"With age, the third generation had grown unable to defend it. Before then, they trained the fourth generation who started to take their place and guard their home. This is your parents generation."
					}
				/>
				<InGameEvent
					name={"Start of the fifth generation of Hunters"}
					inWorldDate={"Year 180am"}
					date={"2024-10-16"}
					session={0.2}
					description={
						<p>
							With age, the fourth generation had grown unable to
							defend it. Before then, they trained the fifth
							generation who started to take their place and guard
							their home. This is your generation and where our
							story begins.
							<br /> Approximately 30 hunters are attending the
							attunement ceremony. Part of that group is the party
							of Amara, Aku, Chakrum and Kadesh. The day starts
							with the passing of the metaphorical torch from the
							old guard to the new. All parents and elders are
							present as the new generation receives the blessing
							of the Village.
							<br /> The next event of the day is to receive the
							magical weapon forged with the first monster killed
							by the trainees. Expertly crafted and soul bound by
							Jeremiyah and Mar Y'an, this will be the hunter's
							tool for the years to come.
							<ul>
								<li>
									Amara receives Ultra Inferno Crusher, the
									explosive hammer.
								</li>
								<li>
									Aku receives Sabimori, the corrosive
									harpoon.
								</li>
								<li>
									Chakrum receives The Gorger, the protectors
									fists.
								</li>
								<li>
									Kadesh receives Viridian Husk, the
									bio-cannon.
								</li>
							</ul>
							<br /> Next is the Companion attunement. Jerebriyah
							evaluates every trainee and assigns them a fitting
							companion.
							<ul>
								<li>
									Amara receives King, the sunsnacker, for
									it's ability to absorb energy and release it
									at just the right time for massive impact,
									fitting her weapon and style.
								</li>
								<li>
									Aku receives Myko, the hyphan, for it's
									ability to help others and hinder his foes,
									fitting his weapon and role.
								</li>
								<li>
									Chakrum receives Hoozbert, the gelatinooze,
									for it's ability to take a hit and absorb
									punishment, fitting his role.
								</li>
								<li>
									Kadesh receives Spotter, the peeper, for
									it's ability to cause harm and to diversify
									Kadesh's toolkit while augmenting his
									strengths.
								</li>
							</ul>
						</p>
					}
				/>
				<InGameEvent
					name={"The war preparation meeting"}
					inWorldDate={"Year 180am, 12-06"}
					date={"2024-10-23"}
					session={1}
					description={
						"The elder council has convoked all hunting parties to a war preparation meeting. If the rumors are to be believed, a wave of attacks are comming from monster all over the territories surrounding the Heiwa no mori region. If this is true, now will be the time for the fifth generation of hunters to make it's entrance."
					}
				/>
			</div>
		</div>
	);
}

export default Events;
