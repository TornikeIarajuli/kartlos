import "./App.css";
import Products from "./Components/products/Products";
// import Logo from "./resources/logo.png";

function App() {
	return (
		<div>
			<div className="header">
				<hr className="hr-left"></hr>
				{/* <img src={Logo} alt="Logo" /> */}
				<hr className="hr-right"></hr>
			</div>
			<div className="container">
				<Products />
			</div>
		</div>
	);
}

export default App;
