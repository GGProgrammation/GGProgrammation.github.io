function Region({ title, img_src, legend, children }) {
	return (
		<div style={{ border: "5px black solid" }}>
			<h3>{title}</h3>
			<div style={{ display: "flex" }}>
				<img src={img_src} style={{ width: "50%" }} />
				{legend}
			</div>
			{children}
		</div>
	);
}

export default Region;
