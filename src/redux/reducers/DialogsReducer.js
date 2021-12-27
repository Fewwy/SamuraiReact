const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY'
const SEND_MESSAGE = 'SEND_MESSAGE'

export const dialogsReducer = (state, action) => {
    switch(action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageText = action.messageText
            return state;
        case SEND_MESSAGE:
            let newMessage = { message: state.newMessageText}
            state.newMessageText = ''
            state.messagesData.push(newMessage)
            return state;
        default:
            return state
    }
}

export default dialogsReducer;