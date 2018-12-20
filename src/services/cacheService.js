

const CacheService = {

    get: (key) => {
        
        let value = localStorage.getItem(key)

        if (value != null) {
            value = JSON.parse(value);
        }

        return value;
    },

    set: (key, value) => {
        localStorage.setItem(key, JSON.stringify(value));
    }

}



export default CacheService;