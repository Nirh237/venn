
import CacheService from '../services/cacheService';

export const get = (keys) => ({
    type: 'GET_KEYS',
    keys
});

const getKeys = () => {
    return (dispatch) => {


        let keys = CacheService.getKeys();
        dispatch(get(keys));
    }
}

export {
    getKeys
}