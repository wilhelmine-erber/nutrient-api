"use strict"

// https://api.nal.usda.gov/fdc/v1/foods/search?query=apple&pageSize=2&api_key=2jCxTzwXnXmVpeloUuqtHphErw8yqMWSED1la9yv
// 2jCxTzwXnXmVpeloUuqtHphErw8yqMWSED1la9yv

// Axios ist immer ein Promise, deshalb kann ich mit .then etwas anhängen

const axios = require('axios')

module.exports.search = function search(term) {
    return axios.get('https://api.nal.usda.gov/fdc/v1/foods/search', {
        params: {
            api_key: "2jCxTzwXnXmVpeloUuqtHphErw8yqMWSED1la9yv",
            query: term
        }
    })
        .then((response) => response.data.foods)
}

module.exports.info = function info(fdcId) {
    return axios.get('https://api.nal.usda.gov/fdc/v1/food/' + fdcId, {
        params: {
            api_key: "2jCxTzwXnXmVpeloUuqtHphErw8yqMWSED1la9yv"
        }
    })
        .then((response) => response.data)
}