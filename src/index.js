"use strict"
/*
const productApi = require('./api/product')
const search = productApi.search
const info = productApi.info
*/

const { search, info } = require('./api/product')

search('Apple').then((res) => console.log(res))

info(1750339).then((p) => console.log(p))

