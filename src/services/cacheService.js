

const CacheService = {

    get: (key) => {

        let value = localStorage.getItem(`_${key}`)

        if (value != null) {
            value = JSON.parse(value);
        }

        return value;
    },

    getKeys: () => {

        let keys = [];

        for (var key in localStorage) {

            if (key.startsWith('_')) {
                keys.push(key.slice(1));
            }
        }

        return keys;
    },

    set: (key, value) => {
        localStorage.setItem(`_${key}`, JSON.stringify(value));
    }

}



export default CacheService;