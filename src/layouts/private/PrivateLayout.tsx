import React, { ReactNode } from "react";

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

	return <div>{children}</div>;
};

export default PrivateLayout;