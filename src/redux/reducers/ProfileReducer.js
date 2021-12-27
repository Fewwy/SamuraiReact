const ADD_POST= 'ADD_POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'

const profileReducer = (state, action) => {
        switch(action.type) {
            case ADD_POST:
                let newPost = {
                  id: state.posts.length + 1,
                  postMessage: state.newPostText,
                  likes: 140
                };
                state.posts.push(newPost);
                state.newPostText = '';
                return state
            case UPDATE_NEW_POST_TEXT:
                state.newPostText = action.newText
                return state;
            default:
                return state;
            }
}

export default profileReducer;