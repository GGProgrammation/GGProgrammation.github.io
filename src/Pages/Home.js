import mhImage from "./../Images/MH-image.png";

function Home() {
	return (
		<div style={{ display: "flex", flexDirection: "column" }}>
			<h1>Home of my notes</h1>
			<p>
				Here you can find anything and everything related to my next DND
				game titled : <span style={{ color: "red" }}>Hunters</span>
			</p>
			<img src={mhImage} alt="mh-image" />
		</div>
	);
}

export default Home;
