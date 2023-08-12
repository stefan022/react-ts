import rootAPI from "./rootAPI";

import { IPhone } from "../../ts/interfaces/IProducts/IPhone";

export const phonesAPI = rootAPI.injectEndpoints({
    endpoints: (builder) => ({
        getPhones: builder.query<IPhone[], void>({
            query: () => "/phones",
            providesTags: ["phones"],
        }),
        
        getSinglePhone: builder.query<IPhone, number>({
            query: (id) => `/phones/${id}`,
            providesTags: ["phone"]
        })
    })
})

export const {
    useGetPhonesQuery,
    useGetSinglePhoneQuery
} = phonesAPI;