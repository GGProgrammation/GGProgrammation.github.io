function Companion({ monster_name, monster_img, monster_sheet }) {
	return (
		<>
			<h4>{monster_name}</h4>
			<div>
				<div style={{ display: "flex", flexDirection: "columns" }}>
					<img
						src={monster_img}
						style={{ width: "500px", height: "500px" }}
					/>
					<img
						src={monster_sheet}
						style={{ width: "500px", height: "1000px" }}
					/>
				</div>
			</div>
		</>
	);
}

export default Companion;
