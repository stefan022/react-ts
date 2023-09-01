import { ISupportMessage } from "../../ts/interfaces/ISupport/ISupportMessage";
import { IAddSingleMessageForSupport } from "../../ts/interfaces/ISupport/IAddSingleMessageForSupport";
import { IUpdateSeenInSingleMessageForSupport } from "../../ts/interfaces/ISupport/IUpdateSeenInSingleMessageForSupport";
import rootAPI from "./rootAPI";
import { IUpdateYourAnswerForSupportMessage } from "../../ts/interfaces/ISupport/IUpdateYourAnswerForSupportMessage";

export const supportMessagesAPI = rootAPI.injectEndpoints({
    endpoints: (builder) => ({
        getAllMessagesForSupport: builder.query<ISupportMessage[], void>({
            query: () => "/support_messages",
            providesTags: ["support-messages"] 
        }),

        getMyMessagesForSupport: builder.query<ISupportMessage[], string>({
            query: () => "/support_messages",
            providesTags: ["support-messages"],
            transformResponse: (response: ISupportMessage[], _queryApi, _arg) => {
                const userId: string = _arg;
                const getMyMessages: ISupportMessage[] = response.filter((message: ISupportMessage) => message.userId === userId);

                return getMyMessages;
            },
        }),

        getSingleMessageForSupport: builder.query<ISupportMessage, number>({
            query: (messageId) => `/support_messages/${messageId}`,
            providesTags: ["support-messages"]
        }),

        addSingleMessageForSupport: builder.mutation<{}, IAddSingleMessageForSupport>({
            query: (dto) => ({
                method: "POST",
                url: "/support_messages",
                body: dto
            }),
            invalidatesTags: ["support-messages"]
        }),

        updateSeenInSingleMessageForSupport: builder.mutation<{}, IUpdateSeenInSingleMessageForSupport>({
            query: (dto) => ({
                method: "PATCH",
                url: `/support_messages/${dto.messageId}`,
                body: dto
            }),
            invalidatesTags: ["support-messages"]
        }),

        updateYourAnswerForSupportMessage: builder.mutation<{}, IUpdateYourAnswerForSupportMessage>({
            query: (dto) => ({
                method: "PATCH",
                url: `/support_messages/${dto.messageId}`,
                body: dto
            }),
            invalidatesTags: ["support-messages"]
        })
    })
})

export const {
    useGetAllMessagesForSupportQuery,
    useGetMyMessagesForSupportQuery,
    useGetSingleMessageForSupportQuery,
    useAddSingleMessageForSupportMutation,
    useUpdateSeenInSingleMessageForSupportMutation,
    useUpdateYourAnswerForSupportMessageMutation
} = supportMessagesAPI;