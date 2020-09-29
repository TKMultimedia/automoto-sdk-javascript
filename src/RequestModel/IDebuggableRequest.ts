export default interface IDebuggableRequest {

    // Determine whether this is a debug request or not.
    debug?: boolean;

    // Debug tag to identify the debug request
    debugTag?: string;
}
