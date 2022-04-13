import {
	Header,
	Brand,
	Service,
	Portfolio,
	Testimonials,
	Pricing,
	Footer,
} from "./components/index";
import "./App.css";

function App() {
	return (
		<div className="App">
			<Header/>
			<Brand />
			<Service />
			<Portfolio />
			<Testimonials />
			<Pricing />
			<Footer />
		</div>
	);
}

export default App;
