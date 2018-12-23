
import CacheService from '../services/cacheService';

export const getAllKeys = (keys) => ({
    type: 'GET_KEYS',
    keys
});

const getKeys = () => {
    return (dispatch) => {

    
        let keys = CacheService.getKeys();
        debugger;
        dispatch(getAllKeys(keys));
    }
}

export {
    getKeys
}