import React from "react";
import ContentMiddle from "../../content/ContentMiddle";

import { SiHey } from "react-icons/si";

import "./Home.scss"

const Home = () => {
	return (
		<ContentMiddle>
			<div className="flex flex-col items-center justify-center pt-56 text-3xl">
				<p className="flex items-center">Hey! <SiHey className="mx-1 text-blue-400" size={30}/> My name is Stefan</p>
				<p>and I'm a <span className="text-blue-400 font-bold on_off">FE/React developer!</span></p>
			</div>
        </ContentMiddle>
	);
};

export default Home;
