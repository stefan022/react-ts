import React from "react";

import { BrowserRouter, Route, Routes as BrowserRoutes } from "react-router-dom";

import { Home, Login, NotFound, Orders, Profile, Wishlist, Register, Settings, Products, Blogs, Faq, Support, Cart, Messages, Dashboard, Phones, Tablets, Laptops, Televisions, Others, Chat, Kanban, Calendar, Employees, Customers, AdminMessages, AdminProducts, AdminOrders, AdminReviews, NotAuthorized } from "../pages";
import { PrivateLayout, PublicLayout, AdminLayout } from "../layouts";
import { Routes } from "./Routes";
import ProductDetails from "../pages/ProductDetails/ProductDetails";

const Router = () => {
	return (
		<BrowserRouter>
			<BrowserRoutes>
                {/* Private */}
				{/* Navigation */}
				<Route
					path={Routes.HOME}
					element={
						<PrivateLayout>
							<Home />
						</PrivateLayout>
					}
				/>

				<Route
					path={Routes.PRODUCTS}
					element={
						<PrivateLayout>
							<Products />
						</PrivateLayout>
					}
				/>

				<Route
					path={Routes.BLOGS}
					element={
						<PrivateLayout>
							<Blogs />
						</PrivateLayout>
					}
				/>

				<Route
					path={Routes.FAQ}
					element={
						<PrivateLayout>
							<Faq />
						</PrivateLayout>
					}
				/>

				<Route
					path={Routes.SUPPORT}
					element={
						<PrivateLayout>
							<Support />
						</PrivateLayout>
					}
				/>

				{/* Products */}
				<Route
					path={`${Routes.PRODUCTS}${Routes.PHONES}`}
					element={
						<PrivateLayout>
							<Phones />
						</PrivateLayout>
					}
				/>

				<Route
					path={`${Routes.PRODUCTS}${Routes.TABLETS}`}
					element={
						<PrivateLayout>
							<Tablets />
						</PrivateLayout>
					}
				/>

				<Route
					path={`${Routes.PRODUCTS}${Routes.LAPTOPS}`}
					element={
						<PrivateLayout>
							<Laptops />
						</PrivateLayout>
					}
				/>

				<Route
					path={`${Routes.PRODUCTS}${Routes.TELEVISIONS}`}
					element={
						<PrivateLayout>
							<Televisions />
						</PrivateLayout>
					}
				/>

				<Route
					path={`${Routes.PRODUCTS}${Routes.OTHERS}`}
					element={
						<PrivateLayout>
							<Others />
						</PrivateLayout>
					}
				/>

				{/* Product Details */}

				<Route
					path={`${Routes.PRODUCTS}${Routes.PRODUCT_DETAILS}`}
					element={
						<PrivateLayout>
							<ProductDetails />
						</PrivateLayout>
					}
				/>

				{/* Chat Page */}
				<Route
					path={Routes.CHAT}
					element={
						<PrivateLayout>
							<Chat />
						</PrivateLayout>
					}
				/>

				{/* Messages Page */}
				<Route
					path={Routes.MESSAGES}
					element={
						<PrivateLayout>
							<Messages />
						</PrivateLayout>
					}
				/>

				{/* Cart Page */}
				<Route
					path={Routes.CART}
					element={
						<PrivateLayout>
							<Cart/>
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

				{/* Dashboard */}
				<Route
					path={Routes.DASHBOARD}
					element={
						<AdminLayout>
							<Dashboard title="Dashboard"/>
						</AdminLayout>
					}
				/>

				<Route
					path={`${Routes.DASHBOARD}${Routes.KANBAN}`}
					element={
						<AdminLayout>
							<Dashboard title="Kanban">
								<Kanban/>
							</Dashboard>
						</AdminLayout>
					}
				/>

				<Route
					path={`${Routes.DASHBOARD}${Routes.CALENDAR}`}
					element={
						<AdminLayout>
							<Dashboard title="Calendar">
								<Calendar/>
							</Dashboard>
						</AdminLayout>
					}
				/>

				<Route
					path={`${Routes.DASHBOARD}${Routes.EMPLOYEES}`}
					element={
						<AdminLayout>
							<Dashboard title="Employees">
								<Employees/>
							</Dashboard>
						</AdminLayout>
					}
				/>

				<Route
					path={`${Routes.DASHBOARD}${Routes.CUSTOMERS}`}
					element={
						<AdminLayout>
							<Dashboard title="Customers">
								<Customers/>
							</Dashboard>
						</AdminLayout>
					}
				/>

				<Route
					path={`${Routes.DASHBOARD}${Routes.ADMIN_PRODUCTS}`}
					element={
						<AdminLayout>
							<Dashboard title="Products">
								<AdminProducts/>
							</Dashboard>
						</AdminLayout>
					}
				/>

				<Route
					path={`${Routes.DASHBOARD}${Routes.ADMIN_ORDERS}`}
					element={
						<AdminLayout>
							<Dashboard title="Orders">
								<AdminOrders/>
							</Dashboard>
						</AdminLayout>
					}
				/>

				<Route
					path={`${Routes.DASHBOARD}${Routes.ADMIN_MESSAGES}`}
					element={
						<AdminLayout>
							<Dashboard title="Messages">
								<AdminMessages/>
							</Dashboard>
						</AdminLayout>
					}
				/>

				<Route
					path={`${Routes.DASHBOARD}${Routes.ADMIN_REVIEWS}`}
					element={
						<AdminLayout>
							<Dashboard title="Reviews">
								<AdminReviews/>
							</Dashboard>
						</AdminLayout>
					}
				/>

				{/* Not Authorized */}
                <Route
                    path={Routes.NOT_AUTHORIZED}
                    element={
                        <PublicLayout>
                            <NotAuthorized/>
                        </PublicLayout>
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