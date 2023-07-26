import React from "react";

import { BrowserRouter, Route, Routes as BrowserRoutes } from "react-router-dom";

import { Home, Login, NotFound, Register } from "../pages";
import { PrivateLayout, PublicLayout } from "../layouts";
import { Routes } from "./Routes";

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