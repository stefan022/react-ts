import React from "react";

import { BrowserRouter, Route, Routes as BrowserRoutes } from "react-router-dom";

import { Home, Login, NotFound, Profile, Register } from "../pages";
import { PrivateLayout, PublicLayout } from "../layouts";
import { Routes } from "./Routes";
import ProfileInfo from "../pages/Profile/ProfileInfo/ProfileInfo";
import Wishlist from "../pages/Profile/Wishlist/Wishlist";

const Router = () => {
	return (
		<BrowserRouter>
			<BrowserRoutes>
                {/* Private */}
				<Route
					path={Routes.HOME}
					element={
						<PrivateLayout>
							<Home />
						</PrivateLayout>
					}
				/>

				<Route
					path={Routes.PROFILE}
					element={
						<PrivateLayout>
							<Profile />
						</PrivateLayout>
					}
				/>

				<Route
					path={`${Routes.PROFILE}${Routes.PROFILE_INFO}`}
					element={
						<PrivateLayout>
							<Profile>
                                <ProfileInfo/>
                            </Profile>
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

                {/* Public */}
                <Route
                    path={Routes.LOGIN}
                    element={
                        <PublicLayout>
                            <Login/>
                        </PublicLayout>
                    }
                />

                <Route
                    path={Routes.REGISTER}
                    element={
                        <PublicLayout>
                            <Register/>
                        </PublicLayout>
                    }
                />

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