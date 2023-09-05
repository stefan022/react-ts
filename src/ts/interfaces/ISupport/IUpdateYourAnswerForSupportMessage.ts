export interface IUpdateYourAnswerForSupportMessage {
    messageId: number;
    answer: {
        adminName: string;
        adminMessage: string;
        adminMessageTimestamp: number;
    },
    adminResponse: true;
    seen: false;
    changeTimestamp: number;
}