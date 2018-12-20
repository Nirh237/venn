import axios from 'axios';
import CacheService from '../services/cacheService';

const ImageService = {

    get: () => {

        return axios.post('https://api.flickr.com/services/rest/?method=flickr.photos.search&safe_search=1&format=json&nojsoncallback=1&api_key=bac9f1ccfd854f27894fd47c4f01b1e8&content_type=1&is_getty=1')
            .then(res => {
                return res.data.photos.photo;
            });

    },

    find: (title, options) => {


        console.log(title);

        let cache = options.cache;

        return new Promise((resolve, reject) => {

            let value = CacheService.get(title);
            if (value !== null) {
                console.log('from cache');
                resolve(value);
            } else {
                axios.post('https://api.flickr.com/services/rest/?method=flickr.photos.search&text=' + title + '&format=json&nojsoncallback=1&api_key=bac9f1ccfd854f27894fd47c4f01b1e8&content_type=1&is_getty=1')
                    .then(res => {
                        console.log('from http');
                        let data = res.data.photos.photo;

                        if (cache) {
                            CacheService.set(title, data);
                        }

                        resolve(data);
                    });
            }
        });
    }
}

export default ImageService;