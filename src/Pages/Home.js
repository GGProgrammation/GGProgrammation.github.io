import mhImage from "./../Images/MH-image.png";

function Home() {
	return (
		<div style={{ display: "flex", flexDirection: "column" }}>
			<div className="Page-header">
				<p style={{ textAlign: "center" }}>
					Here you can find anything and everything related to my next
					DND game titled
				</p>
				<h3>Hunters</h3>
			</div>

			<img src={mhImage} alt="mh-image" />
		</div>
	);
}

export default Home;
