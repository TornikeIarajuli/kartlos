import "./App.css";
import Products from "./Components/products/Products";
// import Logo from "./resources/logo.png";
import ShippingForm from "./Components/ShippingForm";
const showForm = false;
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

			{showForm && <ShippingForm />}
		</div>
	);
}


export default App;
