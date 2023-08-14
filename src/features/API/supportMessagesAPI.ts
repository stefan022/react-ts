import { IAddSingleMessageForSupport } from "../../ts/interfaces/ISupport/IAddSingleMessageForSupport";
import { ISupportMessage } from "../../ts/interfaces/ISupport/ISupportMessage";
import { IUpdateSeenInSingleMessageForSupport } from "../../ts/interfaces/ISupport/IUpdateSeenInSingleMessageForSupport";
import rootAPI from "./rootAPI";

export const supportMessagesAPI = rootAPI.injectEndpoints({
    endpoints: (builder) => ({
        getAllMessagesForSupport: builder.query<ISupportMessage[], number>({
            query: (supportId) => `/support/${supportId}/messages`,
            providesTags: ["support-messages"] 
        }),

        addSingleMessageForSupport: builder.mutation<{}, IAddSingleMessageForSupport>({
            query: (dto) => ({
                method: "POST",
                url: `/support/${dto.supportId}/messages`,
                body: dto
            }),
            invalidatesTags: ["support-messages"]
        }),

        updateSeenInSingleMessageForSupport: builder.mutation<{}, IUpdateSeenInSingleMessageForSupport>({
            query: (dto) => ({
                method: "PATCH",
                url: `/support/${dto.supportId}/messages/${dto.messageId}`,
                body: dto
            }),
            invalidatesTags: ["support-messages"]
        })
    })
})

export const {
    useGetAllMessagesForSupportQuery,
    useAddSingleMessageForSupportMutation,
    useUpdateSeenInSingleMessageForSupportMutation
} = supportMessagesAPI;