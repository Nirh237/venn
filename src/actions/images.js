import axios from 'axios';

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

      return axios.post('https://api.flickr.com/services/rest/?method=flickr.photos.search&safe_search=1&format=json&nojsoncallback=1&api_key=bac9f1ccfd854f27894fd47c4f01b1e8&content_type=1&is_getty=1')
        .then(res => {
          console.log('res:',res);

          let imagesArry = [];
          let images= res.data.photos.photo;
          images.forEach(child => {
            imagesArry.push({
            ...child
          });
        });
          console.log('imagesArry:',imagesArry.title);


          if (images != null) {
            dispatch(getImage(imagesArry));
          }
          else {
            dispatch(error('Error'));
          }
        }).catch((error) => {

        })
    };
  };

  
  const startFindImage = ( title ) => {
    return (dispatch) => {
    
          return axios.post('https://api.flickr.com/services/rest/?method=flickr.photos.search&text='+title+'&format=json&nojsoncallback=1&api_key=bac9f1ccfd854f27894fd47c4f01b1e8&content_type=1&is_getty=1')
            .then(res => {
              console.log('resstartFindImage:',res);

              let searchImagesArry = [];
              let searchImages= res.data.photos.photo;
              searchImages.forEach(child => {
                searchImagesArry.push({
                ...child
              });
            });
              console.log('startFindImageimagesArry:',searchImagesArry);


              if (searchImages != null) {
                dispatch(getImage(searchImagesArry));
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


