import ImageService from '../services/imageService';

export const error = (msg) => ({
  type: 'ERROR',
  msg
});

export const getImage = (images) => ({
  type: 'GET_IMAGE',
  images
});

const getImagesByTitle = () => {

  return (dispatch) => {

    return ImageService.get().then(res => {

      if (res != null) {
        dispatch(getImage(res));
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
        dispatch(getImage(res));
      }
      else {
        dispatch(error('Error'));
      }
    }).catch((error) => {

    })

  };
};


export {
  getImagesByTitle,
  startFindImage
}


