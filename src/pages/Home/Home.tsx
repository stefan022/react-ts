import React, { FC } from "react";
import Container from "../../containers/Container/Container";

import { Carousel, Hello } from "../../components";

const Home: FC = (): JSX.Element => {
	return (
		<div className="h-screen flex flex-col">
			<Hello/>
			<div className="h-1/2">
				<Container>
					<Carousel/>
				</Container>
			</div>
        </div>
	);
};

export default Home;
