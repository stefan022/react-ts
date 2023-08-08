import React from "react";
import { SignUp, Spinner } from "../../components";

import logo from "../../assets/logo.png";
import wallpaper from "../../assets/wallpaper.png";

const Register: React.FC = (): JSX.Element => {
	const [ loading, setLoading ] = React.useState<boolean>(false);

	return (
		<div className="flex items-center">
			<div className="relative w-1/2">
                <img className="absolute top-5 right-0 z-10" src={logo} alt="logo.png" />
                <img className="w-full h-screen relative" src={wallpaper} alt="wallpaper.png"/>
            </div>
			<div className="w-1/2">
				<SignUp 
					setLoading={setLoading}
				/>
			</div>
			{ loading && <Spinner/> }
		</div>
	);
};

export default Register;
