import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const rootAPI = createApi({
	tagTypes: [],
	reducerPath: "api",
	endpoints: () => ({}),
	baseQuery: fetchBaseQuery({
		baseUrl: process.env.REACT_APP_BASE_URL,
		prepareHeaders: (headers) => {
            headers.set("X-RapidAPI-Key", process.env.REACT_APP_API_KEY!);
            headers.append("Content-Type", "application/json");

			return headers;
		},
	}),
});

export default rootAPI;