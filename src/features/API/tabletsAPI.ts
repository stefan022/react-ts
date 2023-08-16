import { IProduct } from "../../ts/interfaces/IProduct/IProduct";
import { IScreen } from "../../ts/interfaces/IProduct/IScreen";
import rootAPI from "./rootAPI";

export const tabletsAPI = rootAPI.injectEndpoints({
    endpoints: (builder) => ({
        getTablets: builder.query<IProduct<IScreen>[], void>({
            query: () => "/tablets",
            providesTags: ["tablets"],
        }),
        
        getSingleTablet: builder.query<IProduct<IScreen>, number>({
            query: (id) => `/tablets/${id}`,
            providesTags: ["tablet"]
        }),

        updateBookmarkStatusForTablet: builder.mutation<{}, { tabletId: number, bookmarked: boolean }>({
            query: (dto) => ({
                method: "PATCH",
                url: `/tablets/${dto.tabletId}`,
                body: dto
            }),
            invalidatesTags: ["tablets"]
        })
    })
})

export const {
    useGetTabletsQuery,
    useGetSingleTabletQuery,
    useUpdateBookmarkStatusForTabletMutation
} = tabletsAPI;