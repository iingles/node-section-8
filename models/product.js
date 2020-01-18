const fs = require('fs')
const path = require('path')

const rtDir = require('../util/rtpath')

const p = path.join(
    rtDir, 
    'data', 
    'products.json'
)

const getProdsFromFile = cb => {
    fs.readFile(p, (err, fileContent)=>{
        if(err) {
           return cb([])
        }
        cb(JSON.parse(fileContent))
    })
}

module.exports = class Product {
    constructor(name, imgURL, desc, price) {
        this.name = name
        this.imgURL = imgURL
        this.desc = desc
        this.price = price
    }

    save() {
        getProdsFromFile(products => {
            products.push(this)
            fs.writeFile(p, JSON.stringify(products), err => {
                console.log(err)
            })
        })
    }

    //This should fetch all existing products
    static fetchAll(cb) {
       getProdsFromFile(cb)
    }
}