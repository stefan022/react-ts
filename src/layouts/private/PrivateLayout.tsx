import React, { ReactNode } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

interface IProps {
	children: ReactNode;
}

const PrivateLayout = ({ children }: IProps): JSX.Element | null => {
	/*
    Include this logic where there is a token

    const token = localStorage.getItem("token");

	const navigate = useNavigate();

	useEffect(() => {
		if (!token) {
			navigate(AppRoutes.LOGIN);

			return;
		}
		// eslint-disable-next-line
	}, [token]);

	if (token) return <>{children}</>;

	return null;
    */

	return (
		<div>
			<Navbar/>
			<div className="h-screen">
				{children}
			</div>
			<Footer/>
		</div>
	);
};

export default PrivateLayout;