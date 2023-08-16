import { IProduct } from "../../ts/interfaces/IProduct/IProduct";
import rootAPI from "./rootAPI";

export const laptopsAPI = rootAPI.injectEndpoints({
    endpoints: (builder) => ({
        getLaptops: builder.query<IProduct<string>[], void>({
            query: () => "/laptops",
            providesTags: ["laptops"],
        }),
        
        getSingleLaptop: builder.query<IProduct<string>, number>({
            query: (id) => `/laptops/${id}`,
            providesTags: ["laptop"]
        }),

        updateBookmarkStatusForLaptop: builder.mutation<{}, { laptopId: number, bookmarked: boolean }>({
            query: (dto) => ({
                method: "PATCH",
                url: `/laptops/${dto.laptopId}`,
                body: dto
            }),
            invalidatesTags: ["laptops"]
        })
    })
})

export const {
    useGetLaptopsQuery,
    useGetSingleLaptopQuery,
    useUpdateBookmarkStatusForLaptopMutation
} = laptopsAPI;