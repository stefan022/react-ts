import React from "react";
import ContentMiddle from "../../content/ContentMiddle";

import { SiHey } from "react-icons/si";
import { skillsData } from "./skillsData";

import "./Home.scss"

const Home = () => {
	return (
		<div className="h-screen flex flex-col">
			<div className="flex flex-col items-center justify-end text-3xl h-1/2 pb-12">
				<p className="flex items-center">Hey! <SiHey className="mx-1 text-blue-400" size={30}/> My name is Stefan</p>
				<p>and I'm a <span className="text-blue-400 font-bold on_off">FE/React developer!</span></p>
			</div>
			<div className="h-1/2">
				<ContentMiddle>
				<div className="carousel">
					<p className="text-center text-3xl mb-2">Skills:</p>
					<div className="carousel__slide">
						{
							skillsData.map((skill) => {
								const { id, icon } = skill;

								return (
									<div className="carousel__slide-icon" key={id}>{icon}</div>
								)
							})
						}
					</div>
					<div className="carousel__slide">
						{
							skillsData.map((skill) => {
								const { id, icon } = skill;

								return (
									<div className="carousel__slide-icon" key={id}>{icon}</div>
								)
							})
						}
					</div>
				</div>
				</ContentMiddle>
			</div>
        </div>
	);
};

export default Home;
