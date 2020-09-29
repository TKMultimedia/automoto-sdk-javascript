export default interface IDebuggableResponse {
    debug?: {
        [key: string]: string | number | {} | undefined;
        requestXml?: string;
        responseXml?: string;
    };
}
