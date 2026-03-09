import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = ({ digito1 }) => {
	return (
		<div className="text-center">
			<div>
				<h1 styler={{ fontSize: "100px"}}>{digito1}</h1>	
			</div>
		
		
			    
		</div>
	);
};

export default Home;