import rootAPI from "./rootAPI";
import { IAddToWishlist } from "../../ts/interfaces/IWishlist/IAddToWishlist";
import { IWishlist } from "../../ts/interfaces/IWishlist/IWishlist";

export const wishlistAPI = rootAPI.injectEndpoints({
    endpoints: (builder) => ({
        getAllFromWishlist: builder.query<IWishlist[], void>({
            query: () => "/wishlist",
            providesTags: ["wishlist"]
        }),

        addToWishlist: builder.mutation<IWishlist, IAddToWishlist>({
            query: (dto) => ({
                method: "POST",
                url: "/wishlist",
                body: dto
            }),
            invalidatesTags: ["wishlist"]
        }),

        deleteFromWishlist: builder.mutation<{}, number>({
            query: (wishlistId) => ({
                method: "DELETE",
                url: `/wishlist/${wishlistId}`
            }),
            invalidatesTags: ["wishlist"]
        })
    }),
})

export const {
    useGetAllFromWishlistQuery,
    useAddToWishlistMutation,
    useDeleteFromWishlistMutation
} = wishlistAPI;