import React from "react";

const Home = ({ digito1, digito2, digito3, digito4, digito5, digito6 }) => {
	return (
		<div className="container text-center mt-5">
			<div className="d-flex justify-content-center">

				<div className="card bg-dark text-white p-3 m-1">
					<i className="fa-solid fa-clock fa-2x"></i>
				</div>

				<div className="card bg-dark text-white p-3 m-1 fs-1">{digito1}</div>
				<div className="card bg-dark text-white p-3 m-1 fs-1">{digito2}</div>
				<div className="card bg-dark text-white p-3 m-1 fs-1">{digito3}</div>
				<div className="card bg-dark text-white p-3 m-1 fs-1">{digito4}</div>
				<div className="card bg-dark text-white p-3 m-1 fs-1">{digito5}</div>
				<div className="card bg-dark text-white p-3 m-1 fs-1">{digito6}</div>

			</div>
		</div>
	);
};

export default Home;