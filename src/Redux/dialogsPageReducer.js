
const NEW_MESSAGE = 'newMessage';
const UPDATE_NEW_MESSAGE_TEXT = 'updateNewMessageText';

let initialState = {
            dialogs: [
                { name: 'Dima', id: 1 },
                { name: 'Valera', id: 2 },
                { name: 'Philip', id: 3 },
                { name: 'Grisha', id: 4 },
            ],

            messages: [
                { id: 1, message: 'Hello! How are you?' },
                { id: 2, message: 'Whats up?' },
                { id: 3, message: 'Go!' },
                { id: 4, message: 'WTF?' },
            ], 
        };

const dialogsPageReducer = (state=initialState, action) => {
	switch (action.type){
	   	case NEW_MESSAGE:
            let body = action.newText;
		      	return {
		      		...state,
		      		messages: [...state.messages, {id: Math.ceil(Math.random(10)), message: body,}],
		      	}			       				
	   	default: 
				return state;
	}
};

//Action Creator Block
export const newMessageActionCreator = (newText)=>({type:NEW_MESSAGE, newText});
export const updateNewMessageTextActionCreator = (message)=>({type:UPDATE_NEW_MESSAGE_TEXT, newMessage: message});

export default dialogsPageReducer;