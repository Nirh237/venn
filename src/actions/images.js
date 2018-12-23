import ImageService from '../services/imageService';

export const error = (msg) => ({
  type: 'ERROR',
  msg
});

export const getAll = (images) => ({
  type: 'GET_IMAGE',
  images
});

const getImages = (optins) => {

  return (dispatch) => {

    return ImageService.get(optins).then(res => {

      if (res != null) {
        debugger;
        dispatch(getAll(res));
      }
      else {
        dispatch(error('Error'));
      }
    }).catch((error) => {

    })
  };
};


const startFindImage = (query, options) => {
  return (dispatch) => {

    return ImageService.find(query, options).then(res => {

      if (res != null) {
        dispatch(getAll(res));
      }
      else {
        dispatch(error('Error'));
      }
    }).catch((error) => {
      
    })

  };
};


export {
  getImages,
  startFindImage
}


