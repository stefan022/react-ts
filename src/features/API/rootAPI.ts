import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { tagTypes } from "../../constants/tagTypes"

const rootAPI = createApi({
	tagTypes,
	reducerPath: "api",
	endpoints: () => ({}),
	baseQuery: fetchBaseQuery({
		baseUrl: process.env.REACT_APP_BASE_URL as string,
		prepareHeaders: (headers) => {
            headers.set("X-RapidAPI-Key", process.env.REACT_APP_RAPID_API_KEY as string);
            headers.append("Content-Type", "application/json");

			return headers;
		},
	}),
});

export default rootAPI;