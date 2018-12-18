const ImageReducerDefaultState = [];

const ImageReducer = (state = ImageReducerDefaultState, action) => {
    switch (action.type) {

      case 'GET_IMAGE': return [...state,action.image];

      default:
        return state;
    }
  };

  export default ImageReducer;