
const KeysReducerDefaultState = [];

const KeysReducer = (state = KeysReducerDefaultState, action) => {
   
    switch (action.type) {

      case 'GET_KEYS': return action.keys;
    
      default:
        return state;
    }
  };

  export default KeysReducer;