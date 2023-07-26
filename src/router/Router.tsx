import React from "react";

import { BrowserRouter, Route, Routes as BrowserRoutes } from "react-router-dom";

import { Home, Login, NotFound, Orders, Profile, Wishlist, Register, Settings } from "../pages";
import { PrivateLayout, PublicLayout } from "../layouts";
import { Routes } from "./Routes";

const Router = () => {
	return (
		<BrowserRouter>
			<BrowserRoutes>
                {/* Private */}
				{/* Home Page */}
				<Route
					path={Routes.HOME}
					element={
						<PrivateLayout>
							<Home />
						</PrivateLayout>
					}
				/>

				{/* Profile Pages */}
				<Route
					path={Routes.PROFILE}
					element={
						<PrivateLayout>
							<Profile />
						</PrivateLayout>
					}
				/>

				<Route
					path={`${Routes.PROFILE}${Routes.WISHLIST}`}
					element={
						<PrivateLayout>
							<Profile>
                                <Wishlist/>
                            </Profile>
						</PrivateLayout>
					}
				/>

				<Route
					path={`${Routes.PROFILE}${Routes.ORDERS}`}
					element={
						<PrivateLayout>
							<Profile>
                                <Orders/>
                            </Profile>
						</PrivateLayout>
					}
				/>

				<Route
					path={`${Routes.PROFILE}${Routes.SETTINGS}`}
					element={
						<PrivateLayout>
							<Profile>
                                <Settings/>
                            </Profile>
						</PrivateLayout>
					}
				/>

                {/* Public */}
				{/* Login Page */}
                <Route
                    path={Routes.LOGIN}
                    element={
                        <PublicLayout>
                            <Login/>
                        </PublicLayout>
                    }
                />

				{/* Register Page */}
                <Route
                    path={Routes.REGISTER}
                    element={
                        <PublicLayout>
                            <Register/>
                        </PublicLayout>
                    }
                />

				{/* Not Found Page */}
                <Route
                    path={Routes.NOT_FOUND}
                    element={
                        <PublicLayout>
                            <NotFound/>
                        </PublicLayout>
                    }
                />
			</BrowserRoutes>
		</BrowserRouter>
	);
}

export default Router;