"use strict"

const productApi = require('./api/product')
const search = productApi.search

search('Apple').then((p) => console.log(p))

