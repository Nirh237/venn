import axios from 'axios';
import CacheService from '../services/cacheService';

const ImageService = {

    get: (options) => {

        let page = options.page

        return axios.post(`https://api.flickr.com/services/rest/?method=flickr.photos.search&safe_search=1&page=${page}&per_page=${12}&format=json&nojsoncallback=1&api_key=bac9f1ccfd854f27894fd47c4f01b1e8&content_type=1&is_getty=1`)
            .then(res => {
                return res.data.photos.photo;
            });

    },



    find: (query, options) => {


        console.log(query);

        let cache = options.cache;
        let httpRequest = options.httpRequest;

        return new Promise((resolve, reject) => {
            

            let result = [];
            query.forEach(key => {
               let value = CacheService.get(key);
                if(value)
                {
                   result = result.concat(value);
                }
              
            });
           
            if (!httpRequest) {
                console.log(result);
                resolve(result);
            } else {
             let title = query[0];
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