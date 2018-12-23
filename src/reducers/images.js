const ImageReducerDefaultState = [];

const ImageReducer = (state = ImageReducerDefaultState, action) => {


  debugger


  switch (action.type) {

    case 'GET_IMAGE': return action.images;

    default:
      return state;
  }
};

export default ImageReducer;