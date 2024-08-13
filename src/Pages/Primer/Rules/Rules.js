function Rules() {
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
				<h3>Rules</h3>
				<a href="/#primer/rules/companions">Companions</a>
			</div>
			<ul>
				<li>Caracters</li>
				<dd>
					- All characters must be a level 3{" "}
					<a href="https://dnd5e.wikidot.com/fighter">fighter</a> with
					the{" "}
					<a href="https://dnd5e.wikidot.com/fighter:champion">
						champion
					</a>{" "}
					subclass
				</dd>
				<dd>
					- All characters must be good (or at the very least, not
					evil)
				</dd>
				<dd>
					- All characters must choose a{" "}
					<a href="http://dnd5ed.wikidot.com/weapons">weapon</a> that
					will be bound to them, gaining abilities and statistics as
					the campain progresses
				</dd>
				<dd>
					- All characters must choose a companion from a list I will
					provide you. This companion will also gain abilities and
					statistics as the campain progresses
				</dd>
				<dd>
					- All characters must choose the fighter starting gear,
					replacing all weapons with the bounded one
				</dd>
				<li>Players</li>
				<dd>
					- All players must enter/maintain their caracter sheet on
					roll20
				</dd>
				<dd>
					- All players must provide an ilustration of their caracters
					in the form of a token to be used in roll20
				</dd>
				<dd>
					- All players must provide a short description of their
					caracter (appearance AND personality)
				</dd>
				<dd>
					- All players must provide the name of their caracter's
					parents and their status (deceased, absent, present)
				</dd>
				<li>Bound weapons</li>
				<li>Companions</li>
			</ul>
		</div>
	);
}

export default Rules;
