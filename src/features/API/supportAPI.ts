import { ISupport } from "../../ts/interfaces/ISupport/ISupport";
import rootAPI from "./rootAPI";

export const supportAPI = rootAPI.injectEndpoints({
    endpoints: (builder) => ({
        getAllSupport: builder.query<ISupport[], void>({
            query: () => "/support",
            providesTags: ["support"]
        }),

        addSingleSupport: builder.mutation<ISupport, { senderId: string }>({
            query: (dto) => ({
                method: "POST",
                url: "/support",
                body: dto
            }),
            invalidatesTags: ["support"]
        })
    })
})

export const {
    useGetAllSupportQuery,
    useAddSingleSupportMutation
} = supportAPI;