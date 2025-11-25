import React from "react";
import { useState } from "react";
import './style.css';

function HomePage() {
	//declaration state if needed in the future
	const [number, setNumber] = useState(0);

	return(
		
		<>
			<div className="h-title">
				<h1>hello from the Rayen_bt</h1>
				<h2>this is a test page</h2>
				<h3>le nombre initiale :{number}</h3>
		
			</div>
			
			<div className="btn">
				<button onClick={() => setNumber(number + 1)}>➕ Increment</button>
				<button onClick={() => setNumber(number - 1)}>➖ Decrement</button>

			</div>
			

		
		</>

	);
}
export default HomePage;

