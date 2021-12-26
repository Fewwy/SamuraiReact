const ADD_POST= 'ADD_POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY'
const SEND_MESSAGE = 'SEND_MESSAGE'

let store = {
  _callsubscriber(){
    console.log('no subscribers (observers)')
  },
  subscribe(observer) {
    this._rerenderEntireTree = observer
  },
  _state: {
    profilePage: {
      posts: [
        {
          id: 1,
          postName: 'Today I ran over a grandma',
          likes: 2,
        },
        {
          id: 2,
          postName: "I'm so awesome",
          likes: 3,
        },
        {
          id: 3,
          postName: 'Too drunk to fuck',
          likes: 5,
        },
        {
          id: 4,
          postName: 'Waaaaaaaaaaaaaaaaaagh',
          likes: 10,
        },
        {
          id: 5,
          postName: 'Mtg anyone?',
          likes: 9,
        },
      ],
      newPostText: 'new post text'
    },
    dialogsPage: {
      dialogsData: [
        {
          id: 1,
          name: 'Alex',
        },
        {
          id: 2,
          name: 'Max',
        },
        {
          id: 3,
          name: 'Vova',
        },
        {
          id: 4,
          name: 'Polina',
        },
        {
          id: 5,
          name: 'Denis',
        },
      ],
      messagesData: [
        {
          message: 'hahha',
        },
        {
          message: 'huhuh',
        },
        {
          message: 'hehe',
        },
        {
          message: 'muhaha',
        },
        {
          message: 'mehehe',
        },
      ],
      newMessageText: '',
    },
    sideBar: {
      friendsList: [
        {
          friendId: 1,
          friendName: 'Alex',
        },
        {
          friendId: 2,
          friendName: 'Max',
        },
        {
          friendId: 3,
          friendName: 'Vova',
        },
        {
          friendId: 4,
          friendName: 'Polina',
        },
        {
          friendId: 5,
          friendName: 'Denis',
        },
      ],
    },
  },
  _rerenderEntireTree() {
    console.log('state was changed')
  },
  getState() {
    return this._state
  },
  setFirstName(value) {
    this._state.firstName = value
    this._callsubscriber()
  },
  dispatch(action) {
    if( action.type === ADD_POST) {
        let newPost = {
          id: this._state.profilePage.posts.length + 1,
          postMessage: this._state.profilePage.newPostText,
          likes: 140
        };
        this._state.profilePage.posts.push(newPost);
        this._state.newPostText = '';
        this._rerenderEntireTree(this._state);
    }
    else if( action.type === UPDATE_NEW_POST_TEXT) {
        store._state.profilePage.newPostText = action.newText
        this._rerenderEntireTree(this._state)
    }
    else if ( action.type === UPDATE_NEW_MESSAGE_BODY) {
      this._state.dialogsPage.newMessageText = action.messageText
      this._rerenderEntireTree(this._state)
    }
    else if ( action.type === SEND_MESSAGE) {
      let newMessage = { message: this._state.dialogsPage.newMessageText}
      this._state.dialogsPage.newMessageText = ''
      this._state.dialogsPage.messagesData.push(newMessage)
      this._rerenderEntireTree(this._state)
    }
  }
}

export const addPostActionCreator = () => ({
    type: ADD_POST
})

export const updateNewPostTextActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT, newText: text
})

export const addNewMessageActionCreator = (text) => ({
    type: UPDATE_NEW_MESSAGE_BODY, messageText: text
})

export const sendNewMessageActionCreator = () => ({
    type: SEND_MESSAGE,
})
export default store;
window.store = store