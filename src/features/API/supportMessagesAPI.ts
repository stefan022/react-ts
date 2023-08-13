import rootAPI from "./rootAPI";

interface ISendSupportMessage {
    senderId: string;
    firstName: string;
    email: string;
    title: string;
    message: string;
    adminResponse: boolean;
}

export const supportMessagesAPI = rootAPI.injectEndpoints({
    endpoints: (builder) => ({
        sendSupportMessage: builder.mutation<{}, ISendSupportMessage>({
            query: (dto) => ({
                method: "POST",
                url: "/support",
                body: dto
            })
        })
    })
})

export const {
    useSendSupportMessageMutation
} = supportMessagesAPI;