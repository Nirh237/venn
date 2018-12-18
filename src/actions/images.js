import axios from 'axios';

export const error = (msg) => ({
    type: 'ERROR',
    msg
  });

export const getImage = (image) => ({
    type: 'GET_IMAGE',
    image
  });

const getImagesByTitle = (title) => {

    return (dispatch) => {
  
      return axios.post(`https://www.omdbapi.com/?&apikey=98f17da2&t='${title}'`)
        .then(res => {
        
  
          const image = res.data;
  
          if (image.Response === "True") {
            dispatch(getImage(image));
          }
          else {
            dispatch(error('Error'));
          }
        }).catch((error) => {
       
        })
    };
  };

  export {
      getImagesByTitle
  }